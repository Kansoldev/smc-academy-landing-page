export function formatPrice(price?: string) {
  if (!price) return false;
  return `₦${parseInt(price).toLocaleString()}`;
}

export function calculateDiscount(price?: string) {
  if (!price) return false;

  let discountedValue = 0;
  const DISCOUNT_PRICE = 50000;

  if (price === "72000") {
    discountedValue = parseInt(price) - 22000;
  } else {
    discountedValue = parseInt(price) - DISCOUNT_PRICE;
  }

  return `₦${discountedValue.toLocaleString()}`;
}
