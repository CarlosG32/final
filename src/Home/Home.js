import './Home.css'
import { Footer } from '../Footer/Footer.js'

export function Home(){

    return(
        <>
            <img src="https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/62e1a205d6bd1.png?alt=media&token=25270697-6483-42c7-b820-90a6f2a04778" alt="banner" className="w-100 img-fluid" />
            

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>RED HOT CHILI PEPPERS</h1>
                        <p>
                        Red Hot Chili Peppers es una banda de rock estadounidense formada en 1983 en Los Ángeles, California. Sus integrantes son el vocalista Anthony Kiedis, el guitarrista John Frusciante, el bajista Flea y el baterista Chad Smith. El estilo musical de la banda fusiona el funk tradicional con el rock y el rock alternativo incluyendo elementos de otros géneros como el rap, pop rock, heavy metal, dance, punk, hip hop e indie rock.​ Aunque en algunos sitios son considerados los inventores del punk funk.
                        </p>
                        <hr/>
                    </div>
                </div>

                    <div className="row">
                        <div className="col-12 col-md-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/1667381430_649594_1667381603_noticia_normal_amp.jpg?alt=media&token=e09d9c4c-c834-4fa9-bf03-2c1f7590b133" className="img-fluid" alt="w-100 img-fluid" />
                        </div>
                        <div className="col-12 col-md-4 aling-self-center">
                            <p>
                            Que este año es uno de los mejores en la historia reciente de Red Hot Chili Peppers no se le escapa a nadie. La banda californiana ha vuelto a la actualidad después de anunciar el regreso del guitarrista John Frusciante, han anunciado una nueva gira y han lanzado dos álbumes completamente nuevos, Unlimited Love y Return of a Dream Canteen. Los chicos de Anthony Kiedis tienen muchas ganas de tocar delante de sus fans, y cada vez que salen al escenario, sorprenden con algo nuevo.

                            En uno de sus últimos conciertos, en beneficio del Conservatorio de Música de Silverlake, han desplegado todo su talento para versionar una de las grandes canciones de la historia. Se trata de Smells Like Teen Spirit, el clásico de Nirvana publicado en 1991 que es una de las piedras angulares del grunge.

                            Los Chili Peppers siempre han mostrado su admiración hacia la banda de Kurt Cobain, y no olvidan aquella vez en la que salieron de gira con ellos en 1991. "Recuerdo haberme sentido como, ya sabes, hay buenas bandas, pero Nirvana llevaba una magia muy pesada con ellos, era una sensación de que eran una entidad muy poderosa que debía ser respetada", dijo Flea en una reciente entrevista con The Howard Stern Show.

                            Hay que recordar que no es la primera vez que hemos escuchado a Red Hot Chili Peppers tocando esta canción, pues en 2006, durante un concierto en Toronto, John y Chad se atrevieron a hacer una cover de la misma. Además, Frusciante, durante su época en solitario a finales de los 90, también ha interpretado los acordes del tema de Nirvana.
                            </p>
                        </div>
                    </div>

            </div>
        </section>
        <Footer></Footer>
        </>
    )

}