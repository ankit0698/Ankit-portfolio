import Navbar from "../Components/Navbar"
import classes from './Error.module.css'

const Error = () => {
      return (
            <>
                  <Navbar />
                  <div className={classes.main}>
                        <h1>Uh! Oh </h1>
                        <h2>An error occured. try using another way </h2>
                        <img src='https://media.giphy.com/media/FYUnDtud95kMKCovAY/giphy.gif' alt='error' />
                  </div >

            </>
      )
}

export default Error