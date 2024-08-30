import { StaticImageData } from "next/image";

export interface euroLogo {
  src: string | StaticImageData;
  className?: string;
}

export interface ButtonProps {
  className?: string;
  color?: "blue" | "gray" | "dark" | "light" | "success" | "failure" | "warning" | "purple";
  label?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface CardAboutUsProps {
  background: string;
  icon: string;
  title: string;
  description: string
}