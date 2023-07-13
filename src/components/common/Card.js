import { cx } from 'class-variance-authority';

const Card = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className={cx('card bg-white shadow-xl overflow-auto', rest?.className)}>
      {children}
    </div>
  );
};

const CardBody = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className={cx('card-body px-5', rest?.className)}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className={cx('card-footer p-5 flex gap-3', rest?.className)}>
      {children}
    </div>
  );
};

export { Card, CardBody, CardFooter };
