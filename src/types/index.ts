import { StaticImageData } from "next/image";

export interface euroLogo {
  src: string | StaticImageData;
  className?: string;
}

export interface ButtonProps {
  className?: string;
  type?: "button" | "reset" | "submit" ;
  color?: "blue" | "gray" | "dark" | "light" | "success" | "failure" | "warning" | "purple";
  label?: string | React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface CardAboutUsProps {
  background: string;
  icon: string;
  title: string;
  description: string
}

export interface ButtonIconProps {
  label: string;
  icon: React.ReactNode;
}

export interface BorderProps{
  width: string;
  nama: string;
}