import { twMerge } from "tailwind-merge";
import Typography from "./Typography";

interface IListGroupProp {
  items: Item[];
  active?: Item["id"];
}

type Item = {
  id: string | number;
  value: string;
  onClick: () => void;
};

function ListGroup({ items, active }: IListGroupProp) {
  return (
    <div className="flex w-full max-w-[240px] flex-col overflow-hidden rounded border border-lightBorder">
      {items.map((item, index) => (
        <div
          key={item.id}
          onClick={item.onClick}
          className={twMerge([
            "group cursor-pointer py-[10px] px-[20px] hover:bg-primary",
            items.length === index + 1
              ? "border-b-0"
              : "border-b border-b-lightBorder",
            active === item.id && "bg-primary-light",
          ])}
        >
          <Typography
            className={twMerge([
              active === item.id && "text-primary",
              "group-hover:text-white",
            ])}
          >
            {item.value}
          </Typography>
        </div>
      ))}
    </div>
  );
}

export default ListGroup;
