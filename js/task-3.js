function checkForSpam(message) {
  let spamStatus = false;
  if (
    message.toLowerCase().indexOf("spam") != -1 ||
    message.toLowerCase().indexOf("sale") != -1
  ) {
    spamStatus = true;
  }
  return spamStatus;
}
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Latest technology news"));
