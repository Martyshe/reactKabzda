import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";
import { useState } from "react";

export default {
  component: Accordion,
};

const onChangeHandler = action("onChange");
const onClickCallback = action("was clicked");

export const MenuCollapsedMode = () => {
  return (
    <Accordion
      titleValue={"Collapsed Accordion"}
      collapsed={true}
      onChange={onChangeHandler}
      items={[]}
      onClick={onClickCallback}

    />
  );
};

export const UsersUncollapsedMode = () => {
  return (
    <Accordion
      titleValue={"Opened Accordion"}
      collapsed={false}
      onChange={() => {}}
      items={[
        { title: "artem", value: 1 },
        { title: "ivan", value: 2 },
      ]}
      onClick={onClickCallback}

    />
  );
};

export const ModeChanging = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Accordion
      titleValue={"Accordion"}
      collapsed={collapsed}
      onChange={() => setCollapsed(!collapsed)}
      items={[
        { title: "artem", value: 1 },
        { title: "ivan", value: 2 },
      ]}
      onClick={id=> alert(`user with id ${id} should be happy`)}
    />
  );
};
