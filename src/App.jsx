import CountryContainer from "./CountryContainer";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import RootLayout from "./RootLayout";
import CountryDetails from "./CountryDetails";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path= "/" element = {<RootLayout />}>
      <Route index element = {<CountryContainer />} />
      <Route path = "countrypage" element={<CountryDetails />}/>
    </Route>
  ))

  return (
    
    // <div>
    //   <CountryContainer />
    // </div>
    <RouterProvider router={router}/>
  )
}

export default App
