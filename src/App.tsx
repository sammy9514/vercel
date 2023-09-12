import react from "react";
import { RouterProvider } from "react-router-dom";
import { Mainrouter } from "./Router/Mainrouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={Mainrouter} />
    </div>
  );
};

export default App;
