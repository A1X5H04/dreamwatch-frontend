import { FieldProps } from "formik";
import { Form, Input, InputProps } from "rsuite";
import { twMerge } from "tailwind-merge";

interface FormikInputFieldProps extends InputProps {
  label: string;
  helperText?: string;
}

const FormikInputField: React.FC<FormikInputFieldProps & FieldProps> = ({
  field, // destructured FieldProps.field
  form: { setFieldValue, errors }, // destructured FieldProps.form
  label,
  helperText,
  className,
  ...props // other props passed to the input
}) => (
  <Form.Group controlId={field.name}>
    <Form.ControlLabel htmlFor={field.name}>{label}</Form.ControlLabel>
    <Input
      className={twMerge("form-input", className)}
      onChange={(value) => setFieldValue(field.name, value)}
      {...props}
    />
    {helperText && <Form.HelpText className="mt-1">{helperText}</Form.HelpText>}
    <Form.ErrorMessage
      show={Boolean(errors[field.name])}
      placement="bottomStart"
    >
      {errors[field.name] as string}
    </Form.ErrorMessage>
  </Form.Group>
);

export default FormikInputField;
