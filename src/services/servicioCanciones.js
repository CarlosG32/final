export async function servicioCanciones(){

    const URI="https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5/top-tracks?market=US"
    const TOKEN="Bearer BQBXLQAvWb5hGzf3buG2ARg_07dftTXFU0dqGzwe_rwyoR-euuENJuINReQoOr29_P6zzI_xlfQqsMTgygLnfufx9i-Ls8rUieFvZP30V6P2JkFmsx7q4R--tt4OH8sx9ghgDbGm93xwaPhS87WVd5dJ1tb1Kd3LZoyLNwiJAbELxERe7cz0RNof9KP-PmFfu9oF_d0"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let canciones=await respuesta.json()

    return canciones

}