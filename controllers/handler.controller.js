const { request, response } = require('express');

const filterByCode = async (req = request, res = response) => {

    try {

        const { startCode, endCode } = req.body;




        
        res.status(200).send({
            msg: 'Prueba exitosa',
            startCode,
            endCode
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}

module.exports = {
    filterByCode
}
