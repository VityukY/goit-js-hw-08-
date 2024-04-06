function formatMessage(message, maxLength) {
  message =
    message.length > maxLength ? message.slice(0, maxLength) + "..." : message;
  return message;
}
console.log(formatMessage("Curabitur ligula sapien", 16));
