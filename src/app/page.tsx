"use client"
import axios from "axios"
import { use, useState } from "react"
import { ProductType } from "../../types/commonTypes"
export default function API(){
    const [items,setItems]=useState([])
    const products =async ()=>{
        try {
           const Data =  await axios.get("https://fakestoreapi.com/products")
           console.log("Data from anothers api",Data)
           setItems(Data.data)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="bg-white container  px-2 py-4">
            Shopping Mall
            <button className="bg-red-300 rounded-lg border-2 text-xl" onClick={products}>Get API Product</button>
            <div className="bg-white container  px-2 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {items.map((product:ProductType) => (
          <div key={product.id} className="border-2 rounded-sm text-xl p-2 text-black border-b-slate-100 border-grey">
            <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-2" />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
            
        </div>
    )
}