
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// CREDIT: https://ui.shadcn.com/docs/installation/manual#add-a-cn-helper
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createResponse<TData>(
  status: boolean,
  message: string,
  data?: TData | null
) {
  return status === false
    ? { status: false, message, data: null }
    : { status: true, message, data };
}

export function HexToRGBA(value: string, alpha: number = 1) {
  const hex = value.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
