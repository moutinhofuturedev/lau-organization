export type LinkCardProps = {
  url: string
  title: string
}

type UnionProps = {
  title: string
  url: string
}

export type DataProps = {
  name: string
  jobTitle: string
  links: UnionProps[]
  social: UnionProps[]
}
