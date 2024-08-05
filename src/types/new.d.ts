interface TagsInter {
  id: number
  label: string
}

interface NewsInter {
  id: number
  title: string
  content: string
  tags: string[]
  date: string
  imageUrl: string
}

interface PaginateResult {
  page: number
  size: number
  total: number
  list: NewsInter[]
}

interface ParamsInter {
  page: number
  size: number
  tag: string
}

export {
  TagsInter,
  NewsInter,
  PaginateResult,
  ParamsInter,
}
