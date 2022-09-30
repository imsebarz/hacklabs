import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-6xl text-gray-900 font-bold whitespace-pre-line font-mono leading-hero">
      {props.title}
    </h1>
    <div className="text-xl mt-4 mb-16 font-mono">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
