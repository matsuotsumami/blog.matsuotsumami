export type Styles = {
  card: string
  tags: string
  title: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
