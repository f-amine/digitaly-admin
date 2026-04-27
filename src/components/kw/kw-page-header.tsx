import type { LucideIcon } from "lucide-react";

export function KwPageHeader({
  eyebrow,
  eyebrowIcon: Icon,
  title,
  highlight,
  description,
  actions,
}: {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  title: string;
  highlight?: string;
  description?: string;
  actions?: React.ReactNode;
}) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#efefef] bg-white px-3 py-1 text-[11px] font-medium text-[#888] dark:border-[#1f1f1f] dark:bg-[#111111]">
          {Icon && <Icon className="h-3 w-3 text-[#E8431A]" />}
          {eyebrow}
        </div>
        <h1 className="text-[32px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[40px]">
          {title}
          {highlight && <> <span className="text-[#E8431A]">{highlight}</span></>}
        </h1>
        {description && (
          <p className="text-muted-foreground mt-1 max-w-md text-[14px]">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  );
}
