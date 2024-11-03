import { ComponentProps, FC } from "react";

const Input: FC<ComponentProps<"input">> = (props) => {
  const { className, ...restProps } = props;

  return <input className={className} {...restProps} />;
};

export default Input;
