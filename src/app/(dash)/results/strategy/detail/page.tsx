	'use client';
import BoxNew from '@/app/components/boxnew'
import CircleIcon from "@/app/components/circleIcon";
import CircleProgressBar from '@/app/components/CircleProgressBar';

export default function ResultsStrategy(){

    
    return (
        <div className='flex flex-col min-h-screen h-auto'>
          <div className="flex flex-row gap-4 items-center">
            <CircleIcon icon="rocket" />
            <h1 className="text-lg text-textPrimary">Resultados Detalhados da Estratégia 1</h1>
          </div> 
        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 p-4">
                <CircleProgressBar percentage={100} circleWidth="200" greens={10} />
            </div>
            <div className="col-span-1 p-10">
                <h1 className="absolute text-lg text-textPrimary mt-6 inset-x-[630px]">Resultados de Hoje</h1>
            </div>
            <div className="row-span-2 col-span-2">
                <div className="flex flex-col md:flex-row w-full justify-between gap-1 ">
                    <div className="">
                        <BoxNew icon='users' name="Green Bale 1" percent={20} quantity={10}  textRange='' />
                    </div>
                    <div className="">
                        <BoxNew icon='users' name="Green Bale 2" percent={12.5} quantity={10}  textRange='' />
                    </div>
                    <div className="">
                        <BoxNew icon='users' name="Green Bale 3" percent={12.5} quantity={10}  textRange='' />
                    </div>
                    <div className="">
                        <BoxNew icon='users'  name="Red" percent={100} quantity={10}  textRange='' />
                    </div>
                </div>
            </div>
            </div>

            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3 p-4">
                <CircleProgressBar percentage={80} circleWidth="200" greens={20} />
                </div>
                <div className="col-span-1 p-10">
                    <h1 className="absolute text-lg text-textPrimary mt-6 inset-x-[630px]">Resultados Totais</h1>
                </div>
                <div className="row-span-2 col-span-2">
                    <div className="flex flex-col md:flex-row w-full justify-between gap-1 ">
                        <div className="">
                            <BoxNew icon='users' name="Green Bale 1" percent={20} quantity={10}  textRange='' />
                        </div>
                        <div className="">
                            <BoxNew icon='users' name="Green Bale 2" percent={12.5} quantity={10}  textRange='' />
                        </div>
                        <div className="">
                            <BoxNew icon='users' name="Green Bale 3" percent={12.5} quantity={10}  textRange='' />
                        </div>
                        <div className="">
                            <BoxNew icon='users'  name="Red" percent={100} quantity={10}  textRange='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="absolute text-white text-xl ml-6">Resultados últimos 30 dias</h1>
            </div>
            <div className="ml-[1400px]">
              <a href="#" className="bg-bgGreen text-white rounded-2xl flex flex-row text-xs gap-3 w-32 h-6 "><h1 className="text-center mt-1 ml-6">EXPORTAR XLS</h1></a>
            </div>
            <div className="box-general font-abeezee" >
                <table>
                    <thead className="text-start font-normal text-sm text-textSecondary border-b border-solid border-[#56577A]">
                        <th className="text-start font-normal pb-2 text-[#11BCA9]">Data</th>
                        <th className="text-start font-normal pb-2 text-[#11BCA9]">GREEN SG</th>
                        <th className="font-normal pb-2 text-[#11BCA9]">G1</th>
                        <th className="font-normal pb-2 text-[#11BCA9]">G2</th>
                        <th className="font-normal pb-2 text-[#11BCA9]">G4</th>
                        <th className="font-normal pb-2 text-[#11BCA9]">GD</th>
                        <th className="font-normal pb-2 text-[#11BCA9]">RD</th>
                        <th className="font-normal pb-2 text-[#11BCA9]">GD%</th>
                        <th className="font-normal pb-2 text-[#11BCA9]">GT</th>
                        <th className="font-normal pb-2 text-[#11BCA9]">RT</th>
                        <th className="font-normal pb-2 text-[#11BCA9]">GT%</th>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-b border-solid border-[#56577A]">
                            <td className="flex flex-row items-center gap-x-4 pb-4">
                                <div className="flex flex-col mt-4">
                                    <h1 className="text-sm text-textPrimary">08/08</h1>
                                </div>
                            </td>
                            <td className="text-gray-400">3</td>
                            <td><h1 className="text-center text-base">5</h1></td>
                            <td><h1 className="text-center text-base ml-1">10</h1></td>
                            <td><h1 className="text-center text-base space-x-10 ml-3">5</h1></td>
                            <td><h1 className="text-center">5</h1></td>
                            <td><h1 className="text-center">10</h1></td>
                            <td><h1 className="text-center">80%</h1></td>
                            <td><h1 className="text-center">80</h1></td>
                            <td><h1 className="text-center">10</h1></td>
                            <td><h1 className="text-center">80%</h1></td>
                        </tr>
                        <tr className="border-b border-solid border-[#56577A]">
                            <td className="flex flex-row items-center gap-x-4 pb-4">
                                <div className="flex flex-col mt-4">
                                <h1 className="text-sm text-textPrimary">07/08</h1>
                                </div>
                            </td>
                            <td className="text-gray-400">3</td>
                            <td><h1 className="text-center text-base">5</h1></td>
                            <td><h1 className="text-center text-base ml-1">10</h1></td>
                            <td><h1 className="text-center text-base space-x-10 ml-3">5</h1></td>
                            <td><h1 className="text-center">5</h1></td>
                            <td><h1 className="text-center">10</h1></td>
                            <td><h1 className="text-center">80%</h1></td>
                            <td><h1 className="text-center">80</h1></td>
                            <td><h1 className="text-center">10</h1></td>
                            <td><h1 className="text-center">80%</h1></td>

                        </tr>
                        <tr className="border-b border-solid border-[#56577A]">
                            <td className="flex flex-row items-center gap-x-4 pb-4">
                                <div className="flex flex-col mt-4">
                                <h1 className="text-sm text-textPrimary">06/08</h1>
                                </div>
                            </td>
                            <td className="text-gray-400">3</td>
                            <td><h1 className="text-center">5</h1></td>
                            <td><h1 className="text-center">10</h1></td>
                            <td><h1 className="text-center">5</h1></td>
                            <td><h1 className="text-center">5</h1></td>
                            <td><h1 className="text-center">10</h1></td>
                            <td><h1 className="text-center">80%</h1></td>
                            <td><h1 className="text-center">80</h1></td>
                            <td><h1 className="text-center">10</h1></td>
                            <td><h1 className="text-center">80%</h1></td>
             
                        </tr>
                    </tbody>
                </table>
                </div>





        </div>
      );
      
}