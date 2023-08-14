import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Toaster } from "react-hot-toast";
import useAuthCheck from "./hooks/useAuthCheck";

function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div className="flex justify-center items-center">
      <p>Auth Checking...</p>
    </div>
  ) : (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
