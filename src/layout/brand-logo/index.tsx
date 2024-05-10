import { CustomLink } from '@/src/components/custom-link';
import Image from 'next/image';

import logoLight from 'public/assets/images/brand/logo-light.png';
import logoDark from 'public/assets/images/brand/logo-dark.png';

export function BrandLogo() {
  return (
    <CustomLink href="/">
      <Image
        className="logo-light dark:hidden"
        src={logoLight.src}
        width={logoLight.width}
        height={logoLight.height}
        placeholder="blur"
        blurDataURL={logoLight.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="(max-width: 640px) 50vw, 25vw" //100vw tenia colocado anteriormente 
        priority
      />
      <Image
        className="logo-dark hidden dark:block"
        src={logoDark.src}
        width={logoDark.width}
        height={logoDark.height}
        placeholder="blur"
        blurDataURL={logoDark.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="(max-width: 640px) 50vw, 25vw" //100vw tenia colocado anteriormente
        priority
      />
    </CustomLink>
  );
}
