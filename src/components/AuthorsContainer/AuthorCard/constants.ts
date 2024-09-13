import facebookIcon from "@/assets/facebook.svg";
import instagramIcon from "@/assets/instagram.svg";
import linkedInIcon from "@/assets/linkedIn.svg";
import twitterIcon from "@/assets/twitter.svg";

const socialMediaConfig = [
  { name: "facebook", icon: facebookIcon },
  { name: "twitter", icon: twitterIcon },
  { name: "instagram", icon: instagramIcon },
  { name: "linkedIn", icon: linkedInIcon },
];

export const createLinks = (linksObject: Record<string, string>) => {
  return socialMediaConfig
    .filter(({ name }) => linksObject[name])
    .map(({ name, icon }) => ({
      img: icon,
      link: linksObject[name],
    }));
};
