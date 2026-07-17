import type { CatalogItem, Fit } from './data/catalog'
import type { DeliveryLocation } from './data/locations'

export interface OrderLine {
  item: CatalogItem
  fit: Fit
  size: string
  quantity: number
  badgeTag: boolean
}

export interface Order {
  orderNumber: string
  createdAt: Date
  deliveryLocation: DeliveryLocation
  lines: OrderLine[]
  leadTimeDays: number
  acceptByDate: Date
  expectedDeliveryDate: Date
  proponentName: string
  contactName: string
  contactEmail: string
}
