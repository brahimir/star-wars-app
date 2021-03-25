function Spinner(props) {
  // Public properties
  let color = `text-${props.color}`;
  let role = props.role;

  if (!role) role = "status";
  if (!color) color = "text-primary";

  // Set className for spinner styling.
  const className = `spinner-border ${color}`;

  return <div className={className} role={role}></div>;
}

export default Spinner;
