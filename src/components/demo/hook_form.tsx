import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
  FieldErrors,
} from "react-hook-form"
import { h } from "preact"
import { useId } from "preact/hooks"
import { PropsWithChildren } from "preact/compat"

type IFormInput = {
  firstName: string
  lastName: string
  age: number
}

// is-normal is used by default
type VerticalAlignment =
  | "none"
  | "is-small"
  | "is-normal"
  | "is-medium"
  | "is-large"

type HFieldProps<R extends FieldValues, K extends Path<R>> = {
  name: K
  register: UseFormRegister<R>
  options: RegisterOptions<R, K>
  label?: string
  default?: string
  errors?: FieldErrors<R>
  errorMsg?: string
  labelValign?: VerticalAlignment
}

const errorHandler = <R extends FieldValues>(
  name: string,
  msg?: string,
  errors?: FieldErrors<R>,
) => {
  const u = errors && errors[name]

  if (u) {
    console.log(`errorHandler: ${name} has error`, u)
    return (
      <p role="alert" class="help is-danger">
        {msg}
      </p>
    )
  }

  return undefined
}

const HInput = <R extends FieldValues, K extends Path<R>>(
  props: PropsWithChildren<HFieldProps<R, K>>,
) => {
  const id = useId()
  return (
    <div class="field is-horizontal">
      <div class={`field-label ${props.labelValign || "is-normal"}`}>
        <label class="label" htmlFor={id}>
          {props.label}
        </label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              id={id}
              class="input"
              {...props.register(props.name, props.options)}
            />
          </div>
          {errorHandler(props.name, props.errorMsg, props.errors)}
        </div>
      </div>
    </div>
  )
}

type Props = {
  onSubmit: SubmitHandler<IFormInput>
}

const HookFormDemo = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <HInput
        name="firstName"
        register={register}
        options={{ required: true, maxLength: 20 }}
        label="First Name"
        errors={errors}
        errorMsg="Required"
      />
      <HInput
        name="lastName"
        register={register}
        options={{ pattern: /^[A-Za-z]+$/i }}
        label="Last Name"
        errors={errors}
        errorMsg="Only alphabetic characters"
      />
      <HInput
        name="age"
        register={register}
        options={{ min: 18, max: 99 }}
        label="Age"
        errors={errors}
        errorMsg="From 18 to 99"
      />
      <div class="field is-horizontal">
        <div class="field-label" />
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input type="submit" />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default HookFormDemo
