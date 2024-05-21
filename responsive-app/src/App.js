import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import CareersLayout from "./layouts/CareersLayout";
import Careers, { careersLoader } from "./pages/Careers";
import CareerDetails, { careerDetailsLoder } from "./pages/CareerDetails";
import CareerError from "./pages/CareerError";

import { CookiesProvider } from 'react-cookie';
import Cookie from './Cookie';
import Caching from "./Caching";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path={"help"} element={<HelpLayout/>}>
        <Route path={"faq"} element={<Faq/>}/>
        <Route path={"contact"} element={<Contact/>} action={contactAction}/>
      </Route>
      <Route path={"careers"} element={<CareersLayout/>}>
        <Route 
        index 
        element={<Careers/>}
        loader={careersLoader}
        />
        <Route 
        path=":id"
        element={<CareerDetails/>}
        loader={careerDetailsLoder}
        errorElement={<CareerError/>}
        />
      </Route>
    </Route>
  )
)
function App() {

  return (
  // <RouterProvider router={router}/>
  // <div style={{margin:'20px'}}>
  // <CookiesProvider>
  //   <Cookie/>
  // </CookiesProvider>
  // </div>
  
  <>
   <QueryClientProvider client={queryClient}>
    <Caching/>
    <ReactQueryDevtools />
    </QueryClientProvider>
  </>
  );
}

export default App;
