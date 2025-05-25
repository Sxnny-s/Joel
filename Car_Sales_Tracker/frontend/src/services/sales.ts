import axios from 'axios'
const baseURL = 'http://localhost:5000/api/data'


const Create = async (data : any) => {

    try {
        const res = await axios.post(`${baseURL}/addCarSale`, data, {
            withCredentials: true
        })
        return res.data
    } catch (error) {
        console.error('Error', error.message)
    }
    
}


const sales = { Create }

export default sales