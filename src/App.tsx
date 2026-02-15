// import style
import "./css/input.css";

// import hook
import { useRoutes } from "react-router-dom";

// import route
import { route } from "./router";

// import layout
import DashboardLayout from "./layout/DashboardLayout";

// import provider context toggle menu
import ToggleMenuProvider from "./context/toggle-mnue/toggleMenuProvider";

// import provider context toggle data
import { ToggleForDataProvider } from "./context/toggle-for-data/ToggleForDataProvider";

function App() {
  const router = useRoutes(route);
  return (
    <>
      <ToggleMenuProvider>
        <ToggleForDataProvider>
          <DashboardLayout> {router}</DashboardLayout>
        </ToggleForDataProvider>
      </ToggleMenuProvider>
    </>
  );
}

export default App;
