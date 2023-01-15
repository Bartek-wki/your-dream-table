const OrderResponse = () => (
  <div className="columns p-5 is-flex-wrap-wrap">
    <div className="column is-12 mb-5">
      <h1 className="title is-4 has-text-grey-dark">Your order has been placed. Check email.</h1>
    </div>
    <div className="column has-text-centered mt-5">
      <img className='px-5' src={`${process.env.PUBLIC_URL}/images/Confirm.svg`} alt="Send email" />
    </div>
  </div>
);

export default OrderResponse;