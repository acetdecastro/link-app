import React from "react";
import NextLink, { type LinkProps } from "next/link";

export const Link = React.forwardRef(function Link(
  props: LinkProps & React.ComponentPropsWithoutRef<"a">,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return <NextLink {...props} ref={ref} />;
});
