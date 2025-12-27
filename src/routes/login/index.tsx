import { createFileRoute } from '@tanstack/react-router'
import LoginPage from "../../ui/pages/LoginPage";

export const Route = createFileRoute('/login/')({
  component: LoginPage,
})

