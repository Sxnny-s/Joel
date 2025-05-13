import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserSalesData = createAsyncThunk('/sales/Data/:id' , async () => {

    const res = await fetch('')
})