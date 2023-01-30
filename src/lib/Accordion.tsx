import classNames from "classnames";
import { Minus, Plus } from "phosphor-react";

interface AccordionWrapper {
  children: React.ReactNode;
  className?: string;
}

interface AccordionProps {
  labelIcon?: React.ReactNode;
  label: string;
  open: boolean;
  id: string;
  component: React.ReactNode;
  setAccordionState: React.Dispatch<
    React.SetStateAction<{
      [T: string]: boolean;
    }>
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
  open,
  id,
  component,
  setAccordionState,
}: AccordionProps) {
  const CNTextLabel = classNames(
    "font-semibold",
    labelIcon && "ml-3"
  );

  const CNAccordionItem = classNames(
    "flex items-center py-4 px-6 text-sm text-heading w-full"
  );

  return (
    <div className="border-b border-solid border-lightBorder last:border-b-0">
      <div
        className={CNAccordionItem}
        id={id}
      >
        {labelIcon}
        <span className={CNTextLabel}>{label}</span>
        {open ? (
          <Minus
            size={20}
            className="ml-auto cursor-pointer"
            onClick={() =>
              setAccordionState((prev) => ({ //TODO: externalize state management, create toggle mode
                ...prev,
                [id]: !prev[id],
              }))
            }
          />
        ) : (
          <Plus
            size={20}
            className="ml-auto cursor-pointer"
            onClick={() =>
              setAccordionState((prev) => ({ //TODO: externalize state management, create toggle mode
                ...prev,
                [id]: !prev[id],
              }))
            }
          />
        )}
      </div>
      {open && (
        <div className="w-full px-6 pb-4">{component}</div>
      )}
    </div>
  );
}

export { Accordion, AccordionWrapper };
