import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetUrlOld(path: string) {
  const baseUrl = import.meta.env.VITE_APP_URL || "";
  
  // Hapus garis miring di akhir baseUrl jika ada
  const normalizedBase = baseUrl.endsWith('/') 
    ? baseUrl.slice(0, -1) 
    : baseUrl;

  // Pastikan path mulai dengan /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${cleanPath}`;
}

export function getAssetUrl(path: string) {
  // Pastikan path selalu mulai dengan satu /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  const baseUrl = import.meta.env.VITE_APP_URL;

  // Jika baseUrl tidak ada (misal saat dev atau env lupa diset)
  // atau jika kita ingin path relatif saja untuk komponen biasa
  if (!baseUrl) return cleanPath;

  // Bersihkan baseUrl dari trailing slash agar tidak double slash
  const normalizedBase = baseUrl.endsWith('/') 
    ? baseUrl.slice(0, -1) 
    : baseUrl;

  return `${normalizedBase}${cleanPath}`;
}
