import { cva, cx } from 'class-variance-authority';

const buttonStyles = cva(['btn'], {
  variants: {
    variant: {
      primary: 'btn-primary',
      neutral: 'btn-neutral',
      secondary: 'btn-secondary',
      info: 'btn-info',
      success: 'btn-success',
    },
    fullWidth: {
      true: 'w-full',
    }
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const Button = ({ children, variant, fullWidth, ...props }) => {
  return (
    <button {...props} className={cx(buttonStyles({ variant, fullWidth }), props.className)}>
      {children}
    </button>
  );
}

export { Button }