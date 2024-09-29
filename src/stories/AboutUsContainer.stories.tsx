import { Meta, StoryFn } from "@storybook/react";

import { AboutUsContainer } from "@/components/AboutUsContainer";
import { AboutUsContainerProps } from "@/components/AboutUsContainer";

export default {
  title: "Components/AboutUsContainer",
  component: AboutUsContainer,
  argTypes: {
    atHome: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<AboutUsContainerProps> = (args) => (
  <AboutUsContainer {...args} />
);

export const AtHome = Template.bind({});
AtHome.args = {
  atHome: true,
};

export const NotAtHome = Template.bind({});
NotAtHome.args = {
  atHome: false,
};
