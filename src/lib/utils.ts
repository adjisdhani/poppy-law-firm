import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetUrl(path: string) {
  const baseUrl = import.meta.env.VITE_APP_URL || "";
  
  // Hapus garis miring di akhir baseUrl jika ada
  const normalizedBase = baseUrl.endsWith('/') 
    ? baseUrl.slice(0, -1) 
    : baseUrl;

  // Pastikan path mulai dengan /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${cleanPath}`;
}
