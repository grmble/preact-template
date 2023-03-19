import { h } from "preact"
import { render } from "@testing-library/preact"
import { FinalFormExample } from "./final_form"
import userEvent from "@testing-library/user-event"

test("Form submits when valid", async () => {
  const onSubmit = jest.fn()

  const { getByRole, queryAllByRole } = render(<FinalFormExample onSubmit={onSubmit} />)

  await userEvent.type(getByRole("textbox", { name: /first/i }), "John")
  await userEvent.type(getByRole("textbox", { name: /last/i }), "Doe")
  await userEvent.type(getByRole("textbox", { name: /age/i }), "42")

  await userEvent.click(getByRole("button", { name: /submit/i }))

  expect(queryAllByRole("alert")).toHaveLength(0)
  expect(getByRole("button", { name: /submit/i })).not.toHaveAttribute("disabled")
  expect(onSubmit).toBeCalledTimes(1)
})

test("Form does not show any errors initially", async () => {
  const onSubmit = jest.fn()

  const { queryAllByRole, getByRole } = render(<FinalFormExample onSubmit={onSubmit} />)
  expect(getByRole("button", { name: /submit/i })).not.toHaveAttribute("disabled")
  expect(queryAllByRole("alert")).toHaveLength(0)
  expect(onSubmit).not.toBeCalled()
})

test("Form shows errors", async () => {
  const onSubmit = jest.fn()

  const { getByRole, queryAllByRole } = render(<FinalFormExample onSubmit={onSubmit} />)

  await userEvent.type(getByRole("textbox", { name: /age/i }), "17")
  await userEvent.click(getByRole("button", { name: /submit/i }))

  expect(queryAllByRole("alert")).toHaveLength(3)
  expect(getByRole("button", { name: /submit/i })).not.toHaveAttribute("disabled")
  expect(onSubmit).toBeCalledTimes(0)
})
