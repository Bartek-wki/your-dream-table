import MaterialInput from "../common/MaterialInput";
import ShapeInput from "../common/ShapeInput";
import PropTypes from 'prop-types';


const Form = ({material, materialChange, shape, shapeChange, handleSubmit}) => {
  return (
    <div className="column px-5">
      <p className="subtitle mb-2">Wooden table</p>
      <p className="subtitle is-6 mb-3">$199,00</p>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <p className="help mb-1">Choose a material</p>
            <MaterialInput materialIcon="Wood01_icon" value="Wood01" material={material} materialChange={materialChange} />
            <MaterialInput materialIcon="Wood02_icon" value="Wood02" material={material} materialChange={materialChange} />
            <MaterialInput materialIcon="Wood03_icon" value="Wood03" material={material} materialChange={materialChange} />
            <MaterialInput materialIcon="Wood04_icon" value="Wood04" material={material} materialChange={materialChange} />
            <MaterialInput materialIcon="Wood05_icon" value="Wood05" material={material} materialChange={materialChange} />
            <MaterialInput materialIcon="Wood06_icon" value="Wood06" material={material} materialChange={materialChange} />
            <MaterialInput materialIcon="Wood07_icon" value="Wood07" material={material} materialChange={materialChange} />
            <MaterialInput materialIcon="Wood08_icon" value="Wood08" material={material} materialChange={materialChange} />
            <MaterialInput materialIcon="Wood09_icon" value="Wood09" material={material} materialChange={materialChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <p className="help mb-1">Choose shape</p>
            <ShapeInput shapeInfo="1 x 1" value="square" shape={shape} shapeChange={shapeChange} />
            <ShapeInput shapeInfo="1 x 2" value="rectangle" shape={shape} shapeChange={shapeChange} />
          </div>
        </div>
        <div className="field mt-5">
          <div className="control">
            <button className="button has-background-grey-dark has-text-white-ter">Add to cart</button>
          </div>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  material: PropTypes.string,
  materialChange: PropTypes.func,
  shape: PropTypes.string,
  shapeChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Form;