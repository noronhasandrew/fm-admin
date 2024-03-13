import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { firebaseApp } from "./services/firebase";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import MusicDetails from "./pages/MusicDetails";
import Inspiration from "./components/Inspiration";
import Video from "./components/Video";

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/musicas/:musicId",
        element: <MusicDetails />,
        children: [
          {
            path: "/musicas/:musicId/inspiracao",
            element: <Inspiration />,
          },
          {
            path: "/musicas/:musicId/video",
            element: <Video />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
