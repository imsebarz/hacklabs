import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  type: 'primary' | 'secondary';
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': props.type === 'primary',
    'btn-secondary': props.type === 'secondary',
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-purple-700 bg-white font-light;
          }

          .btn-primary:hover {
            @apply text-purple-700;
          }

          .btn-secondary {
            @apply text-white bg-purple-900 font-light;
          }

          .btn-secondary:hover {
            @apply text-purple-700;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
