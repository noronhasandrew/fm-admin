import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { firebaseApp } from "./services/firebase";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import MusicList from "./components/MusicList";

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <MusicList /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
