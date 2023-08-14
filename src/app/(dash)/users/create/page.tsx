"use client";
import Button from "@/app/components/button";
import CircleIcon from "@/app/components/circleIcon";
import { useState } from "react";

export default function  CreateUser(){

    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <form>
                <div className="flex flex-row gap-4 items-center">
                    <CircleIcon icon="rocket" />
                    <h1 className="text-lg text-textPrimary">Criar / Editar Usuário</h1>
                </div>
                <div className="box-general" >
                    <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Nome e Sobrenome</label>
                            <input type="text" className="input-text-new w-full" placeholder="Nome e Sobrenome" />
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">E-mail:</label>
                            <input type="text" className="input-text-new w-full" placeholder="E-mail" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">
                        <div className="input-group mt-4 w-full">
                            <label className="input-label-new">Nível de Usuário</label>
                            <input type="text" className="input-text-new w-full" placeholder="Nível" />
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className="input-label-new">Créditos</label>
                            <input type="text" className="input-text-new w-full" placeholder="Créditos" />
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className="input-label-new">Senha</label>
                            <input type="text" className="input-text-new w-full" placeholder="Senha" />
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className="input-label h-2">Usuário Ativo?</label>
                            <label className="relative inline-flex items-center mr-5 cursor-pointer mt-4">
                                <input type="checkbox" value="" className="sr-only peer"/>
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4  dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#077E71]"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                            </label>
                        </div>
                        
                    </div>
                        <Button pattern={1} className="flex flex-row items-center  rounded-2xl justify-between px-12 rounded-xl mt-4 float-right">
                        <i className="fa-brands fa-telegram text-textPrimary" /><h1>Verificar canal</h1>
                        </Button>
                    <label className="input-label-new">Nome do canal:   (não editar, ele irá puxar do telegram)</label>
                    <input type="text" className="w-full input-text-new h-12 " placeholder="Digite o nome do canal" disabled />
                    <div className="flex items-center mr-4">      
                        <label className="relative inline-flex items-center mr-5 cursor-pointer mt-4">
                            <input type="checkbox" value="" className="sr-only peer"/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#077E71]"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                        </label>
                        <label className="input-label h-2">Permitir que o usuário edite e/ou crie sua própria estratégia?</label>
                    </div>
                    <div className="flex items-center mr-4">            
                        <label className="relative inline-flex items-center mr-5 cursor-pointer mt-4">
                            <input type="checkbox" value="" className="sr-only peer"/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#077E71]"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                        </label>
                        <label className="input-label h-2"> Permitir que o usuário crie novas salas?</label>
                    </div> 
                </div>
            </form>
        </div>
    )
}