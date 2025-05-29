    import axios from 'axios'
    const localURL = 'http://localhost:5000'
    const BASE_URL = 'https://car-api-0bgx.onrender.com'
    


const Create = async (data: any, token: any) => {
    
    const url = `${BASE_URL}/api/data/addCarSale`

    try {
        const res = await axios.post(`${url}`, data, {
          headers: {
          Authorization: `Bearer ${token}`,
          },
        })
        
        return res.data
    } catch (error) {
        console.error('Error', error.message)
    }
    
}


const sales = { Create }

export default sales