import { Icons } from "next/dist/lib/metadata/types/metadata-types";

export const METADATA_ICONS: Icons = {
  icon: [
    {
      url: "/favicon-96x96.png",
      type: "image/png",
      sizes: "96x96",
    },
    {
      url: "/favicon.svg",
      type: "image/svg+xml",
    },
  ],
  shortcut: {
    url: "/favicon.svg",
  },
  apple: {
    url: "/apple-touch-icon.png",
    sizes: "180×180",
  },
};
