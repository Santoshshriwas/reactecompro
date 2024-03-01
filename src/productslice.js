import { createSlice } from "@reduxjs/toolkit";
  
  const initialState={
    cart:[],
  }
const productSlice = createSlice({
  name:"addtocart",
  initialState:initialState,
  reducers:{
     addData:(state , action)=>{
        var myitem=state.cart.filter((key)=>key.id===action.payload.id);
        if(myitem.length>=1)
        {
          alert("This Product Aleready Added!");
        }
        else
        {
          state.cart.push(action.payload);
        }
     },
     proQtyInc:(state,action)=>{
      for (var i=0; i<state.cart.length; i++)
      {
        if(state.cart[i].id===action.payload)
        {
          state.cart[i].quantity++;
        }
      }
     },
     proQtyDec:(state,action)=>{
      for (var i=0; i<state.cart.length; i++)
      {
        if(state.cart[i].id===action.payload)
        {
          if(state.cart[i].quantity>1)
          {
            state.cart[i].quantity--;
          }
         else{
          alert("Your Product Qua. Atlest 1");
         }
        }
      }
     },
     cartproductRemove:(state ,action)=>{
     state.cart =  state.cart.filter(item=>item.id!==action.payload);
     }
  }
})

export const {addData,proQtyInc,proQtyDec,cartproductRemove}= productSlice.actions;
export default productSlice.reducer;