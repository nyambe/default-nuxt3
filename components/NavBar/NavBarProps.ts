import { cva, type VariantProps } from 'class-variance-authority'

type NavBarProps = VariantProps<typeof navBar>

const navBar = cva(['navbar'], {
  variants: {
    color: {
      primary: ['bg-primary', 'text-primary-content'],
      secondary: ['bg-secondary', 'text-secondary-content'],
      accent: ['bg-accent', 'text-accent-content'],
      neutral: ['bg-neutral', 'text-neutral-content'],
      info: ['bg-info', 'text-info-content'],
      success: ['bg-success', 'text-success-content'],
      warning: ['bg-warning', 'text-warning-content'],
      error: ['bg-error', 'text-error-content'],
      default: ['bg-base-200', 'text-base-content'],
      base100: ['bg-base-100', 'text-base-content'],
      base200: ['bg-base-200', 'text-base-content'],
      base300: ['bg-base-300', 'text-base-content'],
      light: ['bg-light', 'text-base-content'],
      dark: ['bg-dark', 'text-base-100'],
      white: ['bg-white', 'text-black'],
      black: ['bg-black', 'text-white']
    },
    size: {
      small: ['navbar-small', 'p-4'],
      large: ['navbar-large'],
      normal: ['navbar-normal']
    },
    padding: {
      none: ['p-0'],
      small: ['p-small'],
      medium: ['px-medium py-small'],
      large: ['px-large py-normal']
    }
  },
  defaultVariants: {
    color: 'default',
    size: 'normal',
    padding: 'small'
  }
})

export { navBar }
export type { NavBarProps }
