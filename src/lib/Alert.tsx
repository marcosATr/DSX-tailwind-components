import { _VARIANTTYPES } from "./vars";
import classNames from "classnames";

interface AlertProps {
  title?: string;
  text: string;
  variant?: _VARIANTTYPES;
  icon?: React.ReactElement;
}

function Alert({
  title,
  text,
  icon,
  variant = "primary",
}: AlertProps) {
  const CNWrapper = classNames(
    "flex w-full rounded py-3 px-[14px]",
    `bg-${variant}-light text-${variant}`
  );

  const CNIconClasses = classNames(
    "flex items-center justify-center pl-2 pr-5",
    title ? "text-2xl" : "text-lg"
  );

  return (
    <div className={CNWrapper}>
      {icon && <div className={CNIconClasses}>{icon}</div>}
      <div>
        {title && (
          <span className="block text-base font-semibold">
            {title}
          </span>
        )}
        <span className="text-sm font-medium">{text}</span>
      </div>
    </div>
  );
}

export default Alert;
