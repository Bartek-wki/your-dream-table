import PropTypes from 'prop-types';

import CreateTable from "./CreateTable";

const SumupView = ({id, material, shape, price, deleteOrderById}) => {
  return (
    <>
      <div className="columns is-mobile">
        <div className="column canvas-sumup-container is-4">
          <CreateTable material={material} shape={shape} sumup={true} />
        </div>
        <div className="column is-size-7-mobile is-size-6-tablet has-text-grey-dark pt-5 pl-3 is-6 details-mobile">
          <p className="subtitle is-size-6-mobile is-size-5-tablet mb-2 mt-2">Wooden table</p>
          <p className="mb-1 mt-2">Material: {material}</p>
          <p className="mb-1">Shape: {shape}</p>
          <p className="mb-1">Price: ${price}</p>
        </div>
        <div className="column has-text-right-touch is-2 pt-5">
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
