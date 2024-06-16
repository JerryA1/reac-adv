import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-layload/pages/NoLazy";

// ----------------------------------------------------------------------

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import("../01-layload/layout/LazyLayout"));

// ----------------------------------------------------------------------

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazy Layout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy 2",
  },
];
