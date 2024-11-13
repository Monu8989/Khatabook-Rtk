import { configureStore } from "@reduxjs/toolkit"
import KhataBookreducer from "./slice"

const store= configureStore({
reducer :{
    Khatabook:KhataBookreducer
}
})

export default store