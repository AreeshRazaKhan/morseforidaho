// Mask user input as +1 (XXX) XXX-XXXX. The +1 country code is a constant
// prefix on every rendered value so the payload sent to GHL is always in the
// same shape. When the user types or pastes a value that already carries a
// +1 / 1 country code (as + prefix, or as a leading 1 on an 11+ digit string)
// we strip it so it doesn't double up on the constant prefix.
export const formatPhone = (raw) => {
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
  digits = digits.slice(0, 10)
  if (digits.length === 0) return ''
  if (digits.length <= 3) return `+1 (${digits}`
  if (digits.length <= 6) return `+1 (${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}
