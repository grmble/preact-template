import { HashHistory } from "history"
import { CustomHistory } from "preact-router"

export const hashHistoryAdapter = (hashHistory: HashHistory): CustomHistory => {
  return {
    listen: (callback) => hashHistory.listen(({ location }) => callback(location)),
    location: hashHistory.location,
    push: hashHistory.push,
    replace: hashHistory.replace,
  }
}

export const mergeClassStrings = (classes: string, moreClasses?: string) => {
  return `${classes} ${moreClasses ?? ""}`
}

export type ClassProps = {
  class?: string
}

export const mergeClassProps = (classes: string, props: ClassProps) => {
  return { ...props, class: mergeClassStrings(classes, props.class) }
}

export const classFromAttributes = (v?: string | { value?: string | undefined } | undefined) => {
  return !v ? "" : typeof v === "string" ? v : v.value ? v.value : ""
}
