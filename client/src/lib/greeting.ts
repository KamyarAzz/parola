/** Buongiorno until lunch, buon pomeriggio, then buonasera. */
export function greeting(hour = new Date().getHours()) {
  if (hour < 13) return "Buongiorno";
  if (hour < 18) return "Buon pomeriggio";
  return "Buonasera";
}
