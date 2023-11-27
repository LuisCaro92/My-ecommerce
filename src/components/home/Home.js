import { Fragment } from "react";
import Carrusel from "./Carrusel";
import Productos from "./Productos";

const Home =()=>{

    return(
           <Fragment>
            <Carrusel/>
            <Productos/>
           </Fragment>
        )
}   

export default Home;