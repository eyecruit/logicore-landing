import Link from 'next/link';
import { Background, Container, Wrapper } from '@/components';

export default function NotFound() {
  return (
    <Background>
      <Wrapper className="py-20 relative">
        <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="mb-8">The page you are looking for does not exist.</p>
          <Link 
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition"
          >
            Return Home
          </Link>
        </Container>
      </Wrapper>
    </Background>
  );
} 