import {getData} from "@/app/actions/actions";
import DeleteButton from "@/app/components/deleteButton";
import Link from "next/link";

const Page  =async ()=>{
    const data=await getData()
    return(
        <div className='p-8'>
            <div className="grid grid-cols-4 gap-4">

                {
                    data.map((item)=>{
                        return(
                            <div
                                key={item.id}
                                className="rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{item.title}</div>
                                    <p className="text-gray-700 text-base">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                <span
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item.tag}</span>

                                </div>
                                <div className='px-6 py-3 flex gap-4'>
                                    <DeleteButton id={item.id} />
                                    <Link
                                        href={`/update?q=${item.id}`}
                                        className="shadow bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                        type="button">
                                        Güncelle
                                    </Link>
                                </div>
                            </div>

                        )
                    })
                }


            </div>
    </div>
    )
}
export default Page
