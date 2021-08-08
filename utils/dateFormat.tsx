export default function dateFormat(date: string): string {
  const DATE = new Date(date);
  const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Dec'];

  return `${MONTH[DATE.getMonth()]} ${DATE.getDate()}, ${DATE.getFullYear()}`;
}
