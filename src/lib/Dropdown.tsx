import { CaretDown } from "phosphor-react";
import { Divider } from "./";

const DropdownIcon = () => {
  return <CaretDown size={18} />;
};

function Dropdown({ text, options }) {
  return (
    <>
      <div className="flex">
        <div>{text}</div>
        {/* <Divider vertical /> */}
        <div>
          <CaretDown size={18} />
        </div>
      </div>
    </>
  );
}

export default Dropdown;
