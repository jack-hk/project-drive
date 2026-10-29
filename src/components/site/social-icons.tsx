import type { JSX, SVGProps } from "react";
import type { SocialId } from "@/content/site";

type IconProps = SVGProps<SVGSVGElement>;

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M14.5 8H17V5h-2.5C12 5 10 7 10 9.5V11H8v3h2v7h3v-7h2.4l.6-3H13V9.5c0-.8.7-1.5 1.5-1.5z"
      />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM17.4 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
      />
    </svg>
  );
}

function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M14.5 3v11.2a2.7 2.7 0 1 1-2.7-2.7c.2 0 .5 0 .7.1V8.8a5.6 5.6 0 0 0-.7 0 5.5 5.5 0 1 0 5.5 5.4V8.2A6.7 6.7 0 0 0 21 9.6V6.8a3.9 3.9 0 0 1-3.2-1.6A4 4 0 0 1 16.7 3z"
      />
    </svg>
  );
}

const ICONS: Record<SocialId, (props: IconProps) => JSX.Element> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
};

export function SocialIcon({ id, className }: { id: SocialId; className?: string }) {
  const Icon = ICONS[id];
  return <Icon className={className} />;
}
