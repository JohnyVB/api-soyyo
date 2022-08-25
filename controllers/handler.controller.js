const { request, response } = require('express');
const AxiosInstance = require('../axios/axiosInstance');

const filterByCode = async (req = request, res = response) => {

    try {

        const { startId, endId } = req.body;

        if (startId > endId) {
            return res.status(404).send({
                msg: 'Error en validación datos de entrada'
            });
        }

        let dataResponse = [];

        for (let i = Number(startId); i <= Number(endId); i++) {
            const { data } = await AxiosInstance.get(`/${i}`);
            if (data.data) {
                dataResponse.push(data.data);
            }
        }

        const orderByName = (a, b) => {
            if (a.contactName > b.contactName) {
                return 1;
            }
            if (a.contactName < b.contactName) {
                return -1;
            }

            return 0;
        }

        return res.status(200).send({
            rango: `${startId} - ${endId}`,
            data: dataResponse.sort(orderByName)
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
