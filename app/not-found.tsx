import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';

export default function NotFound() {
  return (
    <section className="relative flex  min-h-[calc(100vh-(60px+72px))] items-center overflow-hidden bg-white py-[3.75rem]">
      <Container>
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="lg:text-5xl text-2xl font-medium leading-[1.11] text-black">
            Oops! Página no encontrada
          </h2>
          <p className="mt-6 text-md font-medium leading-[1.4] text-black/80 lg:text-xl">
            Lo sentimos, no se pudo encontrar la página que solicitó.
          </p>
          <div className="mt-8 lg:mt-10">
            <Button asChild>
              <CustomLink href="/">Home</CustomLink>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
