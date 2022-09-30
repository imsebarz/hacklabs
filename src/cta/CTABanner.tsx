import { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center flex flex-col border-solid border-purple-900 border-2 p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-white rounded-md">
    <div className="text-2xl font-semibold">
      <div className="text-black">{props.title}</div>
      <div className="text-purple-900">{props.subtitle}</div>
    </div>

    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
      {props.button}
    </div>
  </div>
);

export { CTABanner };
