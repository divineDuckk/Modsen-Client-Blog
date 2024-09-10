import { Meta, StoryFn } from "@storybook/react";

import { ActionLink } from "@/components/ActionLink";
import { ActionLinkProps } from "@/components/ActionLink/types";

export default {
  title: "Components/ActionLink",
  component: ActionLink,
  argTypes: {
    content: { control: "text" },
    link: { control: "text" },
  },
} as Meta<typeof ActionLink>;

const Template: StoryFn<ActionLinkProps> = (args: ActionLinkProps) => (
  <ActionLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: "Click Here",
  link: "https://example.com",
};

export const AnotherExample = Template.bind({});
AnotherExample.args = {
  content: "Learn More",
  link: "https://anotherexample.com",
};
