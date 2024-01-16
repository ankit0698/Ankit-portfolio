import { Outlet } from 'react-router-dom'
import { createContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


export const ThemeContext = createContext(null)

const RootLayout = () => {

    return (
        <>
            <Navbar />
            <main className='text-gray-400 bg-gray-900 body-font'>
                <Outlet />

            </main>
            <Footer />
        </>
    )
}

export default RootLayout

//text-gray-400 bg-gray-900 body-font