import { Meta, StoryFn } from "@storybook/react";

import { JoinContainer } from "@/components/JoinContainer";

export default {
  title: "Components/JoinContainer",
  component: JoinContainer,
} as Meta;

const Template: StoryFn = (args) => <JoinContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};
