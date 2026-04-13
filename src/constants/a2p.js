// A2P 10DLC compliance constants — see Operation 1776 SOP
// (C:\Users\Dev\Downloads\SOP_A2P_Website_Compliance.pdf).
//
// Consent text uses the SOP-required active opt-in format ("I agree to
// receive…"). Both strings name the legal business, list use cases,
// disclose message frequency + data rates, and include STOP/HELP keyword
// instructions. Do not edit these without re-reviewing the SOP.

export const LEGAL_BUSINESS_NAME = 'Morse For Idaho'

export const SMS_CONSENT = `By providing your phone number, you consent to receive calls and text messages from ${LEGAL_BUSINESS_NAME}. Msg & data rates may apply. Msg frequency may vary. Messaging may include requests for donation. Reply STOP to unsubscribe or HELP for help. View Privacy Policy for more info.`
