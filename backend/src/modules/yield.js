export function autoCompound(principal, apy, days){
  const n = 365;
  return principal * ((1 + apy/n) ** days);
}
