import { FieldProps } from "formik";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface FormikInputFieldProps extends ComponentProps<"input"> {
  label: string;
  helperText?: string;
}

const FormikInputField: React.FC<FormikInputFieldProps & FieldProps> = ({
  field, // destructured FieldProps.field
  form: { errors, touched }, // destructured FieldProps.form
  label,
  helperText,
  className,
  ...props // other props passed to the input
}) => {
  const hasError = errors[field.name] && touched[field.name];

  return (
    <div className="form-control w-full">
      <label htmlFor={field.name} className="label">
        <span className="label-text">
          {label}
          {props.required && <span className="text-error ml-1">*</span>}
        </span>
      </label>
      <input
        id={field.name}
        className={twMerge(
          "input input-bordered w-full",
          hasError && "input-error",
          className
        )}
        {...props}
        {...field}
      />
      {hasError && (
        <div className="label text-error pb-0">
          <span className="label-text-alt uppercase text-error">
            {errors[field.name] as string}
          </span>
        </div>
      )}
      {helperText && (
        <div className="label">
          <span className="label-text-alt">{helperText}</span>
          {/* <span className="label-text-alt">Bottom Right label</span> */}
        </div>
      )}
    </div>
  );
};

export default FormikInputField;
