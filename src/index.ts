export function roundSignificant(value: number, digits: number): number {
  if (!Number.isFinite(value) || !Number.isInteger(digits) || digits < 1 || digits > 100)
    throw new RangeError('Expected finite value and 1 through 100 digits');
  return Number(value.toPrecision(digits));
}
