import type { RouteObject } from "react-router-dom";
import App from "./App";
import BonusRulesPage from "./pages/BonusRulesPage";
import WalletAgentRules from "./pages/WalletAgentRulePage";
import MainAgentRulePage from "./pages/MainAgentRulePage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bonus-rule",
    element: <BonusRulesPage />,
  },
  {
    path: "/wallet-agent-rule",
    element: <WalletAgentRules />,
  },
  {
    path: "/main-agent-rule",
    element: <MainAgentRulePage />,
  },
];
