import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import { navigationItems } from '@/data/siteConfig';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-root-border'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-24 md:h-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group"
            aria-label="ROOT – Home"
          >
            <img src="/images/root.png" alt="ROOT Logo" className="h-[52px] md:h-[64px] w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                  location.pathname === item.href
                    ? 'text-root-orange bg-root-orange/5'
                    : 'text-root-dark/70 hover:text-root-dark hover:bg-root-dark/5'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-root-dark hover:bg-root-dark/5 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 top-20 bg-white z-40 lg:hidden transition-all duration-300',
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <Container className="pt-8">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'px-4 py-3.5 text-lg font-medium rounded-xl transition-all duration-200',
                  isMenuOpen && 'animate-fade-in-up',
                  location.pathname === item.href
                    ? 'text-root-orange bg-root-orange/5'
                    : 'text-root-dark hover:bg-root-dark/5'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
