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
  audioUrl: string
  videoUrl: string
}

interface PaginateResultInter {
  page: number
  size: number
  total: number
  list: NewsInter[]
}

interface ParamsInter {
  page: number
  size: number
  tags: string[]
}

export {
  TagsInter,
  NewsInter,
  PaginateResultInter,
  ParamsInter,
}
