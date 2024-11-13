import { createSlice } from "@reduxjs/toolkit";

const KhataBookSlice=createSlice({
   
    name :"khatabook",
    initialState: {
        AllTransaction:[{id:1,text:"salary",amount:10000}],
        edit:{Transaction :{},isedit:false}
    },
    reducers :{
        add:( state , action)=>{
            return{
              ...state,
            AllTransaction  :[action.payload , ...state.AllTransaction]
            }
         },
         remove:(state ,action)=>{
          return{
            ...state,
            AllTransaction: state.AllTransaction.filter((item)=> item.id !== action.payload)
          }
         },
         edit:(state ,action)=>{
            return{
                ...state,
                edit:{Transaction :action.payload ,isedit:true}
            }

         },
         update:(state ,action)=>{
            return{
                ...state,
                AllTransaction: state.AllTransaction.map((items)=> items.id === action.payload.id ? action.payload : items),
                edit:{Transaction :{},isedit:false}
            }
         }
  
    }
})


export const {add ,remove ,edit ,update }=KhataBookSlice.actions
export default KhataBookSlice.reducer



