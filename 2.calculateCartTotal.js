function calculateCartTotal(items, taxRate) {
  // Prothome cart er shob items er total price (discount soho) ber korar jonno .reduce() use korlam
  const subtotal = items.reduce((accumulator, item) => {
    // Proti ti item er cost ber korar formula: price * quantity * (1 - discount / 100)
    const itemTotal = item.price * item.quantity * (1 - item.discount / 100);

    // Accumulator er sathe current item er total jog kore running sum update korlam
    return accumulator + itemTotal;
  }, 0); // Accumulator er initial value 0 theke shuru korlam

  // Ekhon subtotal er opor taxRate apply korar jonno formula use korlam: subtotal * (1 + taxRate / 100)
  const totalWithTax = subtotal * (1 + taxRate / 100);

  // Sheshe result-ke 2 decimal places porjonto accurate round korar jonno Math.round() use korlam
  return Math.round(totalWithTax * 100) / 100;
}
