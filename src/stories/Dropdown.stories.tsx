import { Dropdown } from "../lib";
import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

export default {
  title: "Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const DefaultDropdown: ComponentStory<
  typeof Dropdown
> = () => {
  const options = [
    {
      id: 1,
      value: "Option 1",
      handleClick: () => console.log("1"),
    },
    {
      id: 2,
      value: "Option 2",
      handleClick: () => console.log("2"),
    },
  ];

  return (
    <>
      <div className="mt-4">
        <Dropdown
          text="Primary"
          options={options}
        />
      </div>
      <div className="mt-4">
        <Dropdown
          text="Danger"
          options={options}
          variant="danger"
        />
      </div>
      <div className="mt-4">
        <Dropdown
          text="Success"
          options={options}
          variant="success"
        />
      </div>
      <div className="mt-4">
        <Dropdown
          text="Warning"
          options={options}
          variant="warning"
        />
      </div>
      <div className="mt-4">
        <Dropdown
          text="Primary"
          options={options}
          outlined
        />
      </div>
      <div className="mt-4">
        <Dropdown
          text="Danger"
          options={options}
          variant="danger"
          outlined
        />
      </div>
      <div className="mt-4">
        <Dropdown
          text="Success"
          options={options}
          variant="success"
          outlined
        />
      </div>
      <div className="mt-4">
        <Dropdown
          text="Warning"
          options={options}
          variant="warning"
          outlined
        />
      </div>
    </>
  );
};
