import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Thoughts on indie iOS development, building for Apple platforms, and life as an indie developer.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <div className="h-px w-16 bg-brand-gold mb-6" />
            <h1 className="text-4xl font-semibold text-brand-cream">Blog</h1>
            <p className="text-brand-cream/50 mt-2">
              Thoughts on indie development and building for Apple platforms.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-brand-cream/40">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
