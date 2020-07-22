export interface Category {
  name: string,
  icon: string,
  api: string
}

export interface UseInput {
  value: string,
  setValue: Function,
  bind: object,
  reset: Function
}
