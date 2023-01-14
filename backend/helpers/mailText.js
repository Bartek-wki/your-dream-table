const mailText = (name, order, totalPrice , address, id) => {

  return (
    '<div style="color: black !important">' +
    '<p>Hi ' + name + '</p>' +
    '<p>Thanks for placing your order with us. Below are the details of your order. If you have any questions, feel free to get in touch with us at your-dream-table@gmail.com.</p>' +
    '<p>Order ID:' + id + '</p>' +
    '<p>Total price $:' + totalPrice + '</p>' +
    order.map(table => orderSumup(table.material, table.shape, table.price)) +
    '<p>Deliver to:' + address + '</p>' +
    '<p>Best regards. Your Dream Table team</p>' +
    '</div>'
  )
};

const orderSumup = (material, shape, price) => (
  '<p style="color=black !important"><strong>Wooden table</strong>' +
    '<br>Material: ' + material +
    '<br>Shape: ' + shape +
    '<br>Price: $' + price +
  '</p>'
)

export default mailText;