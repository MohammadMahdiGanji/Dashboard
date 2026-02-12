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

function App() {
  const router = useRoutes(route);
  return (
    <>
      <ToggleMenuProvider>
        <DashboardLayout> {router}</DashboardLayout>
      </ToggleMenuProvider>
    </>
  );
}

export default App;
