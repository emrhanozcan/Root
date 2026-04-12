import { Link } from 'react-router-dom';
import { usePageTitle } from '@/hooks/usePageTitle';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  usePageTitle('Page Not Found');

  return (
    <div className="pt-20 md:pt-24 min-h-screen flex items-center">
      <Container className="text-center py-20">
        <div className="text-8xl font-extrabold text-root-orange/20 font-heading mb-4">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-root-dark mb-4 font-heading">
          Page Not Found
        </h1>
        <p className="text-lg text-root-muted mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button>
              <Home size={16} />
              Go Home
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft size={16} />
            Go Back
          </Button>
        </div>
      </Container>
    </div>
  );
}
