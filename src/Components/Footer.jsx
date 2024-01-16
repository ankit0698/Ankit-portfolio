



const Footer = () => {
      const day = new Date().toLocaleDateString()


      return <footer className="bg-slate-500 p-4 text-center ">
            {`Copyright @ Ankit ${day}`}
      </footer>

}

export default Footer