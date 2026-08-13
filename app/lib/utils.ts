/**
 * Formats a size in bytes into a human-readable string (KB, MB, GB).
 * 
 * @param bytes - The size in bytes.
 * @param decimals - Number of decimal places to show (default: 2).
 * @returns A formatted string.
 */
import type {ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import {clsx} from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatSize = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
export const generateUUID = () => crypto.randomUUID();
