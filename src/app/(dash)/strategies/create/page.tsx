"use client";
import Button from "@/app/components/button";
import CircleIcon from "@/app/components/circleIcon";
import ToogleCheckbox from "@/app/components/toogleCheckbox";
import { useState } from "react";

export default function CreateStrategies(){

    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <form>
                <div className="flex flex-row gap-4 items-center ml-8">
                    <CircleIcon icon="rocket" />
                    <h1 className="text-lg text-textPrimary">Editar / Criar Estratégias </h1>
                </div>
                <div className="box-general" >
                    <div className="flex flex-col md:flex-row w-full justify-between gap-12 items-center ">
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Nome da Estratégia:</label>
                            <input type="text" className="input-text-new w-full" placeholder="Nome da Estratégia" />
                        </div>
                        <div className="md:mt-12">       
                            <ToogleCheckbox title='Ativa?' checked={true} function={undefined} />
                        </div>
                        </div>
                        <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">
                            <div className="input-group mt-4 w-full">
                                <label className=" input-label-new">Nome da Sala:</label>
                                <input type="text" className="input-text-new w-full" placeholder="Nome da Sala" />
                            </div>
                            <div className="input-group mt-4 w-full">
                                <label className=" input-label-new">Jogo:</label>
                                <input type="text" className="input-text-new w-full" placeholder="Jogo" />
                            </div>
                        </div>
                
                
                    <div className="flex flex-row gap-4 items-center mt-8">
                        <CircleIcon icon="rocket" />
                        <h1 className="text-lg text-textPrimary">Padroes de Análise</h1>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-between gap-2 ">
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Green</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Confirmação</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Analisando</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 3</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 4</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 5</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-between gap-2 ">
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 6</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 7</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 8</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 9</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 10</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 11</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-between gap-2 ">
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 12</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 13</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 14</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 15</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 16</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 17</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-between gap-2 ">
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 18</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 19</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 20</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 21</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 22</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Posição 23</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Dúzia 1/2</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full gap-2 items-center ">
                        <div className=" mt-8 w-full rounded-2xl font-abeezee flex flex-col md:flex-row justify-end">

                            <Button pattern={1} fullWidth className="h-10 float-right rounded-md text-sm px-6 flex flex-row gap-x-4 items-center">
                                <i className="fa-brands fa-telegram text-textPrimary" /><h1 className="text-sm">Salvar alteraçoes</h1>
                            </Button>
                        </div>
                        
                    </div>
                </div>
            </form>
        </div>
    )
}