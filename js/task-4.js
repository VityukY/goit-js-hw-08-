function getShippingCost(country) {
  let msg = "";
  switch (country) {
    case "China":
      msg = `Shipping to ${country} will cost 100 credits`;
      break;
    case "Chile":
      msg = `Shipping to ${country} will cost 250 credits`;
      break;
    case "Australia":
      msg = `Shipping to ${country} will cost 170 credits`;
      break;
    case "Jamaica":
      msg = `Shipping to ${country} will cost 120credits`;
      break;
    default:
      msg = `Sorry, there is no delivery to your country`;
  }

  return msg;
}
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Sweden"));
