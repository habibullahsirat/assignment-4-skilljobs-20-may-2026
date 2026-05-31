import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/MainLayout.tsx", [
    index("./routes/home.tsx"),
    route("our-collections", "./routes/ourcollections.tsx"),
    route("new-arrivals", "./routes/newarrivals.tsx"),
  ]),
] satisfies RouteConfig;
