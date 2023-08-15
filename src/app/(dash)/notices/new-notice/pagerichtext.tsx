'use client'
import InitialBanner  from '../../../../../public/assets/img/initial-banner.svg'
import Image from 'next/image'
import Button from '../../../components/button'
import Box from '../../../components/box'
import SemiCircleProgressBar from '../../../components/semiCircleProgressBar';
import NoticeCard from '../../../components/noticeCard';
import CircleIcon from "../../../components/circleIcon";
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
 
const modules = { 
    toolbar: [
        [{header: [1,2,3,4,5,6,false]}],
   [{font:[]}],
   [{size:[]}],
   ['bold', 'italic', 'underline','strike', 'blockquote'],
   [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ],
};

export default function CreateRoom(){

    const [value, setValue] = useState('');

    return (
        <div className="overflow-hidden relative h-screen bg-backgroundPrimary">
                <div className="p-8 w-full rounded-2xl text-textPrimary bg-gradientBox font-raleway flex flex-col" >
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row gap-4 items-center'>
                        <CircleIcon icon="rocket" />
                            <h1 className="text-textPrimary text-3xl font-bold ">Adicionar Notícia </h1>
                        </div>
                    </div>
                </div>
                
                <div className='container bg-gradientBox'>
                    <div className='flex flex-col lg:flex-row bg-gradientBox'>
                        <div className="ml-8 p-8 w-full md:w-80 rounded-2xl text-textPrimary  font-raleway flex flex-col lg:flex-row" >
                            <div className="input-group mt-2 lg:mt-0 lg:mr-2 flex-grow">
                                <label className="text-textPrimary ml-4">Título</label>

                                <div className="relative flex items-center ">
                                    <i className="fa-solid fa-pen w-5 h-1 absolute ml-3 fill-transparent"/>
                                    <input type="text" className="input-text-new mt-1 w-full lg:w-96" placeholder="Título"/>
                                </div>

                            </div>                    
                        </div>
                        <div className="flex flex-row ml-96 gap-4 items-center">
                                <label className="input-label h-2">Notícia Ativa?</label>
                                <label className="relative inline-flex items-center mr-5 cursor-pointer mt-4">
                                    <input type="checkbox" value="" className="sr-only peer"/>
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#077E71]"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                </label>
                               
                        </div>  
                    </div>
                
                   

                    <div className="flex flex-col lg:flex-row bg-gradientBox" >
                        <div className="ml-8 p-8 w-full  md:w-130 rounded-2xl text-textPrimary  font-raleway flex flex-col lg:flex-row" >
                            <div className="input-group mt-2 lg:mt-0 lg:mr-2 flex-grow">
                                <ReactQuill className="md:h-80" theme="snow" value={value} onChange={() => setValue(e.target.value)} modules={modules} />;
                            </div>
                         </div>

                    </div>
                        <div className="ml-8 p-82 w-full md:w-802 rounded-2xl font-raleway flex flex-col md:flex-row justify-center">
                            <Button fullWidth pattern={1} className="h-10 mt-8 w-80"> <i className="fa-brands fa-telegram text-textPrimary flex justify-content align-items w-10" />Cadastrar Notícia</Button>
                        </div>
                        
                </div>
                    
                
            </div>
            
            

    )
}