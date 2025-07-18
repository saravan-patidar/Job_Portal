import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "./components/ui/sonner";
import { Provider } from "react-redux";
import store from "./components/store/store";

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </>
);
