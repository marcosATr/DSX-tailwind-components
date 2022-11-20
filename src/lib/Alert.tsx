interface AlertProps {
  text: string;
  variant?: "success" | "warning" | "danger" | "primary";
  icon?: React.ReactElement;
}

const background = {
  success: "bg-success-light text-success",
  warning: "bg-warning-light text-warning",
  danger: "bg-danger-light text-danger",
  primary: "bg-primary-light text-primary",
};

function Alert({ text, icon, variant = "primary" }: AlertProps) {
  return (
    <div className={`rounded w-full py-3 px-[14px] ${background[variant]}`}>
      <span className="text-sm">{text}</span>
    </div>
  );
}

export default Alert;
