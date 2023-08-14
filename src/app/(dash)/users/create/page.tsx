"use client";
import Button from "@/app/components/button";
import CircleIcon from "@/app/components/circleIcon";
import ToogleCheckbox from "@/app/components/toogleCheckbox";
import { useState } from "react";

export default function  CreateUser(){

    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <form>
                <div className="flex flex-row gap-4 items-center ml-8">
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
                    
                        <div className="input-group py-12  w-full flex my-auto ">
                            <ToogleCheckbox title="Usuário ativo ?" checked={true} function={undefined} />
                        </div>
                        
                    </div>
                    <div className="flex items-center mr-4 mt-4">      
                        <ToogleCheckbox title="Permitir que o usuário edite e/ou crie sua própria estratégia?" checked={true} function={undefined} />
                    </div>
                    <div className="flex items-center mr-4 mt-4">            
                        <ToogleCheckbox title="Permitir que o usuário crie novas salas?" checked={true} function={undefined} />
                    </div> 
                </div>
            </form>
        </div>
    )
}