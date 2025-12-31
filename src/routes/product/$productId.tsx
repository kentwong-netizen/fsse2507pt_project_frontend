import { createFileRoute } from '@tanstack/react-router'
import ProductDetailPage from "../../ui/pages/ProductDetailPage";

export const Route = createFileRoute('/product/$productId')({
  component: ProductDetailPage,
})