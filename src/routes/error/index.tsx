import { createFileRoute } from '@tanstack/react-router'
import ErrorPage from "../../ui/pages/ErrorPage";

export const Route = createFileRoute('/error/')({
  component: ErrorPage,
})
