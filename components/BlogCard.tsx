import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

function formatDate(date: string): string {
  const [year, month, day] = date.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogCard({ slug, title, date, description, tags }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col gap-3 p-6 rounded-2xl bg-brand-card border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-200"
    >
      <div className="flex items-center gap-3 flex-wrap">
        <time className="text-brand-gold text-xs font-semibold uppercase tracking-wider">
          {formatDate(date)}
        </time>
        <div className="flex gap-1.5 flex-wrap">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs text-brand-cream/40 bg-brand-gold/10 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3 className="font-semibold text-brand-cream text-lg leading-snug group-hover:text-brand-gold-light transition-colors">
        {title}
      </h3>

      <p className="text-brand-cream/50 text-sm leading-relaxed line-clamp-2 flex-1">{description}</p>

      <span className="text-brand-gold text-sm font-semibold group-hover:text-brand-gold-light transition-colors">
        Read more →
      </span>
    </Link>
  );
}
