import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

/** Page-width container: centred, capped, with responsive side gutters. */
export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-(--container) px-(--gutter)", className)}
      {...props}
    />
  );
}
