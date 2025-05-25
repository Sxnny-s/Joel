import axios from 'axios'
    const localURL = 'http://localhost:5000'
    const BASE_URL = 'https://car-api-0bgx.onrender.com'


const Create = async (data : any) => {

    try {
        const res = await axios.post(`${BASE_URL}/addCarSale`, data, {
            withCredentials: true
        })
        return res.data
    } catch (error) {
        console.error('Error', error.message)
    }
    
}


const sales = { Create }

export default sales