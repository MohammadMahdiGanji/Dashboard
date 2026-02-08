// import page
import Home from "./pages/home/Home"
import Setting from "./pages/setting/Setting"
import Users from "./pages/users/Users"
import User from "./pages/user/User"

// import type
import type {  RouteType } from "./types/type"

export const route:RouteType[] = [
  {path:"/", element:<Home />},
  {path:"/users", element:<Users />},
  {path:"/setting", element:<Setting />},
  {path:"/users/:id", element:<User />}
]