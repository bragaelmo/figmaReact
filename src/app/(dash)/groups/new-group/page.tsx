"use client";
import Button from "@/app/components/button";
import CircleIcon from "@/app/components/circleIcon";
import { useState } from "react";

export default function NewGroup(){

    const [selectedInterval, setSelectedInterval] = useState<"loss" | "win" | "all">("loss")
    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <form>
                <div className="flex flex-row gap-4 items-center">
                    <CircleIcon icon="rocket" />
                    <h1 className="text-lg text-textPrimary">Configuração da Sala de Sinais</h1>
                </div>
                <div className="box-general" >
                    
                        <div className="input-group mt-4">
                            <label className=" input-label-new">Selecione o jogo:</label>
                            <select className="w-full input-text-new">
                                <option value="Jogo 1">Jogo 1</option>
                            </select>
                        </div>
                        <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">
                            <div className="input-group mt-4 w-full">
                                <label className=" input-label-new">Qual id:</label>
                                <input type="text" className="input-text-new w-full" placeholder="Placeholder" />
                            </div>
                            <div className="input-group mt-4 w-full">
                                <label className=" input-label-new">Qual o token:</label>
                                <input type="text" className="input-text-new w-full" placeholder="Placeholder" />
                                <Button pattern={1} className="flex flex-row items-center text-sm justify-between px-12 rounded-xl mt-4 float-right">
                                    <i className="fa-brands fa-telegram text-textPrimary" /><h1>Verificar canal</h1>
                                </Button>
                            </div>
                        </div>
                        <input type="text" className="w-full input-text-new h-12 " placeholder="Digite o nome do canal" disabled />
                </div>
                
                <div className="flex flex-row gap-4 items-center">
                    <CircleIcon icon="rocket" />
                    <h1 className="text-lg text-textPrimary">Mensagens do Grupo</h1>
                    <div className="ml-8 flex flex-row gap-4 justify-center ">
                        <Button pattern={1} className="flex flex-row items-center text-xs justify-between px-4 rounded-md float-right w-fit bg-[#435474]">
                        <h1>Modelo</h1>
                        </Button>
                        <Button pattern={1} className="flex flex-row items-center text-xs justify-between px-4 rounded-md float-right w-fit bg-black">
                        <h1>Salvar modelo</h1>
                        </Button>
                        <Button pattern={1} className="flex flex-row items-center text-xs justify-between px-4 rounded-md float-right w-fit">
                        <h1>Carregar modelo</h1>
                        </Button>
                    </div>
                </div>
                <div className="box-general" >

                    <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">🚨 Mensagem de Alerta</label>
                            <textarea className="input-textarea-new w-full" placeholder="Placeholder" />
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">🎯 Sinal Confirmado</label>
                            <textarea className="input-textarea-new w-full" placeholder="Placeholder" />
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">✅ Green</label>
                            <textarea className="input-textarea-new w-full" placeholder="Placeholder" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">❌ Mensagem de loss </label>
                            <textarea className="input-textarea-new w-full" placeholder="Placeholder" />
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new"><h1>🔁 Mensagem de Gale</h1></label>
                            <textarea className="input-textarea-new w-full" placeholder="Placeholder" />
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Stycker Green</label>
                            <input type="text" className="input-text-new w-full" placeholder="Placeholder" />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="box-general" >
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Mensagem de placar a cada rodada</label>
                            <textarea className="input-textarea-new w-full" placeholder="Placeholder" />
                        </div>
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Quantidade mínima de greens seguidos para enviar mensagem de placar*</label>
                            <input type="number" className="input-text-new w-full" placeholder="Placeholder" />
                        </div>
                    </div>
                    <div className="box-general" >
                        <div className="input-group mt-4 w-full">
                            <label className=" input-label-new">Mensagem de placar a cada rodada</label>
                            <textarea className="input-textarea-new w-full" placeholder="Placeholder" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <CircleIcon icon="rocket" />
                    <h1 className="text-lg text-textPrimary">Configuração da Sala de Sinais</h1>
                </div>
                
                <div className="flex flex-col md:flex-row w-full justify-between gap-16 ">
                    <div className="box-general" >
                        <div className="pr-20">
                            <h1>Ativar intervalo entre Sinais</h1>
                            <div className="flex flex-row mt-4">
                                <div className={`items-center flex flex-row gap-4 transition-all duration-300 ${selectedInterval == "loss" ? "text-textGreen" : ""} cursor-pointer`} onClick={() => setSelectedInterval("loss")}>
                                    <i className="fa-solid fa-circle  text-xs" />
                                    <h4 className="text-xs">Somente após um Red</h4>
                                </div>
                            </div>
                            <div className="flex flex-row mt-4">
                                <div className={`items-center flex flex-row gap-4 transition-all duration-300 ${selectedInterval == "win" ? "text-textGreen" : ""} cursor-pointer`} onClick={() => setSelectedInterval("win")}>
                                    <i className="fa-solid fa-circle  text-xs" />
                                    <h4 className="text-xs">Somente após um Win</h4>
                                </div>
                            </div>
                            <div className="flex flex-row mt-4">
                                <div className={`items-center flex flex-row gap-4 transition-all duration-300 ${selectedInterval == "all" ? "text-textGreen" : ""} cursor-pointer`} onClick={() => setSelectedInterval("all")}>
                                    <i className="fa-solid fa-circle  text-xs" />
                                    <h4 className="text-xs">Ambos</h4>
                                </div>
                            </div>
                            <div className="input-group mt-4 w-full">
                                <label className=" text-textSecondary ml-0 text-sm">Tempo de intervalo</label>
                                <input type="number" className="input-text-new w-full -mt-2" placeholder="Placeholder" />
                            </div>
                        </div>
                    </div>
                    <div className="box-general" >
                        <h1>Sessão Programada</h1>
                        <div className="flex flex-col mt-8">
                            <div className=" ml-44 flex flex-row w-6/12 justify-between">
                                <label className=" text-textSecondary ml-0 text-xs">Hora de ínicio</label>
                                <label className=" text-textSecondary ml-0 text-xs">Hora de fim</label>
                            </div>
                        
                            <div className="flex flex-row  gap-1 justify-center">
                                <Button pattern={1} className="flex flex-row items-center text-xs justify-between mt-3 px-4 rounded-md w-40 float-right bg-[#435474]">
                                    <h1 className="text-xs">1º Primeiro horário 🕛</h1>
                                </Button>
                                    <input type="text" className="input-text-new2 px-2 text-xs h-6" placeholder="Placeholder" />
                                    <input type="text" className="input-text-new2 px-2 text-xs h-6" placeholder="Placeholder" />
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                <Button pattern={1} className="flex flex-row items-center text-xs justify-between mt-3 px-4  rounded-md w-40 float-right bg-[#435474]">
                                    <h1 className="text-xs">1º Primeiro horário 🕛</h1>
                                </Button>
                                    <input type="text" className="input-text-new2 px-2 text-xs h-6" placeholder="Placeholder" />
                                    <input type="text" className="input-text-new2 px-2 text-xs h-6" placeholder="Placeholder" />
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                <Button pattern={1} className="flex flex-row items-center text-xs justify-between mt-3 px-4 rounded-md w-40 float-right bg-[#435474]">
                                    <h1 className="text-xs">1º Primeiro horário 🕛</h1>
                                </Button>
                                    <input type="text" className="input-text-new2 px-2 text-xs h-6" placeholder="Placeholder" />
                                    <input type="text" className="input-text-new2 px-2 text-xs h-6" placeholder="Placeholder" />
                            </div>
                            <div className="input-group mt-4 w-full">
                                <label className=" text-textSecondary ml-0 text-xs">Mensagem de ínicio</label>
                                <input type="text" className="input-text-new2 px-2 text-xs h-10" placeholder="Placeholder" />
                            </div>
                            <div className="input-group mt-4 w-full">
                                <label className=" text-textSecondary ml-0 text-xs">Mensagem de final</label>
                                <input type="text" className="input-text-new2 px-2 text-xs h-10" placeholder="Placeholder" />
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