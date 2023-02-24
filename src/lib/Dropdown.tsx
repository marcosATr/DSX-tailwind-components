import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { CaretDown } from "phosphor-react";
import { useClickOutside } from "./utils";
import { _VARIANTTYPES } from "./vars";
import { Typography } from "./";

type Options = {
  id: number | string;
  handleClick: () => void;
  value: string;
}[];

interface IDropdownProps {
  text: string;
  variant?: _VARIANTTYPES;
  outlined?: boolean;
  className?: string;
  options: Options;
}

interface IMenuProps {
  options: Options;
}

function Menu({ options }: IMenuProps) {
  return (
    <div className="absolute top-[48px] z-20 flex w-full flex-col gap-1 rounded bg-white p-2 shadow">
      {options.map((option) => (
        <div
          key={option.id}
          className="group cursor-pointer rounded px-4 py-2 hover:bg-primary"
          onClick={(e) => {
            e.stopPropagation();
            option.handleClick();
          }}
        >
          <Typography
            as="span"
            className="group-hover:text-white"
          >
            {option.value}
          </Typography>
        </div>
      ))}
    </div>
  );
}

function Dropdown({
  text,
  options,
  variant = "primary",
  outlined,
  className,
}: IDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false), open);

  const CNButton = twMerge([
    "flex items-center rounded text-[15px] font-medium leading-[17px]",
    outlined
      ? `border border-${variant} text-${variant}`
      : `bg-${variant} text-white`,
    className,
  ]);

  const CNTextWrapper = twMerge([
    "flex items-center py-[10px] px-5 min-h-[38px]",
    outlined
      ? `border-r border-${variant}`
      : "border-r-2 border-r-opacity-10",
  ]);

  const CNIcon = twMerge([
    "transition-all",
    open ? "-rotate-90" : "rotate-0",
  ]);

  function handleClick(e) {
    setOpen(!open);
  }

  return (
    <div
      className="relative w-fit"
      onClick={handleClick}
      ref={ref}
    >
      <button className={CNButton}>
        <div className={CNTextWrapper}>{text}</div>
        <div className="flex items-center p-[10px]">
          <CaretDown
            size={18}
            weight="bold"
            className={CNIcon}
          />
        </div>
      </button>
      {open && <Menu options={options} />}
    </div>
  );
}

export default Dropdown;
