import { createFileRoute } from "@tanstack/react-router";

function RouteComponent() {
  return "Hello /!";
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
