const units = [
  "zero",
  "uno",
  "due",
  "tre",
  "quattro",
  "cinque",
  "sei",
  "sette",
  "otto",
  "nove",
  "dieci",
  "undici",
  "dodici",
  "tredici",
  "quattordici",
  "quindici",
  "sedici",
  "diciassette",
  "diciotto",
  "diciannove",
];

const tens = [
  "",
  "",
  "venti",
  "trenta",
  "quaranta",
  "cinquanta",
  "sessanta",
  "settanta",
  "ottanta",
  "novanta",
];

/** 0–9999 in words: 21 → ventuno, 23 → ventitré, 108 → centotto. */
export function numberWords(n: number): string {
  if (n < 20) return units[n];
  if (n < 100) {
    const ten = tens[Math.floor(n / 10)];
    const unit = n % 10;
    if (unit === 0) return ten;
    // venti + uno → ventuno, venti + otto → ventotto
    const stem = unit === 1 || unit === 8 ? ten.slice(0, -1) : ten;
    return stem + (unit === 3 ? "tré" : units[unit]);
  }
  if (n < 1000) {
    const hundreds = Math.floor(n / 100);
    const head = hundreds === 1 ? "cento" : `${units[hundreds]}cento`;
    const rest = n % 100;
    if (!rest) return head;
    const tail = numberWords(rest);
    // cento + otto → centotto
    return (tail.startsWith("o") ? head.slice(0, -1) : head) + tail;
  }
  const thousands = Math.floor(n / 1000);
  const head = thousands === 1 ? "mille" : `${units[thousands]}mila`;
  return n % 1000 ? head + numberWords(n % 1000) : head;
}
