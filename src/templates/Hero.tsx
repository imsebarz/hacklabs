import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="">
            <a>GitHub</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-200">Hack.labs()</span>
          </>
        }
        description="Programación competitiva WEB3"
        button={
          <Link href="">
            <a>
              <Button type="primary">Inscribirse</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
