import NavigationPage from "../navigationPage/NavigationPage";
import MainPage from "../mainPage/MainPage";
import Game from "../game/Game";
import Login from "../navigationPage/Login";

export const privateRoutes = [
  {
    path: "/",
    element: <NavigationPage/>,
  },
  {
    path: "/posts",
    element: <MainPage/>,
  },
  {
    path: "/game",
    element: <Game/>,
  },
]

export const publicRoutes = [
  {
    path: "/",
    element: <Login/>,
  },
]
