import { h } from "preact"
import { render } from "@testing-library/preact"
import HookFormDemo from "./hook_form"
import userEvent from "@testing-library/user-event"

test("Hook form submits when valid", async () => {
  const onSubmit = jest.fn()

  const { getByRole } = render(<HookFormDemo onSubmit={onSubmit} />)

  await userEvent.type(getByRole("textbox", { name: /first/i }), "John")
  await userEvent.type(getByRole("textbox", { name: /last/i }), "Doe")
  await userEvent.type(getByRole("spinbutton", { name: /age/i }), "42")

  await userEvent.click(getByRole("button", { name: /submit/i }))

  expect(onSubmit).toBeCalledTimes(1)
})

test("Hook form does not submit when required field is not filled", async () => {
  const onSubmit = jest.fn()

  const { getByRole, findAllByRole } = render(
    <HookFormDemo onSubmit={onSubmit} />,
  )
  await userEvent.click(getByRole("button", { name: /submit/i }))
  const allAlerts = await findAllByRole("alert")
  expect(allAlerts).toHaveLength(1)

  expect(onSubmit).not.toBeCalled()
})
