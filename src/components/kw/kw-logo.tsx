type Props = { className?: string; alt?: string };

export function KwLogo({ className = "h-7 w-auto", alt = "KitsWand" }: Props) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/logonav.svg"
        alt={alt}
        className={`${className} block dark:hidden`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/logonav_dark.svg"
        alt={alt}
        className={`${className} hidden dark:block`}
      />
    </>
  );
}
