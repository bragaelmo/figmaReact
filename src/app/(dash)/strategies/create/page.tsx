"use client";
import Button from "@/app/components/button";
import CircleIcon from "@/app/components/circleIcon";
import { useState } from "react";

export default function CreateStrategies(){

    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <form>
                <div className="flex flex-row gap-4 items-center">
                    <CircleIcon icon="rocket" />
                    <h1 className="text-lg text-textPrimary">Editar / Criar Estratégias </h1>
                </div>
                <div className="box-general" >
                    <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Nome da Estratégia:</label>
                            <input type="text" className="input-text-new w-full" placeholder="Nome da Estratégia" />
                        </div>
                        <div className="input-group mt  ">       
                            <input
                            id="user-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="user-checkbox" className="input-label-new">Ativo</label>
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
                </div>
                
                <div className="flex flex-row gap-4 items-center">
                    <CircleIcon icon="rocket" />
                    <h1 className="text-lg text-textPrimary">Padroes de Análise</h1>
                </div>
                <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">
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
                <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">
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
                <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">
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
                <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">
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
                <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">
                    <div className="input-group mt-4 w-full">
                        <label className=" input-label-new">Posição 24</label>
                        <select className="w-full input-text-new">
                            <option value="Jogo 1">Dúzia 1/2</option>
                        </select>
                    </div>
                    <div className="input-group mt-4 w-full">
                        <label className=" input-label-new">Posição 25</label>
                        <select className="w-full input-text-new">
                            <option value="Jogo 1">Dúzia 1/2</option>
                        </select>
                    </div>
                    <div className="input-group mt-4 w-full">
                        <label className=" input-label-new">Posição 26</label>
                        <select className="w-full input-text-new">
                            <option value="Jogo 1">Dúzia 1/2</option>
                        </select>
                    </div>
                    <div className="input-group mt-4 w-full">
                        <label className=" input-label-new">Posição 27</label>
                        <select className="w-full input-text-new">
                            <option value="Jogo 1">Dúzia 1/2</option>
                        </select>
                    </div>
                    <div className="input-group mt-4 w-full">
        
                    </div>
                    <div className="input-group mt-4 w-full">
                    <br></br>
                    <Button pattern={1} className="float-right rounded-md text-sm font-light w-40">
                    <i className="fa-brands fa-telegram text-textPrimary" /><h1>Salvar alteraçoes</h1>
                   </Button>
                    
                    </div>
                </div>
            </form>
        </div>
    )
}