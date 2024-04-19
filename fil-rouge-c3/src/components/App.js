import Acceuil from "./Acceuil";
import Boutique from "./Boutique";
import Footer from "./Footer";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css';
import Produit from "./Produit";
import {
  RouterProvider,
  Route,
  Routes,
  createBrowserRouter

} from "react-router-dom";


// 3️⃣ Router singleton created
const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

// 4️⃣ RouterProvider added
export default function App() {
  return <RouterProvider router={router} />;
}


 function Root(){
  // state (data)


  // behaviour (functions)

  // rendering
  return (
    <>
    
      {/* <BrowserRouter > */}
        
        <Routes>

          <Route path="/" element={<Header />}>
            <Route index element={<Acceuil />} />
            <Route path="Boutique" element={<Boutique />} />
            <Route path="Produit" element={<Produit />} />

          </Route>

        </Routes>

        <Footer></Footer>
      {/* </BrowserRouter> */}
    </>
  )
  
}


