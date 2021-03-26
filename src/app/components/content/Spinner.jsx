function Spinner(props) {
  // Properties
  let color = `text-${props.color}`;
  let role = props.role;
  let width = props.width;
  let height = props.height;

  // Defaults
  if (!props.role) role = "status";
  if (!props.color) color = "text-primary";
  if (!props.width) width = "2rem";
  if (!props.height) height = "2rem";

  // className for spinner styling.
  const className = `spinner-border ${color}`;

  return (
    <div className={className} role={role} style={((width = { width }), (height = { height }))}></div>
  );
}

export default Spinner;
