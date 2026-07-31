// Reduce any user input to the 10 national digits of a US number, dropping the
// +1 country code. Shared by the input mask and the completeness check so both
// agree on what "the number" is regardless of how the user typed or pasted it.
// A value that already carries a +1 / 1 country code (as a + prefix, or as a
// leading 1 on an 11+ digit string) has it stripped so it doesn't double up on
// the constant prefix the mask renders.
const nationalDigits = (raw) => {
  const str = (raw || '').toString()
  const hadPlus = str.trim().startsWith('+')
  let digits = str.replace(/\D/g, '')
  // Strip a leading 1 when the input carried an explicit country-code
  // signal (a leading + or more than 10 digits). Backspacing through the
  // rendered "+1 ..." mask keeps hadPlus true, which prevents the masked
  // prefix from being misread as an area-code digit.
  if ((hadPlus || digits.length > 10) && digits.startsWith('1')) {
    digits = digits.slice(1)
  }
  return digits.slice(0, 10)
}

// Mask user input as +1 (XXX) XXX-XXXX. The +1 country code is a constant
// prefix on every rendered value so the payload sent to GHL is always in the
// same shape.
export const formatPhone = (raw) => {
  const digits = nationalDigits(raw)
  if (digits.length === 0) return ''
  if (digits.length <= 3) return `+1 (${digits}`
  if (digits.length <= 6) return `+1 (${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

// A phone number is only usable if it carries all 10 national digits. Partial
// input (e.g. "+1 (208") must never reach GHL — it cannot be dialled or texted,
// and a half-number in the SMS workflow is an A2P deliverability problem.
// Empty input is NOT complete; callers decide whether an empty phone is allowed.
export const isCompletePhone = (raw) => nationalDigits(raw).length === 10
