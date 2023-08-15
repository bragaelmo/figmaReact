'use client';
import ToogleCheckbox from '@/app/components/toogleCheckbox';
import Button from '@/app/components/button'
import CircleIcon from "@/app/components/circleIcon";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
const modules = { 
    toolbar: [
        [{header: [1,2,3,4,5,6,false]}],
   [{font:[]}],
   [{size:[]}],
   ['bold', 'italic', 'underline','strike', 'blockquote'],
   [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ],
};
export default function CreateNews() {

    const [value, setValue] = useState("")

    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <div className="flex flex-row gap-4 items-center ">
                <CircleIcon icon="rocket" />
                <h1 className="text-lg text-textPrimary">Adicionar notícia</h1>
            </div>
            <div className="box-general" >
                <div className='flex flex-col lg:flex-row bg-gradientBox items-center justify-between'>
                    <div className=" w-full md:w-80 rounded-2xl text-textPrimary  font-abeezee flex flex-col lg:flex-row" >
                        <div className="input-group mt-2 lg:mt-0 lg:mr-2 flex-grow">
                            <label className="text-textPrimary ml-4">Título</label>

                            <div className="relative flex items-center ">
                                <i className="fa-solid fa-pen w-5 h-1 absolute ml-3 fill-transparent" />
                                <input type="text" className="input-text-new mt-1 w-full lg:w-96 h-8" placeholder="Título" />
                            </div>
                        </div>
                    </div>
                    <ToogleCheckbox title='Noticia ativa ?' checked={true} function={undefined} />
                </div>
                <div className=" w-full mt-8 rounded-2xl text-textPrimary font-abeezee flex flex-col lg:flex-row" >
                    <div className="input-group mt-8 lg:mt-0 lg:mr-2 flex-grow">
                        <ReactQuill className="md:h-80" theme="snow" value={value} onChange={(e) => setValue(e)} modules={modules} />
                    </div>
                </div>
                <div className=" mt-16 w-full rounded-2xl font-abeezee flex flex-col md:flex-row justify-end">
                    <Button fullWidth pattern={1} className="h-10 float-right rounded-md text-sm px-6 flex flex-row gap-x-4 items-center"> <i className="fa-brands fa-telegram text-textPrimary flex justify-content align-items" /><h1 className='text-textPrimary text-sm'>Cadastrar Notícia</h1></Button>
                </div>

            </div>
        </div>                       
    )
}