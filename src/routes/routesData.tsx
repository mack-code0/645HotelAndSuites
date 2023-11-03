import LandingPage from "../pages/LandingPage";

export interface routeInterface {
  path: string
  component?: any
  breadcrumb?: Record<string, string>[]
  children?: Array<routeInterface>
}

export const landingPageRoutes: routeInterface[] = [
  {
    path: "/",
    component: LandingPage,
    breadcrumb: [{ title: "Login", route: "/" }],
  },
];


