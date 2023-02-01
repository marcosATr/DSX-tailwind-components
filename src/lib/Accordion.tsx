import classNames from "classnames";
import { Minus, Plus } from "phosphor-react";

interface AccordionWrapper {
  children: React.ReactNode;
  className?: string;
}

type AccordionState = {
  [T: string]: boolean;
};

interface AccordionProps {
  labelIcon?: React.ReactNode;
  label: string;
  accordionState: AccordionState;
  id: string;
  component: React.ReactNode;
  highlight?: boolean;
  setAccordionState: React.Dispatch<
    React.SetStateAction<AccordionState>
  >;
}

function AccordionWrapper({
  children,
  className,
}: AccordionWrapper) {
  const CNWrapper = classNames(
    "rounded-[6px] border border-solid border-lightBorder",
    className && className
  );
  return <div className={CNWrapper}>{children}</div>;
}

function Accordion({
  labelIcon,
  label,
  accordionState,
  id,
  component,
  highlight,
  setAccordionState,
}: AccordionProps) {
  const CNItemWrapper = classNames(
    "border-b border-solid border-lightBorder last:border-b-0 relative ",
    highlight &&
      !!accordionState?.[id] &&
      "bg-grayLight before:absolute before:h-full before:w-[3px] before:bg-primary before:top before:first:rounded-[6px] before:last:rounded-tl-bl-[6px]"
  );

  const CNAccordionHandle = classNames(
    "flex items-center py-4 px-6 text-sm w-full cursor-pointer",
    highlight && !!accordionState?.[id]
      ? "text-primary"
      : "text-heading"
  );

  const CNTextLabel = classNames(
    "font-semibold",
    labelIcon && "ml-3"
  );

  const handleOpenClose = () => {
    setAccordionState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={CNItemWrapper}>
      <div
        className={CNAccordionHandle}
        onClick={handleOpenClose}
      >
        {labelIcon}
        <span className={CNTextLabel}>{label}</span>
        {!!accordionState?.[id] ? (
          <Minus
            size={20}
            className="ml-auto text-heading"
          />
        ) : (
          <Plus
            size={20}
            className="ml-auto cursor-pointer"
          />
        )}
      </div>
      {!!accordionState?.[id] && (
        <div className="w-full px-6 pb-4">{component}</div>
      )}
    </div>
  );
}

export { Accordion, AccordionWrapper };
