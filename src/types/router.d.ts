import type { RouteRecordRaw } from 'vue-router'

interface Meta {
  name: string
}

interface RouteItem {
  name?: string
  path: string
  redirect?: string
  meta?: Meta
  children?: RoutesType
}

type RouteType = RouteRecordRaw & RouteItem
type RoutesType = Array<RouteType>

export {
  RouteType,
  RoutesType,
}
