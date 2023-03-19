import { h } from "preact"
import { PropsWithChildren } from "preact/compat"
import { ClassProps, mergeClassProps } from "../util"

export const H1 = (props: PropsWithChildren<ClassProps>) => {
  const cl = "text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
  return <h1 {...mergeClassProps(cl, props)}>{props.children}</h1>
}

export const H2 = (props: PropsWithChildren<ClassProps>) => {
  const cl = "text-4xl font-extrabold dark:text-white"
  return <h2 {...mergeClassProps(cl, props)}>{props.children}</h2>
}
