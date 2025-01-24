import { useState } from "react";
import Header from "./components/Header";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact";
import Products from "./pages/Products.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  /* process-1 of creating router
  return (
    <>
      <div className="h-full min-h-screen w-full">
        <Header />
        <div className="flex justify-center items-center min-h-[80%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
  */

  //process-2 for latest way

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
