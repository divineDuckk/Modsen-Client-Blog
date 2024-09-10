import { Meta, StoryFn } from "@storybook/react";

import photo from "@/assets/author1.png";
import { AuthorCard } from "@/components/AuthorsContainer/AuthorCard";
import { AuthorCardProps } from "@/components/AuthorsContainer/AuthorCard/types";

export default {
  title: "Components/AuthorCard",
  component: AuthorCard,
  argTypes: {
    about: { control: "text" },
    facebookLink: { control: "text" },
    instargamLink: { control: "text" },
    linkedInLink: { control: "text" },
    name: { control: "text" },
    photo: { control: "text" },
    twitterLink: { control: "text" },
    id: { control: "text" },
  },
} as Meta;

const Template: StoryFn<AuthorCardProps> = (args) => <AuthorCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  about: "A passionate content creator",
  facebookLink: "https://facebook.com/example",
  instargamLink: "https://instagram.com/example",
  linkedInLink: "https://linkedin.com/in/example",
  name: "John Doe",
  photo: photo,
  twitterLink: "https://twitter.com/example",
  id: "1",
};
