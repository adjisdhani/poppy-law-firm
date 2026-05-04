import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAssetUrl } from "@/lib/utils";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

/** Lightweight, dependency-free SEO + OpenGraph head updater. */
const Seo = ({ title, description, path }: SeoProps) => {
  const location = useLocation();
  const url = `${typeof window !== "undefined" ? window.location.origin : ""}${path ?? location.pathname}`;

  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [, key, val] = selector.match(/\[(.+)="(.+)"\]/) ?? [];
        if (key && val) el.setAttribute(key, val);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", getAssetUrl("/og-image.jpg"));
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", getAssetUrl("/og-image.jpg"));

    // Security Headers (Basic CSP and X-Frame-Options simulation via meta)
    setMeta('meta[http-equiv="Content-Security-Policy"]', "content", "default-src 'self' https:; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https: fonts.googleapis.com; font-src 'self' https: fonts.gstatic.com; img-src 'self' data: https:;");
    setMeta('meta[http-equiv="X-Frame-Options"]', "content", "DENY");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, url]);

  return null;
};

export default Seo;
