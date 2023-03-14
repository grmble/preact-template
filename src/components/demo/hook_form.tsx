import { useForm, SubmitHandler } from "react-hook-form"
import { h } from "preact"
import { useId } from "preact/hooks"

interface IFormInput {
  firstName: string
  lastName: string
  age: number
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
  const firstNameId = useId()
  const lastNameId = useId()
  const ageId = useId()

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label" htmlFor={firstNameId}>
            First Name
          </label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                class="input"
                id={firstNameId}
                {...register("firstName", { required: true, maxLength: 20 })}
              />
            </div>
            {errors.firstName && (
              <p role="alert" class="help is-danger">
                Required
              </p>
            )}
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label" htmlFor={lastNameId}>
            Last Name
          </label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                class="input"
                id={lastNameId}
                {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
              />
            </div>

            {errors.lastName && (
              <p role="alert" class="help is-danger">
                Only a-z
              </p>
            )}
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label" htmlFor={ageId}>
            Age
          </label>
        </div>
        <div class="field-body">
          <div class="control">
            <div class="field">
              <input
                class="input"
                id={ageId}
                type="number"
                {...register("age", { min: 18, max: 99 })}
              />
            </div>
            {errors.age && (
              <p role="alert" class="help is-danger">
                Number between 18 and 99
              </p>
            )}
          </div>
        </div>
      </div>
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
