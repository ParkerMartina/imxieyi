export function calculateInterest(principal, rate, timeYears){
  const safePrincipal = Number(principal)||0;
  const safeRate = Number(rate)||0;
  const safeTime = Number(timeYears)||0;
  return safePrincipal * safeRate * safeTime;
}
