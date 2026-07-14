import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
function App() {
  return (
    <div>
      <p>
        <a href="http://localhost:5173/">Home</a>
      </p>
      <a href="http://localhost:5173/about">About</a>
      <RouterProvider router={router} />
    </div>
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
