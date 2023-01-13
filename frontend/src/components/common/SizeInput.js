const SizeInput = ({size}) => {
  return (
    <>
      <input className="input-hidden" type="radio" name="size" id={size} />
      <label className="radio mr-2" htmlFor={size}>
        <p>{size}</p>
      </label>
    </>
  )
};

export default SizeInput;