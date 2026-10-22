import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//asynchronus action
export const getAllproducts=createAsyncThunk("products/getAllproducts",async()=>{
      const result = await axios.get("https://dummyjson.com/products")
      console.log(result);
      return result.data.products
      
})
const productSlice =createSlice({
      name:"products",
      initialState:{
            loading:true,
            allproducts:[],
            dummyAllproducts:[],
            error:""
      },
      reducers:{
            //
            serachProduct:(state,action)=>{
                  state.allproducts=state. dummyAllproducts.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
            }

      },
      extraReducers:(builder)=>{

            builder.addCase(getAllproducts.fulfilled,(state,action)=>{
                  state.allproducts=action.payload
                   state.dummyAllproducts=action.payload
                  state.loading=false
                  state.error=""
            })

            builder.addCase(getAllproducts.pending,(state,action)=>{
                  state.allproducts=[]
                  state.dummyAllproducts=[]
                  state.loading=true
                  state.error=""
            })

             builder.addCase(getAllproducts.rejected,(state,action)=>{
                  state.allproducts=[]
                  state.loading=false
                   state.dummyAllproducts=[]
                  state.error="API CALL FAILED "
            })
      }

})

export default productSlice.reducer
export const {serachProduct}=productSlice.actions