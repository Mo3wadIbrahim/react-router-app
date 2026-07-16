import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import RootLayout from "./ui/RootLayout.jsx";
import ErrorComponent from "./components/ErrorComponent.jsx";
import Products from "./components/Products.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true, // replacement of path: "" ans a root path
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// // // // // // // // // ** BrowserRouter ** // // // // // // // // //
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Home.jsx";
// import About from "./components/About.jsx";
// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
