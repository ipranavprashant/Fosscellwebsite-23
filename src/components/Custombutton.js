import "./Custombutton.css";

function Button(props) {
  return (
    <div className="button">
      <p style={{ marginRight: "17px" }}>{props.buttonName}</p>
    </div>
  );
}

export default Button;
