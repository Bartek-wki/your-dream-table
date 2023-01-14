import PropTypes from 'prop-types';

const MaterialInput = ({ materialIcon, value, material, materialChange }) => {
  return (
    <>
      <input className="input-hidden" type="radio" name="material" value={value} id={materialIcon} checked={material === value} onChange={materialChange} />
      <label className="radio mr-2" htmlFor={materialIcon}>
        <img src={`${process.env.PUBLIC_URL}/images/material/`+ materialIcon +`.png`} alt={materialIcon} />
      </label>
    </>
  )
};

MaterialInput.propTypes = {
  materialIcon: PropTypes.string,
  value: PropTypes.string,
  material: PropTypes.string,
  materialChange: PropTypes.func,
};

export default MaterialInput;