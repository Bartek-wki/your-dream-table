import PropTypes from 'prop-types';


const SumupForm = ({orders}) => {
  let totalPrice = 0;

  orders.map(order => totalPrice += order.price);

  return (
    <>
      <p className="subtitle mb-5">Total: ${totalPrice}</p>
      <form>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g John Smith" required={true} />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. johnsmith@gmail.com" required={true} />
          </div>
        </div>
        <div className="field">
          <label className="label">Address</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g 711-2880 Nulla St.Mankato Mississippi 96522" required={true} />
          </div>
        </div>
        <div className="field mt-5">
          <div className="control">
            <button className="button has-background-grey-dark has-text-white-ter">Order</button>
          </div>
        </div>
      </form>
    </>
  );
};

SumupForm.propTypes = {
  orders: PropTypes.array,
};

export default SumupForm;