import { servicioCanciones } from '../services/servicioCanciones.js'

//usar el hook usestate
//para almacenar de forma global el servicio
import { useState, useEffect } from 'react'

export function Music(){

    // creando el primer usestate
    const[canciones,setCanciones]=useState(null)
    const[estamosCargando,setestamosCargando]=useState(true)

    // usando primer useeffect

    useEffect(function(){
        servicioCanciones()
    .then(function(respuesta){
       setCanciones(respuesta)
       setestamosCargando(false)
    })
    },[])

    if(estamosCargando==true){

        return(
            <>
                <h1>Estamos Cargando...</h1>

                <div className="container-fluid">
                    <div className="col mt-3 bg-dark p-5">
                        <div className="card h-100">


                        </div>

                    </div>
                </div>
                        
            </>
        )


    }else{

        return(

        <div className="row row-cols-1 row-cols-md-4 g-0 mt-5">

             
            <>

                <h1>Estan listas las canciones</h1>
                {
                   canciones.tracks.map(function(cancion){
                    return(
                    <div className="col mt-3 bg-dark p-5">
                        <div className="card h-100"></div>
                        <h5 className="card h-100">{cancion.name}</h5>
                        
                    </div>

                             
                    )

                   })
                }           
            </>

        </div>

        )

    }

}