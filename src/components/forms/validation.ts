/* adapted from final form demo code
 * 
 * this abuses javascripts untypedness to do its thing,
 * i just wrapped some types around it to make the warnings and errors
 * go away. 
 */
export const required = (value: unknown) => (value ? undefined : "Required")
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mustBeNumber = (value: any) => (isNaN(value) ? "Must be a number" : undefined)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const minValue = (min: number) => (value: any) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
export const composeValidators =
  (...validators: unknown[]) =>
  (value: unknown) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const vs: any[] = validators
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const v: any = value
    return vs.reduce((error, validator) => error || validator(v), undefined)
  }
