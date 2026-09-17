export function formatPrice(price?: string) {
  if (!price) return false;
  return `₦${parseInt(price).toLocaleString()}`;
}

export function calculateDiscount(price?: string) {
  if (!price) return false;

  const DISCOUNT_PRICE = 50000;
  const discountedValue = parseInt(price) - DISCOUNT_PRICE;
  return `₦${discountedValue.toLocaleString()}`;
}
