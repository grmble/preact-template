export const mergeClassStrings = (classes: string, moreClasses?: string) => {
    return `${classes} ${moreClasses ?? ''}`
}

export type ClassProps = {
    class?: string
}

export const mergeClasses = (classes: string, props: ClassProps) => {
    return { ...props, class:  mergeClassStrings(classes, props.class)}
}

