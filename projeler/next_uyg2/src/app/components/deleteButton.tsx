'use client'
import {deleteData} from "@/app/actions/actions";

interface Props{
    id:string
}
const DeleteButton=(p:Props)=>{
    const handleDelete=async ()=>{
            console.log(p.id)
       await deleteData(p.id)
    }
    return(
        <button
            className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button" onClick={handleDelete}>
            Sil
        </button>
    )
}
export default DeleteButton
