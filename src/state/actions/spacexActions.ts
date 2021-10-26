import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { Spacex } from '../../components/spacex/table/typeInterface/TableInterface';
import axios from 'axios';
import moment from "moment";
export const getItems = createAsyncThunk<Spacex[]|any>('showspacex', async (_, thunkAPI) => {
   
    let url = `https://api.spacexdata.com/v3/launches`;
    const response = await axios.get(url)
    return response.data

})
