import MaterialInput from "../common/MaterialInput";
import SizeInput from "../common/SizeInput";

const Form = () => {
  return (
    <div className="column">
      <p className="subtitle mb-2">Wooden table</p>
      <p className="subtitle is-6 mb-3">$199,00</p>
      <form>
        <div className="field">
          <div className="control">
            <p className="help mb-1">Choose a material</p>
            <MaterialInput material="Wood01_icon" />
            <MaterialInput material="Wood02_icon" />
            <MaterialInput material="Wood03_icon" />
            <MaterialInput material="Wood04_icon" />
            <MaterialInput material="Wood05_icon" />
            <MaterialInput material="Wood06_icon" />
            <MaterialInput material="Wood07_icon" />
            <MaterialInput material="Wood08_icon" />
            <MaterialInput material="Wood09_icon"/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <p className="help mb-1">Choose size</p>
            <SizeInput size="S" />
            <SizeInput size="M" />
            <SizeInput size="L" />
            <SizeInput size="XL" />
          </div>
        </div>
        <div class="field mt-5">
          <div class="control">
            <button class="button has-background-grey-dark has-text-white-ter">Add to cart</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;