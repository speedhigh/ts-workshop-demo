import type { RouteRecordRaw } from 'vue-router'

interface MetaInter {
  keepAlive?: boolean
  title?: string
  leftArrow?: boolean
  border?: boolean
}

interface RouteItem {
  name?: string
  path: string
  redirect?: string
  meta?: MetaInter
  children?: RoutesType
}

type RouteType = RouteRecordRaw & RouteItem
type RoutesType = Array<RouteType>

export {
  RouteType,
  RoutesType,
}
