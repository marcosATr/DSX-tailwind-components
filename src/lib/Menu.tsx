import {
  ReactElement,
  ReactNode,
  cloneElement,
} from "react";
import Typography from "./Typography";
import { twMerge } from "tailwind-merge";

export interface IMainMenuProps {
  groups: Group[];
  logoComponent?: ReactNode;
}

type Group = {
  name?: string;
  items: Item[];
};

type Item = {
  label: string;
  icon?: ReactElement;
  counter?: number;
  onClick: () => void;
  active?: boolean;
};

function Menu({ groups, logoComponent }: IMainMenuProps) {
  return (
    <div className="h-full min-h-screen w-[260px] p-3 shadow">
      <div className="w-full">{logoComponent}</div>
      {groups.map((group) => (
        <div className="flex w-full flex-col">
          {group?.name && (
            <div className="flex h-[40px] items-center px-4 text-grayLight">
              <Typography className="text-[11px] uppercase">
                {group.name}
              </Typography>
            </div>
          )}
          {group.items.map((item) => (
            <div
              className={twMerge(
                "group mb-1 flex h-[40px] w-full cursor-pointer items-center rounded-lg px-4 transition-colors hover:bg-gradient-to-r hover:from-primary hover:to-[#9d95f5]",
                item.active && "bg-grayLight"
              )}
            >
              {item.icon &&
                cloneElement(item.icon, {
                  size: 20,
                  className:
                    "text-defaultText group-hover:text-white",
                })}
              <Typography className="ml-2 text-sm transition-colors group-hover:text-white">
                {item.label}
              </Typography>
              {item.counter && (
                <div className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-danger text-[10px] text-white">
                  {item.counter}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
