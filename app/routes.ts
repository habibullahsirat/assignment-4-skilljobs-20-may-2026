import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/MainLayout.tsx", [
    index("./routes/home.tsx"),
    // route("login", "./auth/login.tsx"),
    // route("register", "./auth/register.tsx"),
  ]),
] satisfies RouteConfig;
