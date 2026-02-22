export function formatArabicDate(date: Date) {
  return new Intl.DateTimeFormat('ar-EG', {
    dateStyle: 'full',
    timeStyle: 'short'
  }).format(date);
}

export function toArabicNumerals(value: number) {
  return new Intl.NumberFormat('ar-EG').format(value);
}
