import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div className="bg-[url('/assets/images/hero.png')] bg-cover">
    {props.children}
  </div>
);

export { Background };
