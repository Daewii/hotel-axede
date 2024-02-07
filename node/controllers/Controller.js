import HotelesModel from "../models/Model.js";

//metodos del crud

//mostrar todos los hoteles

export const getAllHoteles = async (req, res) => {
    try {
        const hoteles = await HotelesModel.findAll()
        res.json(hoteles)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//mostrar un hotel

export const getHotel = async (req, res) => {
    try {
        const hotel = await HotelesModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(hotel[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}