// https://codesandbox.io/s/github/final-form/react-final-form/tree/master/examples/field-level-validation?file=/index.js:0-2707
import { h, Fragment } from "preact"
import { Form, Field, FieldRenderProps } from "react-final-form"
import { useId } from "preact/hooks"

export const onSubmitLog = (values: unknown) => {
  console.log("onSubmit", JSON.stringify(values, undefined, 2))
}

const required = (value: unknown) => (value ? undefined : "Required")
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mustBeNumber = (value: any) =>
  isNaN(value) ? "Must be a number" : undefined
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

type Props = {
  onSubmit: (values: unknown) => void
}

const HInput = ({ input, meta, label }: FieldRenderProps<string>) => {
  const id = useId()
  return (
    <div class="field is-horizontal">
      <div class={`field-label is-normal`}>
        <label class="label" htmlFor={id}>
          {label}
        </label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input id={id} class="input" {...input} />
          </div>
          {meta.error && meta.touched && (
            <span role="alert" class="help is-danger">
              {meta.error}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export const FinalFormExample = (props: Props) => (
  <>
    <h1 class="title" style="margin-top: 24px;">
      React Final Form Example
    </h1>
    <h2 class="subtitle">Synchronous Field-Level Validation</h2>

    <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            validate={required}
            label="First Name"
            render={HInput}
          />
          <Field
            name="lastName"
            validate={required}
            label="Last Name"
            render={HInput}
          />
          <Field
            name="age"
            validate={composeValidators(required, mustBeNumber, minValue(18))}
            label="Age"
            render={HInput}
          />
          <div class="field is-horizontal">
            <div class="field-label" />
            <div class="field-body">
              <div class="field">
                <div class="control is-grouped">
                  <button type="submit" class="button" disabled={submitting}>
                    Submit
                  </button>
                  <button
                    type="button"
                    class="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>

          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    />
  </>
)
