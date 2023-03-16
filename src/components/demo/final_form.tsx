// https://codesandbox.io/s/github/final-form/react-final-form/tree/master/examples/field-level-validation?file=/index.js:0-2707
import { h, Fragment } from "preact"
import { Form, Field, FieldRenderProps } from "react-final-form"

export const onSubmitLog = (values: unknown) => {
  console.log("onSubmit", JSON.stringify(values, undefined, 2))
}

const required = (value: unknown) => (value ? undefined : "Required")
const mustBeNumber = (value: any) =>
  isNaN(value) ? "Must be a number" : undefined
const minValue = (min: any) => (value: any) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators =
  (...validators: any[]) =>
  (value: unknown) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined,
    )

type Props = {
  // async submit is also possible, just return Promise<void>
  onSubmit: (values: any) => void
}

export const FinalFormExample = (props: Props) => (
  <>
    <h1 class="title" style="margin-top: 24px;">
      React Final Form Example
    </h1>
    <h2 class="subtitle">Synchronous Field-Level Validation</h2>
    <a
      href="https://final-form.org/react"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read Docs
    </a>
    <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstName" validate={required}>
            {({ input, meta }: FieldRenderProps<string>) => (
              <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                  <input
                    {...input}
                    class="input"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                {meta.error && meta.touched && (
                  <span role="alert" class="help is-danger">
                    {meta.error}
                  </span>
                )}
              </div>
            )}
          </Field>
          <Field name="lastName" validate={required}>
            {({ input, meta }: FieldRenderProps<string>) => (
              <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                  <input
                    {...input}
                    class="input"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                {meta.error && meta.touched && (
                  <span role="alert" class="help is-danger">
                    {meta.error}
                  </span>
                )}
              </div>
            )}
          </Field>
          <Field
            name="age"
            validate={composeValidators(required, mustBeNumber, minValue(18))}
          >
            {({ input, meta }: FieldRenderProps<string>) => (
              <div class="field">
                <label class="label">Age</label>
                <div class="control">
                  <input
                    {...input}
                    class="input"
                    type="text"
                    placeholder="Age"
                  />
                </div>
                {meta.error && meta.touched && (
                  <span role="alert" class="help is-danger">
                    {meta.error}
                  </span>
                )}
              </div>
            )}
          </Field>
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
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    />
  </>
)
