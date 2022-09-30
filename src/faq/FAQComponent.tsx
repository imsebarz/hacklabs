import { ReactElement } from 'react';

// @ts-ignore
import Faq from 'react-faq-component';

interface Row {
  title: string;
  content: string | ReactElement;
}

interface Data {
  title: string;
  rows: Row[];
}

const data: Data = {
  title: 'FAQ (Como funciona)',
  rows: [
    {
      title: '¿Hack.labs tendrá algún costo?',
      content: `No, hack.labs es completamente gratuito para cualquier asistente.`,
    },
    {
      title: 'Si no tengo experiencia con solidity ¿Puedo participar?',
      content:
        '¡Absolutamente! hack.labs esta abierto tanto a principiantes como a expertos del mundo web3.',
    },
    {
      title: '¿En que lugar se llevará a cabo la competencia?',
      content: `hack.labs tendrá lugar en la fabrica de Ragged. En esta dirección: Av. 80 #6S, Medellín`,
    },
  ],
};

const styles = {
  bgColor: '#581c87',
  titleTextColor: 'white',
  rowTitleColor: 'white',
  rowContentColor: '#bbbbbb',
  arrowColor: 'white',
};

const config = {
  animate: true,
  tabFocus: true,
};

const FAQComponent = () => (
  <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-center sm:p-12 bg-purple-900 rounded-md">
    <Faq data={data} styles={styles} config={config} className="font-m" />
  </div>
);

export { FAQComponent };
