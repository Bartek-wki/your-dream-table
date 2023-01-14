import PropTypes from 'prop-types';

import CreateTable from "./CreateTable";

const SumupView = ({id, material, shape, price, deleteOrderById}) => {
  return (
    <>
      <div className="columns">
        <div className="column is-4">
          <CreateTable material={material} shape={shape} sumup={true} />
        </div>
        <div className="column pt-5 pl-5 is-6">
          <p className="subtitle mb-2 mt-2">Material: {material}</p>
          <p className="subtitle mb-2">Shape: {shape}</p>
          <p className="subtitle mb-2">Price: ${price}</p>
        </div>
        <div className="column is-2 pt-5">
          <button className="button is-danger mt-2" onClick={() => deleteOrderById(id)}>X</button>
        </div>
      </div>
    </>
  );
};

SumupView.propTypes = {
  id: PropTypes.string,
  material: PropTypes.string,
  shape: PropTypes.string,
  price: PropTypes.number,
  deleteOrderById: PropTypes.func,
};

export default SumupView;
