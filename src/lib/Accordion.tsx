import classNames from "classnames";
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

interface AccordionItem {
  labelIcon?: React.ReactNode;
  label: string;
  id: string;
  component: React.ReactNode;
}

type AccordionState = {
  [T: string]: boolean;
};

interface AccordionWrapper {
  items: AccordionItem[];
  highlight?: boolean;
  className?: string;
  mode?: "single" | "multiple";
  initialState?: AccordionState;
}

interface AccordionProps {
  labelIcon?: React.ReactNode;
  label: string;
  accordionState: AccordionState;
  id: string;
  component: React.ReactNode;
  highlight?: boolean;
  handleOpenClose: () => void;
}

function Accordion({
  labelIcon,
  label,
  accordionState,
  id,
  component,
  highlight,
  handleOpenClose,
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

function AccordionWrapper({
  className,
  mode = "multiple",
  highlight,
  items,
  initialState,
}: AccordionWrapper) {
  const CNWrapper = classNames(
    "rounded-[6px] border border-solid border-lightBorder",
    className && className
  );

  const [accordionState, setAccordionState] = useState<{
    [T: string]: boolean;
  }>(initialState || {});

  const handleOpenClose = (id) => {
    setAccordionState((prev) => {
      return mode === "multiple"
        ? {
            ...prev,
            [id]: !prev[id],
          }
        : {
            [id]: !prev[id],
          };
    });
  };

  return (
    <div className={CNWrapper}>
      {items.map((item) => {
        return (
          <Accordion
            label={item.label}
            labelIcon={item.labelIcon}
            key={item.id}
            id={item.id}
            component={item.component}
            handleOpenClose={() => handleOpenClose(item.id)}
            accordionState={accordionState}
            highlight={highlight}
          />
        );
      })}
    </div>
  );
}

export { Accordion, AccordionWrapper };
