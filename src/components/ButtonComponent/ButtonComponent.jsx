import "./ButtonComponent.css";

function ButtonComponent(props) {
  /* { colorFondo: "red", label: "Boton"} */
  // destructuring
  const { children, colorFondo } = props;

  const styleButton = {
    backgroundColor: colorFondo,
  };

  return (
    <>
      <button className="btn">
        {children}
      </button>
    </>
  );
}

export default ButtonComponent;