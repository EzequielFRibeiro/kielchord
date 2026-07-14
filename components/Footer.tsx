import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image src="/images/logo.png" alt="App Deco Studio" width={114} height={50} className="h-10 w-auto" />
          <p className="text-brand-cream/30 text-sm">© {new Date().getFullYear()} App Deco Studio Inc.</p>
        </div>

        <nav className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-wider mb-1">Company</p>
            <Link href="/#about" className="text-brand-cream/50 hover:text-brand-cream text-sm transition-colors">
              About
            </Link>
            <Link href="/#apps" className="text-brand-cream/50 hover:text-brand-cream text-sm transition-colors">
              Apps
            </Link>
            <Link href="/blog" className="text-brand-cream/50 hover:text-brand-cream text-sm transition-colors">
              Blog
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-wider mb-1">Get in touch</p>
            <a
              href="mailto:hello@appdeco.ca"
              className="text-brand-cream/50 hover:text-brand-cream text-sm transition-colors"
            >
              hello@appdeco.ca
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
