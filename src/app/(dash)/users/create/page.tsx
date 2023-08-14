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
                            <input
                            id="user-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor="user-checkbox"
                                className="input-label-new"
                            >
                                Usuário Ativo
                            </label>
                            <Button pattern={1} className="flex flex-row items-center text-sm justify-between px-12 rounded-xl mt-4 float-right">
                            <i className="fa-brands fa-telegram text-textPrimary" /><h1>Verificar canal</h1>
                            </Button>
                        </div>
                    </div>
                    <label className="input-label-new">Nome do canal:   (não editar, ele irá puxar do telegram)</label>
                    <input type="text" className="w-full input-text-new h-12 " placeholder="Digite o nome do canal" disabled />
                    <div className="flex items-center mr-4">
                    <input
                        id="green-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="green-checkbox"
                        className="input-label-new"
                    >
                        Permitir que o usuário edite e/ou crie sua própria estratégia?
                    </label>
                    </div>
                    <div className="flex items-center mr-4">
                    <input
                        id="green-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="green-checkbox"
                        className="input-label-new"
                    >
                        Permitir que o usuário crie novas salas?
                    </label>
                    </div> 
                </div>
            </form>
        </div>
    )
}