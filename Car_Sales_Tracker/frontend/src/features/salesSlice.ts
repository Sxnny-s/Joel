import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const fetchUserSalesData = createAsyncThunk('/sales/DataById/' , async ({ id, token }) => {

    

    const localURL = 'http://localhost:5000'
    const BASE_URL = 'https://car-api-0bgx.onrender.com'
    
    const res = await fetch(`${BASE_URL}/api/data/salesData/${id}`,{
       headers: {
       Authorization: `Bearer ${token}`,
    },
    })

    const data = await res.json()

    return data

})


const salesSlice = createSlice({

    name: 'sales',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserSalesData.pending , (state ) => {
                state.status = 'pending';
            })
            .addCase(fetchUserSalesData.fulfilled, (state, action) => {
                state.status = 'success'
                state.data = action.payload
            })
            .addCase(fetchUserSalesData.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.error.message
            } )
    }

})

export { fetchUserSalesData }
export default salesSlice.reducer