
import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import MainLayout from './MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage'
import JobPage,{jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>} >
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path = "*" element = {<NotFoundPage/>}/>
    </Route>
  )
);

const App = () => {
  const addJob=async(newJob)=>{
    const res = await fetch("./api/job", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob)
    } )
    
  }
  return  <RouterProvider router={router}/>
};

export default App
 
