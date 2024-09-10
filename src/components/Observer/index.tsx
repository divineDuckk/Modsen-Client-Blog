import { Children, FC } from "react";

import { LazyLoad } from "./LazyContainer";
import { ObserverProps } from "./types";

export const Observer: FC<ObserverProps> = ({ children }) => {
  return (
    <>
      {Children.map(children, (child) => (
        <LazyLoad>{child}</LazyLoad>
      ))}
    </>
  );
};
