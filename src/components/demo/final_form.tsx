// https://codesandbox.io/s/github/final-form/react-final-form/tree/master/examples/field-level-validation?file=/index.js:0-2707
import { h } from "preact"
import { Field, Form } from "react-final-form"
import { AlternateButton, FormProps, Input, SubmitButton } from "../../components/forms"
import { composeValidators, minValue, mustBeNumber, required } from "../../components/forms/validation"
import { Hr } from "../../components/html/content"

export const onSubmitLog = (values: unknown) => {
  console.log("onSubmit", JSON.stringify(values, undefined, 2))
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
        <div class="flow space-x-2">
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
