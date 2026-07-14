import type { Metadata } from 'next';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function formatDate(date: string): string {
  const [year, month, day] = date.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <>
      <Nav />
      <main className="pt-16">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <Link
            href="/blog"
            className="text-brand-gold hover:text-brand-gold-light text-sm font-semibold transition-colors mb-10 inline-block"
          >
            ← Back to blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <time className="text-brand-gold text-xs font-semibold uppercase tracking-wider">
                {formatDate(post.date)}
              </time>
              <div className="flex gap-1.5 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-brand-cream/40 bg-brand-gold/10 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-brand-cream leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-brand-cream/40 text-sm">By {post.author}</p>
          </header>

          <div className="blog-content">
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {post.content}
            </Markdown>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
