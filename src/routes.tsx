import type { RouteObject } from "react-router-dom";
import App from "./App";
import BonusRulesPage from "./pages/BonusRulesPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bonus-rule",
    element: <BonusRulesPage />,
  },
];
