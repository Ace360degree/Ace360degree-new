import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/d2c-retailbrand')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/d2c"!</div>
}
