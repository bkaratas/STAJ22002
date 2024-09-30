'use client'

import {useEffect, useState} from "react";
import { getDataById,updateData} from "@/app/actions/actions";

const Page = (p) => {
    const [formData, setFormData] = useState<{ id: string, title: string, description: string, tag: string }>({
        id: '',
        tag: '',
        description: '',
        title: ''
    })
    const fetchData = async () => {
        const d = await getDataById(p.searchParams.q)
        if (d) {
            setFormData(d)
        }

    }
    const handleUpdate =async () => {
        await updateData(formData)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='flex items-center justify-center pt-8'>
            <div className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Başlık
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            name="title"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name" type="text"
                            onChange={(e) => {
                                setFormData({...formData, title: e.target.value.toString()})
                            }}
                            value={formData.title}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-password">
                            Açıklama
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            name="description"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-password" type="text" placeholder=""
                            onChange={(e) => {
                                setFormData({...formData, description: e.target.value.toString()})
                            }}
                            value={formData.description}/>
                    </div>

                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-password">
                            Etiket
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            name='tag'
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-password" type="text" onChange={(e) => {
                            setFormData({...formData, tag: e.target.value.toString()})
                        }}
                            value={formData.tag}/>
                    </div>

                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button
                            onClick={handleUpdate}
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button">
                            Güncelle
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Page
