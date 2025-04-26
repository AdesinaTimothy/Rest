import CountryContainer from "./CountryContainer";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import RootLayout from "./RootLayout";
import CountryDetails from "./CountryDetails";
import { createContext, useContext, useState } from "react";

export const darkModeContext = createContext();


function App() {
  const [darkMode, setDarkMode] = useState(false)

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path= "/" element = {<RootLayout/>}>
      <Route index element = {<CountryContainer />} />
      <Route path = "countrypage" element={<CountryDetails />}/>
    </Route>
  ))

  return (
    <darkModeContext.Provider value={{darkMode, setDarkMode}}>
    <RouterProvider router={router}/>
    </darkModeContext.Provider>
  )
}

export default App
