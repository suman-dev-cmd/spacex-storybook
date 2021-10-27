import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import { DataProp } from '../../components/table/tbody/Tbody';
import { TableHeadProps, Spacex } from '../../components/spacex/table/typeInterface/TableInterface';
import { getItems } from '../actions/spacexActions';
export interface ShowSpacex {
    item: Spacex[];
    isLoading: boolean,
    singleItem:any,
    modal:boolean,
    errorMessage: string,
    statusd:string,
    start:string,
    end:string,
    catData:DataProp[],
    tableHead:TableHeadProps
}
const data: DataProp[] = [
    {
      name: 'Mittens',
      color: 'black',
      age: 2
    },
    {
      name: 'Mons',
      color: 'grey',
      age: 2,
    },
    {
      name: 'Luna',
      color: 'black',
      age: 2  
    },
    {
      name: 'Bella',
      color: 'grey',
      age: 1
    },
    {
      name: 'Oliver',
      color: 'orange',
      age: 1
    }
  ]
const tableHead:TableHeadProps = {
    backgroundColor:'white',
    columns:[
        {
            key: 'flight_number',
            header: 'No.',
            width: 35
          },
          {
            key: 'launch_date_utc',
            header: 'Launched(UTC)',
            width: 170
          },
          {
            key: 'launch_site',
            header: 'Location',
            width:120
          },
          {
            key: 'mission_name',
            header: 'Mission'
          },
          {
            key: 'orbit',
            header: 'Orbit'
          },
          {
            key: 'launch_success',
            header: 'Launch Status',
            width:150
          },
          {
            key: 'rocket_name',
            header: 'Rocket'
          }
    ]
}
const initialState: ShowSpacex = {
    item: [],
    singleItem: {},
    modal:false,
    isLoading: true,
    errorMessage: '',
    statusd:'all',
    start:'',
    end:'',
    catData:data,
    tableHead:tableHead
};


const spaceSlice = createSlice({
    name: 'spacex',
    initialState: initialState,
    reducers: {
        getModalFalse:(state)=>{
            state.modal = false;
            state.singleItem = {};
        },
        changeStatus:(state,action)=>{
            state.statusd = action.payload
        },
        onSelect:(state,action)=>{
            if(action.payload.value != null){
                state.start= moment(action.payload.value[0]).format("YYYY-MM-DD");
                state.end = moment(action.payload.value[1]).format("YYYY-MM-DD");
              }else{
                state.start= '';
                state.end = '';
              }
       
        }
    },
    
    extraReducers: 
    function (builder) {
        builder.addCase(getItems.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getItems.fulfilled, (state, action: PayloadAction<Spacex[]|any>) => {
            state.isLoading= false;
            state.item = action.payload
            state.errorMessage = '';
        });
        builder.addCase(getItems.rejected, (state, action) => {
            state.isLoading = false;
            state.item = [];
            let msg = action.error.message;
            if(action.error.message === 'Rejected'){
                msg = 'Not Found Launches'
            }
            state.errorMessage = msg || "";
        });
      
    }
});

export const {getModalFalse,changeStatus,onSelect} = spaceSlice.actions;
export default spaceSlice.reducer;