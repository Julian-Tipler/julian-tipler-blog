import { IconType } from "react-icons";
import { FiHome, FiCompass, FiSettings } from "react-icons/fi";

export type LinkItemProps = {
  name: string;
  icon: IconType;
  href: string;
};

export const LINK_ITEMS: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, href: "/" },
  { name: "Blog", icon: FiCompass, href: "/blog" },
  { name: "About me", icon: FiSettings, href: "/me" },
  { name: "Contact", icon: FiSettings, href: "/contact" },
];

export const SUPPORT_EMAIL = "your-support-email@company.com";
