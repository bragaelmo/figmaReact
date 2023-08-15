	'use client';
import Box from '../../../components/box'
import SemiCircleProgressBar from '../../../components/semiCircleProgressBar';
import CircleIcon from "../../../components/circleIcon";

export default function ResultsStrategy(){

    
    return (
        <div className='flex flex-col min-h-screen h-auto'>
          <div className="flex flex-row gap-4 items-center">
            <CircleIcon icon="rocket" />
            <h1 className="text-lg text-textPrimary">Resultados Detalhados da Estratégia 1</h1>
          </div> 
        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 p-4">
                <SemiCircleProgressBar percent={90/2} />
            </div>
            <div className="col-span-1 p-1">
                <h1 className="text-lg text-textPrimary">Resultados de Hoje</h1>
            </div>
            <div className="row-span-2 col-span-2">
                <div className="flex flex-col md:flex-row w-full justify-between gap-1 ">
                    <div className="">
                        <Box icon='users' percent={-1.2} quantity={1000} textDefine='membros' textRange='neste mês' />
                    </div>
                    <div className="">
                        <Box icon='users' percent={12.5} quantity={64000} textDefine='total de membros' textRange='mensal' />
                    </div>
                    <div className="">
                        <Box icon='users' percent={12.5} quantity={64000} textDefine='total de membros' textRange='mensal' />
                    </div>
                    <div className="">
                        <Box icon='users' percent={12.5} quantity={64000} textDefine='total de membros' textRange='mensal' />
                    </div>
                </div>
            </div>
            </div>
        </div>
      );
      
}