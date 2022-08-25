const AxiosInstance = require("../axios/axiosInstance");

describe('Endpoint filterByCode', () => {
    test('Probando la peticion AxiosInstance', async () => {

        const {data} = await AxiosInstance.get(`${2}`);

        expect(data.data.contactName).toEqual("Mauricio Serna Florez");
    })
});