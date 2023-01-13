const MaterialInput = ({material}) => {
  return (
    <>
      <input className="input-hidden" type="radio" name="material" id={material} />
      <label className="radio mr-2" htmlFor={material}>
        <img src={`${process.env.PUBLIC_URL}/images/material/`+ material +`.png`} alt={material} />
      </label>
    </>
  )
};

export default MaterialInput;