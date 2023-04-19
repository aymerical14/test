import { CheckboxContainer, CheckboxLabel } from "./FormCheckbox.styles";

const FormCheckbox = ({
  handleChange,
  checked,
  name,
  label,
  style,
  ...props
}) => {
  return (
    <CheckboxContainer className="custom-control custom-checkbox" style={style}>
      <input
        name={name}
        type="checkbox"
        className="custom-control-input"
        id={name}
        onChange={handleChange}
        checked={checked}
        {...props}
      />
      <CheckboxLabel className="custom-control-label" htmlFor={name}>
        {label}
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default FormCheckbox;
