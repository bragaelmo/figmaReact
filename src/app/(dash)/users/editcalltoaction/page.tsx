"use client";
import Button from "@/app/components/button";
import CircleIcon from "@/app/components/circleIcon";
import { useState } from "react";

export default function  EditCalltoAction(){

    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <form>
                <div className="flex flex-row gap-4 items-center">
                    <CircleIcon icon="rocket" />
                    <h1 className="text-lg text-textPrimary">Criar / Editar Usuário</h1>
                </div>
                <div className="box-general" >
                <label>Altere os nomes, links e icones que aparecem no botão na home.</label>
                    <div className="flex flex-col md:flex-row gap-16">
                    <div className="box-general" >
                        <div className="input-group mt-4 w-full">
                            <Button pattern={2} className='h-14' >Comprar mais<i className='fa-solid fa-cart-plus ml-4' /></Button>
                            <br></br>
                            <label className=" input-label-new">Texto:</label>
                            <input type="text" className="input-text-new w-full" placeholder="Comprar Mais" />
                            <label className=" input-label-new">Link:</label>
                            <input type="text" className="input-text-new w-full" placeholder="https://www.google.com" />
                            <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">                                
                                <div className="items-center">                                
                                    <label className=" input-label-new">Ícone:</label>
                                    <input type="text" className="input-text-new" placeholder="🛒"/>  
                                </div>                          
                                <div className="flex flex-row gap-2 items-center">
                                    <label className="input-label h-2">Botão Ativo?</label>
                                    <label className="relative inline-flex items-center mr-5 cursor-pointer mt-4">
                                    <input type="checkbox" value="" className="sr-only peer"/>
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4  dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#077E71]"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-general" >
                        <div className="input-group mt-4 w-full">
                            <Button pattern={2} className='h-14' >Vídeo Aulas<i className='fa-solid fa-bolt ml-4' /></Button>
                            <br></br>
                            <label className=" input-label-new">Texto:</label>
                            <input type="text" className="input-text-new w-full" placeholder="Vídeo Aulas" />
                            <label className=" input-label-new">Link:</label>
                            <input type="text" className="input-text-new w-full" placeholder="https://www.google.com" />
                            <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">                                
                                <div className="items-center">                                
                                    <label className=" input-label-new">Ícone:</label>
                                    <input type="text" className="input-text-new" placeholder="⚡"/>  
                                </div>                          
                                <div className="flex flex-row gap-2 items-center">
                                    <label className="input-label h-2">Botão Ativo?</label>
                                    <label className="relative inline-flex items-center mr-5 cursor-pointer mt-4">
                                    <input type="checkbox" value="" className="sr-only peer"/>
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4  dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#077E71]"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                  
                <div className="w-5/12 float-right flex justify-end pr-2">
                    <Button pattern={1} className="float-right rounded-md text-sm font-light w-40">Salvar alteraçoes</Button>
                </div>
            </form>
        </div>
    )
}