import { useEffect, useState } from "react";
import { Navbar, Main, Product, Footer } from "../components";
// import ClipLoader from "react-spinners/ClipLoader";
import { BounceLoader } from "react-spinners";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    },3000);
  },[])

  return (
    <>
      {loading?
        <div style={{padding : 250,marginLeft:"300px"}} >
          <BounceLoader
          
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
        :
        <>
          <Navbar />
          <Main />
          <Product />
          <Footer />
        </>
        }
    </>
  )
}

export default Home