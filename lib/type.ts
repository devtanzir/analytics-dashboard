export type Theme = "dark" | "light"

export type Revenue = {
    month: string
    value: number
}
export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}