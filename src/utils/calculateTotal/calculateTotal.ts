export function calculateTotal(amounts: string): number {
  if (!amounts.trim()) return 0;
  
  // Split by either commas or newlines, then flatten the array
  const amountArray = amounts
    .split(/[\n,]+/) // Split by newlines or commas
    .map(amt => amt.trim()) // Trim whitespace
    .filter(amt => amt !== '') // Remove empty strings
    .map(amt => parseFloat(amt)); // Convert to numbers


  // Sum all valid numbers (filter out NaN values from failed parsing)
  return amountArray
    .filter(num => !isNaN(num))
    .reduce((sum, num) => sum + num, 0);
};
