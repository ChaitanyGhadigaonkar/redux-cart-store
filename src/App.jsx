import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Favorites from "./pages/Favorites";
import AddToCart from "./pages/AddToCart";

import { Provider } from "react-redux";
import store from "./store/store";
import { Toaster } from "react-hot-toast";
import Spinner from "./components/Spinner";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Provider store={store}>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#0053a6",
            },
          },
          error: {
            iconTheme: {
              primary: "#0053a6",
            },
          },
        }}
      />
      <BrowserRouter>
        <div className="flex flex-col justify-between">
          <Navbar />
          <Spinner loading={loading} />
          <div className="w-[90%] m-auto sm:w-[100%] sm:px-2 md:w-[100%] md:px-5 lg:w-[90%]">
            <Routes>
              <Route
                path="/"
                element={<Products loading={loading} setLoading={setLoading} />}
              />
              <Route
                path="/favorites"
                element={
                  <Favorites loading={loading} setLoading={setLoading} />
                }
              />
              <Route
                path="/cart"
                element={
                  <AddToCart loading={loading} setLoading={setLoading} />
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
