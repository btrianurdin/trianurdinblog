export default function dateFormat(date: string): string {
  const DATE = new Date(date);
  const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return `${MONTH[DATE.getMonth()]} ${DATE.getDate()}, ${DATE.getFullYear()}`;
}
