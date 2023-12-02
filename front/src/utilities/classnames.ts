type classNameProp =
  | string
  | { [key: string]: boolean }
  | null
  | undefined
  | false

export const classNames = (...classNames: classNameProp[]): string => {
  const resultClasses: string[] = []

  classNames.forEach(className => {
    if (!className) return

    if (typeof className === 'string') {
      return resultClasses.push(className)
    }

    Object.keys(className).forEach(key => {
      if (className[key]) {
        resultClasses.push(key)
      }
    })
  })

  return resultClasses.join(' ')
}
