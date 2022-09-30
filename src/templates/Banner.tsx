import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Inscribete como competidor."
      subtitle="Y prepárate para hackear"
      button={
        <Link href="">
          <a>
            <Button type="secondary">Inscribirse</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
