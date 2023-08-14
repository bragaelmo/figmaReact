	'use client';
import InitialBanner  from '../../../../public/assets/img/initial-banner.svg'
import Image from 'next/image'
import Button from '../../components/button'
import Box from '../../components/box'
import { useState } from 'react';
import SemiCircleProgressBar from '../../components/semiCircleProgressBar';
import NoticeCard from '../../components/noticeCard';

export default function Home(){

    
    return (
            <div className='flex flex-col'>
                <div className="p-8 w-full rounded-2xl text-textPrimary bg-gradientBox font-raleway flex flex-col" >
                    <div className='flex flex-row justify-between'>
                        <div className='mt-16'>
                            <h1 className="text-textPrimary text-3xl font-bold ">Bem-vindo <span className="text-textGreen  font-extrabold"> Ramon </span> ao seu painel!</h1>
                            <div className='text-sm mt-8'>
                                <h1>A partir de agora você tera acesso para administrar suas slas de sinais.<br />
                                Foi liberada criação de até <span className="text-textGreen" >16 salas</span> de sinais com seu login.<br />
                                Atualmente você tem <span className="text-textGreen" >12 salas</span> ativadas.</h1>
                            </div>
                            <div className='flex flex-col md:flex-row gap-8 mt-8'>
                                <Button pattern={2} className='h-14' >Comprar mais<i className='fa-solid fa-cart-plus ml-4' /></Button>
                                <Button pattern={2} className='h-14' >Comprar mais<i className='fa-solid fa-cart-plus ml-4' /></Button>
                            </div>
                        </div>
                        <Image src={InitialBanner} alt="Initial Banner" width={350} className='hidden lg:block' />
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between'>
                        <Box icon='users' percent={-1.2} quantity={1000} textDefine='membros' textRange='neste mês' />
                        <Box icon='users' percent={12.5} quantity={64000} textDefine='total de membros' textRange='mensal' />
                        <Box icon='dollar' percent={2.12} quantity={12} textDefine='canais ativos' textRange='neste mês' />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <div className=" ml-8 p-8 w-full md:w-80 rounded-2xl text-textPrimary bg-gradientBox font-raleway flex flex-col" >
                        <SemiCircleProgressBar percent={90/2} />
                    </div>
                    <NoticeCard />
                </div>
                
            </div>

    )
}