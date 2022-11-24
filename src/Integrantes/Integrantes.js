export function Integrantes(){

    let Integrantes=[
        {
            nombre:"Anthony Kiedis",
            instrumento:"Voz principal",
            edad:"60 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/images.jpg?alt=media&token=e78c1116-4a92-4a08-a438-348d2705f315"
        },
        {
            nombre:"Flea",
            instrumento:"Bajista",
            edad:"60 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/230px-2016_Red_Hot_Chili_Peppers_-_Michael_Flea_Balzary_(cropped).jpg?alt=media&token=3a471026-ac6f-446d-ae5b-62eb43f6c445"
        },
        {
            nombre:"John Frusciante",
            instrumento:"Guitarrista",
            edad:"52 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/John_Frusciante_(52182823411).jpg?alt=media&token=0d76ab4c-722a-4098-9c5e-5bfa46d5b34a"
        },
        {
            nombre:"Chad Smith",
            instrumento:"Baterista",
            edad:"61",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/images%20(1).jpg?alt=media&token=17f17574-c893-43e8-82ca-fccb9d749ae7"
        }
     ]


    return(
       
        <div className="row row-cols-1 row-cols-md-4 g-0 mt-5">

            {
                Integrantes.map(function(Integrantes){
                    return(
                        <>
                            <div className="col mt-3 bg-dark p-5">
                                <div className="card h-100">
                                    <img src={Integrantes.fotografia} alt="foto" 
                                    className="img-fluid w-100 h-100"/>
                                    <h4 className="text-center">{Integrantes.nombre}</h4>
                                    <br/>
                                    <h5 className="text-center">Edad: {Integrantes.edad}</h5>
                                    <br/>
                                    <h5 className="text-center">Rol En La Banda: {Integrantes.instrumento}</h5>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </div>

    )
}