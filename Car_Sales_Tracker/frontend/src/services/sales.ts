import axios from 'axios'
import { useAuth } from '@clerk/clerk-react'

const BASE_URL = 'https://car-api-0bgx.onrender.com'

export const useSalesAPI = () => {
  const { getToken } = useAuth()

  const Create = async (data: any) => {
    const url = `${BASE_URL}/api/data/addCarSale`
    const token = await getToken()

    try {
      const res = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      return res.data
    } catch (error: any) {
      console.error('Error creating sale:', error.message)
    }
  }

  return { Create }
  
}
