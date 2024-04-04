function getElementWidth(content, padding, border) {
  const boxSizing =
    Number.parseInt(content) +
    Number.parseInt(padding) * 2 +
    Number.parseInt(border) * 2;
  return boxSizing;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
