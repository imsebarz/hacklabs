import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="¡Ven y hackea contratos inteligentes con nosotros!"
    description="Un evento para demostrar tus habilidades de Solidity"
  >
    <VerticalFeatureRow
      title="El lugar donde convergen la decentralización, el desarrollo y el Hacking"
      description="Una tarde donde se desarrollarán, hackearan y optimizaran contratos inteligentes en una ambiente de
      programación competitiva en solidity."
      image="/assets/images/dotlabs.jpg"
      imageAlt="First feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
