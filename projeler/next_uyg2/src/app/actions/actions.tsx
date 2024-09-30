'use server'
import {redirect} from "next/navigation";

let data:Array<{id:string,title:string,description:string,tag:string}>=[
    {
        id:"id1",
        title:"Başlık 1",
        description:"Açıklamalar",
        tag:"uzay"
    },
    {
        id:"id2",
        title:"Başlık 2",
        description:"Açıklamalar 2",
        tag:"yazılım"
    }
]

export async  function deleteData(id:string){
    const filteredData=data.filter((item)=>item.id!==id)
    data=[...filteredData]
    redirect('/')

}
export async  function getData(){
    console.log('getData',data)
    return data
}

export async  function updateData(item:{id:string,title:string,description:string,tag:string}){
    const dataCopy=data
    const findIndex=dataCopy.findIndex((dataIten)=>item.id===dataIten.id)
    if(findIndex>-1){
        dataCopy[findIndex].tag=item.tag
        dataCopy[findIndex].title=item.title
        dataCopy[findIndex].description=item.description
        data.push(dataCopy[findIndex])
        redirect('/')
    }
}

export async  function getDataById(id:string){
    const findedData= data.find((item)=>item.id===id)
    return findedData
}

export async  function  createData(formData:FormData){
    const title=formData.get('title')
    const description=formData.get('description')
    const tag=formData.get('tag')
    data.push({
        id:Math.random().toString(36),
        title:title.toString(),
        description:description.toString(),
        tag:tag.toString()
    })
    redirect('/')
}
