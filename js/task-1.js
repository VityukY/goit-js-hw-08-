function makeTransaction(quantity, pricePerDroid, customerCredits) {
  ttl = quantity * pricePerDroid;
  const msg =
    ttl > customerCredits
      ? "Insufficient funds!"
      : `You ordered ${quantity} droids worth ${ttl} credits!`;
  return msg;
}
console.log(makeTransaction(5, 3000, 12000));
