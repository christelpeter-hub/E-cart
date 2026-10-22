import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({
      name:"cart",
      initialState:[],
      reducers:{
      //add to cart
      addTocart:(state,action)=>{
            const existingItem=state?.find(item=>item.id==action.payload.id)
            if(existingItem){
                  existingItem.quantity += 1
                  existingItem.totalprice=existingItem.quantity*existingItem.price
                  const remainingItems=state?.filter(item=>item.id!=existingItem.id)
                  state=[...remainingItems,existingItem]
            }else{
                  state.push({...action.payload,quantity:1,totalprice:action.payload.price})
            }
      },
      //remove from cart
      removeCart:(state,action)=>{
            return state=state.filter(item=>item.id!=action.payload)
      },
      //incremnet
      incrementcart:(state,action)=>{
            const existingItem=state?.find(item=>item.id==action.payload)
            const remainingItems=state?.filter(item=>item.id!=action.payload)
                  existingItem.quantity += 1
                  existingItem.totalprice=existingItem.quantity*existingItem.price
                  state=[...remainingItems,existingItem]
            },
      //decrement
       decrementcart:(state,action)=>{
            const existingItem=state?.find(item=>item.id==action.payload)
            const remainingItems=state?.filter(item=>item.id!=action.payload)
                  existingItem.quantity -= 1
                  existingItem.totalprice=existingItem.quantity*existingItem.price
                  state=[...remainingItems,existingItem]
            },
      //empty
      emptyCart:(state)=>{
            return[]
      }
      }
})
export const {addTocart,removeCart,incrementcart,decrementcart,emptyCart}=cartSlice.actions
export default cartSlice.reducer