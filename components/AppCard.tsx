import Image from 'next/image';

interface AppCardProps {
  name: string;
  description: string;
  url: string;
  iconSrc?: string;
}

export default function AppCard({ name, description, url, iconSrc }: AppCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 p-6 rounded-2xl bg-brand-card border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-200"
    >
      <div className="w-20 h-20 rounded-[22%] overflow-hidden flex-shrink-0">
        {iconSrc ? (
          <Image src={iconSrc} alt={name} width={80} height={80} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-gold to-brand-gold-light opacity-60" />
        )}
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <h3 className="font-semibold text-brand-cream text-lg leading-snug group-hover:text-brand-gold-light transition-colors">
          {name}
        </h3>
        <p className="text-brand-cream/50 text-sm leading-relaxed">{description}</p>
      </div>

      <span className="text-brand-gold text-sm font-semibold group-hover:text-brand-gold-light transition-colors">
        View app →
      </span>
    </a>
  );
}
