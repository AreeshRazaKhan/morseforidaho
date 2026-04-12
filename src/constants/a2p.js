// A2P 10DLC compliance constants — see Operation 1776 SOP
// (C:\Users\Dev\Downloads\SOP_A2P_Website_Compliance.pdf).
//
// Consent text uses the SOP-required active opt-in format ("I agree to
// receive…"). Both strings name the legal business, list use cases,
// disclose message frequency + data rates, and include STOP/HELP keyword
// instructions. Do not edit these without re-reviewing the SOP.

export const LEGAL_BUSINESS_NAME = 'Morse For Idaho'

export const SMS_UPDATES_CONSENT = `I agree to receive SMS updates from ${LEGAL_BUSINESS_NAME} regarding campaign updates, event reminders, and volunteer coordination. Message frequency varies. Message & data rates may apply. Reply STOP to unsubscribe or HELP for help.`

export const SMS_PROMO_CONSENT = `I agree to receive promotional SMS messages from ${LEGAL_BUSINESS_NAME}, including fundraising requests, donation drives, and event promotions. Message frequency varies. Message & data rates may apply. Reply STOP to unsubscribe or HELP for help.`
