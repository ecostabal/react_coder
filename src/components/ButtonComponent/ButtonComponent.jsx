import "./ButtonComponent.css";

function ButtonComponent(props) {
  const { children, colorFondo } = props;

  const styleButton = {
    backgroundColor: colorFondo,
  };
  return (
    <>
      <button onClick={props.onTouch} className="btn">
        {children}
      </button>
    </>
  );
}

export default ButtonComponent;