// https://codesandbox.io/s/github/final-form/react-final-form/tree/master/examples/field-level-validation?file=/index.js:0-2707
import { Fragment, h } from "preact"
import { HTMLAttributes } from "preact/compat"
import { useId } from "preact/hooks"
import { Field, FieldRenderProps, Form } from "react-final-form"
import { mergeClassStrings } from "../html/util"
import { Hr } from "../../components/html/content"

export const onSubmitLog = (values: unknown) => {
  console.log("onSubmit", JSON.stringify(values, undefined, 2))
}

const required = (value: unknown) => (value ? undefined : "Required")
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mustBeNumber = (value: any) => (isNaN(value) ? "Must be a number" : undefined)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const minValue = (min: number) => (value: any) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators =
  (...validators: unknown[]) =>
  (value: unknown) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const vs: any[] = validators
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const v: any = value
    return vs.reduce((error, validator) => error || validator(v), undefined)
  }

type FormProps = {
  onSubmit: (values: unknown) => void
}

const Input = (props: FieldRenderProps<string>) => {
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
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">{props.meta.error}</p>
      )}
    </div>
  )
}

const SubmitButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  const cl =
    "w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 " +
    "focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"

  const p = { ...props, type: props.type ?? "submit", class: mergeClassStrings(cl, props.class as any) }

  return <button {...p}>{props.children}</button>
}

const AlternateButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  const cl =
    "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 " +
    "hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 " +
    "dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
  const p = { ...props, class: mergeClassStrings(cl, props.class as any) }

  return <button {...p}>{props.children}</button>
}

export const FinalFormExample = (props: FormProps) => (
  <Form
    onSubmit={props.onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <Field name="firstName" validate={required} label="First Name" autocomplete="off" render={Input} />
        <Field name="lastName" validate={required} label="Last Name" autocomplete="off" render={Input} />
        <Field
          name="age"
          validate={composeValidators(required, mustBeNumber, minValue(18))}
          label="Age"
          autocomplete="off"
          render={Input}
        />
        <div>
          <SubmitButton disabled={submitting}>Submit</SubmitButton>
          <AlternateButton onClick={form.reset} disabled={submitting || pristine}>
            Reset
          </AlternateButton>
        </div>

        <Hr class="my-3" />
        <pre>{JSON.stringify(values, undefined, 2)}</pre>
      </form>
    )}
  />
)
