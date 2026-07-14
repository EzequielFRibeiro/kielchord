import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AppCard from '@/components/AppCard';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/posts';

const apps = [
  {
    name: 'Söka: Bucket Lists Made Easy',
    description: 'The easy way to manage your bucket lists and discover new goals.',
    url: 'https://soka.appdeco.ca',
    iconSrc: '/images/soka-icon.png',
  },
  {
    name: 'Classifier: Collection Tracker',
    description: 'Digitize your collections and take them everywhere you go.',
    url: 'https://classifier.appdeco.ca',
    iconSrc: '/images/classifier-icon.png',
  },
  {
    name: "Ceramispace: Potter's Studio",
    description: 'Bring your studio with you wherever you go, and take your practice to the next level.',
    url: 'https://ceramispace.appdeco.ca',
    iconSrc: '/images/ceramispace-icon.png',
  },
];

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden">
          {/* Subtle radial glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(152,122,43,0.12) 0%, transparent 70%)',
            }}
          />
          <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-6">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em]">
              App Deco Studio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-brand-cream">
              Making apps{' '}
              <span className="text-brand-gold">simple,</span>
              <br />
              yet stunning.
            </h1>
            <p className="text-brand-cream/60 text-lg max-w-xl leading-relaxed">
              We craft beautifully designed apps for Apple platforms — where every detail is intentional,
              and every interaction feels effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="#apps"
                className="px-8 py-3 bg-brand-gold hover:bg-brand-gold-light text-white font-semibold rounded-full transition-colors"
              >
                Explore our apps
              </a>
              <Link
                href="/blog"
                className="px-8 py-3 border border-brand-gold/40 hover:border-brand-gold text-brand-cream font-semibold rounded-full transition-colors"
              >
                Read the blog
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-6 border-t border-brand-gold/20">
          <div className="max-w-3xl mx-auto">
            <div className="h-px w-16 bg-brand-gold mb-8" />
            <blockquote className="text-2xl sm:text-3xl font-semibold text-brand-cream leading-relaxed mb-8">
              &ldquo;Excellence in app development involves more than just aesthetics — it&rsquo;s about
              seamlessly weaving each component together.&rdquo;
            </blockquote>
            <p className="text-brand-cream/60 leading-relaxed mb-4">
              At App Deco Studio, we meticulously design every button, refine each line of text, and shape every
              feature to create a cohesive user experience. This intentional approach ensures that users can
              effortlessly navigate and engage with our apps, getting to where they want to go quickly and
              intuitively.
            </p>
            <p className="text-brand-cream/60 leading-relaxed mb-8">
              We understand that time is valuable — which is why we obsess over the details so you don&rsquo;t
              have to.
            </p>
            <p className="text-brand-gold font-semibold">Roddy Munro, Founder of App Deco Studio</p>
          </div>
        </section>

        {/* Apps */}
        <section id="apps" className="py-24 px-6 border-t border-brand-gold/20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="h-px w-16 bg-brand-gold mb-6" />
              <h2 className="text-3xl font-semibold text-brand-cream">Our apps</h2>
              <p className="text-brand-cream/50 mt-2">Simple, beautiful tools for everyday life.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {apps.map((app) => (
                <AppCard key={app.url} {...app} />
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        {recentPosts.length > 0 && (
          <section id="blog" className="py-24 px-6 border-t border-brand-gold/20">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-end justify-between mb-12 gap-4">
                <div>
                  <div className="h-px w-16 bg-brand-gold mb-6" />
                  <h2 className="text-3xl font-semibold text-brand-cream">From the blog</h2>
                  <p className="text-brand-cream/50 mt-2">
                    Thoughts on indie development and building for Apple platforms.
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="text-brand-gold hover:text-brand-gold-light font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentPosts.map((post) => (
                  <BlogCard key={post.slug} {...post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact */}
        <section id="contact" className="py-24 px-6 border-t border-brand-gold/20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-px w-16 bg-brand-gold mx-auto mb-8" />
            <h2 className="text-3xl font-semibold text-brand-cream mb-4">Say hello</h2>
            <p className="text-brand-cream/60 mb-8 leading-relaxed">
              Have a question, a project idea, or just want to chat about apps? We&rsquo;d love to hear from
              you.
            </p>
            <a
              href="mailto:hello@appdeco.ca"
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-gold hover:bg-brand-gold-light text-white font-semibold rounded-full transition-colors"
            >
              hello@appdeco.ca
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
