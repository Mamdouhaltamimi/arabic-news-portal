export const arDate = (date: Date | string) =>
  new Intl.DateTimeFormat('ar-EG', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(date));
