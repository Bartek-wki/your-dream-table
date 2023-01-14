import PropTypes from 'prop-types';


const SumupForm = ({orders, name, onChangeName, email, onChangeEmail, address, onChangeAddress, sendOrder}) => {
  let totalPrice = 0;

  orders.map(order => totalPrice += order.price);

  return (
    <>
      <p className="subtitle mb-5">Total: ${totalPrice}</p>
      <form onSubmit={sendOrder}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g John Smith" required={true} value={name} onChange={e => onChangeName(e)}/>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. johnsmith@gmail.com" required={true} value={email} onChange={e => onChangeEmail(e)}/>
          </div>
        </div>
        <div className="field">
          <label className="label">Address</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g 711-2880 Nulla St.Mankato Mississippi 96522" required={true} value={address} onChange={e => onChangeAddress(e)}/>
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
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
  onChangeName: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangeAddress: PropTypes.func,
  sendOrder: PropTypes.func,
};

export default SumupForm;