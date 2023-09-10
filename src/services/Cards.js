import axios from "axios";

const getCard = async () => {
    try {
        const response = await axios.get("https://api.scryfall.com/cards/random");
        return response.data;
    } catch (error) {
        if(error.response.status === 404){
            throw new Error("No se encontro Pokemon")
        }
        if(error.response.status === 500){
            throw new Error("Erorr en el servidor intentar mas tarde")
        }
        if(error.response.status === 400){
            throw new Error("Erorr al enviar informacion recargar pagina")
        }
        throw new Error("Error inesperado recargar pagina")
    }
};
export {
    getCard
}