import { _VARIANTTYPES } from "./vars";

interface AlertProps {
  title?: string;
  text: string;
  variant?: _VARIANTTYPES;
  icon?: React.ReactElement;
}

const background = {
  success: "bg-success-light text-success",
  warning: "bg-warning-light text-warning",
  danger: "bg-danger-light text-danger",
  primary: "bg-primary-light text-primary",
};

function Alert({ title, text, icon, variant = "primary" }: AlertProps) {
  return (
    <div className={`flex rounded w-full py-3 px-[14px] ${background[variant]}`}>
      {icon && (
        <div
          className={`flex items-center justify-center pl-2 pr-5 ${title ? "text-2xl" : "text-lg"
            }`}
        >
          {icon}
        </div>
      )}
      <div>
        {title && <span className="text-base font-semibold block">{title}</span>}
        <span className="text-sm font-medium">{text}</span>
      </div>
    </div>
  );
}

export default Alert;
