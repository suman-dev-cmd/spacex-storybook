import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import { DataProp } from '../../components/table/tbody/Tbody';
export interface Spacex {
    flight_number: number|undefined;
    launch_date_utc: Date;
    mission_name: string;
    rocket: any;
    upcoming:boolean;
    launch_success:boolean;
    launch_site?:{
        site_name:string,
        // [key:string]:unknown|{[key:string]:unknown},
    }
}
export interface ShowSpacex {
    item: Spacex[];
    isLoading: boolean,
    singleItem:any,
    modal:boolean,
    errorMessage: string,
    statusd:string,
    start:string,
    end:string,
    catData:DataProp[]
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
const initialState: ShowSpacex = {
    item: [],
    singleItem: {},
    modal:false,
    isLoading: true,
    errorMessage: '',
    statusd:'all',
    start:'',
    end:'',
    catData:data
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
    

});

export const {getModalFalse,changeStatus,onSelect} = spaceSlice.actions;
export default spaceSlice.reducer;