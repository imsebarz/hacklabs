type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl ? 'font-semibold text-xl' : 'font-semibold text-l';

  return (
    <span className={`text-white inline-flex items-center ${fontStyle}`}>
      dotlabs
    </span>
  );
};

export { Logo };
