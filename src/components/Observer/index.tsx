import { Children, FC } from "react";

import { LazyLoad } from "./LazyContainer";

interface ObserverProps {
  children: JSX.Element[];
}

export const Observer: FC<ObserverProps> = ({ children }) => {
  return (
    <>
      {Children.map(children, (child) => (
        <LazyLoad>{child}</LazyLoad>
      ))}
    </>
  );
};
