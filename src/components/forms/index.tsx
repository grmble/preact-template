import { h } from "preact"
import { HTMLAttributes } from "preact/compat"
import { useId } from "preact/hooks"
import { FieldRenderProps } from "react-final-form"
import { classFromAttributes, mergeClassStrings } from "../util"

export type FormProps = {
  onSubmit: (values: unknown) => void
}

export const Input = (props: FieldRenderProps<string>) => {
  const id = useId()
  const cl =
    "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 " +
    "dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
  return (
    <div class="mb-6">
      <label htmlFor={id} class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {props.label}
      </label>
      <input
        id={id}
        type={props.type ?? "text"}
        class={mergeClassStrings(cl, props.class)}
        autocomplete={props.autocomplete}
        {...props.input}
      />
      {props.meta.error && props.meta.touched && (
        <p role="alert" class="mt-2 text-sm text-red-600 dark:text-red-500">
          {props.meta.error}
        </p>
      )}
    </div>
  )
}

export const SubmitButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  const cl =
    "w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 " +
    "focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"

  const p = { ...props, type: props.type ?? "submit", class: mergeClassStrings(cl, classFromAttributes(props.class)) }
  return <button {...p}>{props.children}</button>
}

export const AlternateButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  const cl =
    "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 " +
    "hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 " +
    "dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
  const p = { ...props, class: mergeClassStrings(cl, classFromAttributes(props.class)) }

  return <button {...p}>{props.children}</button>
}
