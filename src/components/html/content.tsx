import { h } from "preact"
import { PropsWithChildren } from "preact/compat"
import { ClassProps, mergeClassProps } from "../util"

export const P = (props: PropsWithChildren<ClassProps>) => (
  <p {...mergeClassProps("font-light text-gray-500 dark:text-gray-400", props)}>{props.children}</p>
)

export const Hr = (props: ClassProps) => (
  <hr
    {...mergeClassProps(
      "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 " +
        "dark:text-white md:text-5xl lg:text-6xl",
      props,
    )}
  />
)
