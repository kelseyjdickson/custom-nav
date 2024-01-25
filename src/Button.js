import PropTypes from "prop-types";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return (
    <button className="px-3 py-1.5 border border-blue-500 bg-blue-600 text-white">
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!outline) +
      Number(!!rounded);
    if (count > 1) {
      return new Error(
        "Only one of the primary, secondary, success, warning, danger, outline, rounded can be true"
      );
    }
  },
};

export default Button;
