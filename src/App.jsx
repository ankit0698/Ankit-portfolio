import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import About from './Components/About'
import RootLayout from './Components/RootLayout'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

import Contact from './Components/Contact'



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, element: <About />,
      },
      { path: 'projects', element: <Projects /> },
      { path: 'skills', element: <Skills /> },

      { path: 'contact', element: <Contact /> },
    ]
  }
])


function App() {



  return <RouterProvider router={router} />

}

export default App
