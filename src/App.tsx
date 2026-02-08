// import style
import "./css/input.css";

// import hook
import { useRoutes } from "react-router-dom";

// import route
import { route } from "./router";

import DashboardLayout from "./layout/DashboardLayout";

function App() {
  const router = useRoutes(route);
  return (
    <>
      <DashboardLayout> {router}</DashboardLayout>
    </>
  );
}

export default App;
