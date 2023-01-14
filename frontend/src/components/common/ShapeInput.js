import PropTypes from 'prop-types';

const ShapeInput = ({ shapeInfo, value, shape, shapeChange }) => {
  return (
    <>
      <input className="input-hidden" type="radio" name="shape" value={value} id={shapeInfo} checked={shape === value} onChange={shapeChange} />
      <label className="radio mr-2" htmlFor={shapeInfo}>
        <p>
          <span>{shapeInfo}</span>
        </p>
      </label>
    </>
  )
};

ShapeInput.propTypes = {
  shapeInfo: PropTypes.string,
  value: PropTypes.string,
  shape: PropTypes.string,
  shapeChange: PropTypes.func,
};


export default ShapeInput;