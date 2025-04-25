import {TODOS} from "../constantes/constantes.js";
import {Router} from "express";

const routerTODOS = Router();

routerTODOS.get('/todos', async (req, res) => {
    res.status(200).json(TODOS);
})

routerTODOS.get('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const resultadoBusqueda = TODOS.filter( x => x.id == id);

    if(resultadoBusqueda.length > 0){
        res.status(200).json(resultadoBusqueda[0]);
    }else {
        res.status(404).json({
            mensaje: `No se encontro producto con id ${id}`
        });
    }

})

export default routerTODOS;
