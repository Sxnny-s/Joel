import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserSalesData = createAsyncThunk('/sales/DataById/' , async (id) => {
    
    const res = await fetch(`http://localhost:5000/api/data/salesData/${id}`,{
        credentials: 'include'}
    )

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