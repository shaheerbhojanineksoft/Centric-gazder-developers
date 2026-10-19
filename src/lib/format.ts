const numberFormatter = new Intl.NumberFormat('en-PK', {
  maximumFractionDigits: 0,
});

export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}

export function formatPKR(value: number): string {
  return `PKR ${numberFormatter.format(value)}`;
}
