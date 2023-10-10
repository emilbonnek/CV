export function formatPhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4");
}
