import {createFileRoute} from '@tanstack/react-router'
import ProductListingPage from "../ui/pages/ProductListingPage";

export const Route = createFileRoute('/')({
  component: ProductListingPage,
})

