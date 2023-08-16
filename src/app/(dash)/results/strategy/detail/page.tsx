'use client';
import Box from '../../../../components/box'
import SemiCircleProgressBar from '../../../../components/semiCircleProgressBar';
import CircleIcon from "../../../../components/circleIcon";
import DataTable from "react-data-table-component";

export default function ResultsStrategy(){
    const data = [
        {
            id: 1,
            data: "08   /08",
            greensg:2,
            g1: 3,
            g2: 5,
            g4: 10,
            gd: 80,
            rd: 5,
            gdp: 10,
            gt: 80,
            rt: 80,
            gtp: 80
        },
        {
            id: 2,
            data: "07/08",
            greensg: 2,
            g1: 3,
            g2: 5,
            g4: 10,
            gd: 80,
            rd: 5,
            gdp: 10,
            gt: 80,
            rt: 80,
            gtp: 80
        }
    ];
    const columnsFilled = [
        {
            name: 'Data',
            selector: 'data',
            cell: (row: any) => (
                <h1 className="text-sm text-textPrimary">{row.data}</h1>
            )
        },
        {
            name: 'GREEN SG',
            selector: 'greensg'
        },
        {
            name: 'G1',
            selector: 'g1',
            align: 'left'
        },
        {
            name: 'G2',
            selector: 'g2',
            align: 'left'
        },
        {
            name: 'G4',
            selector: 'g4',
            align: 'left'
        },        
        {
            name: 'GD',
            selector: 'gd',
            align: 'left'
        },
        {
            name: 'RD',
            selector: 'rd',
            align: 'left'
        },
        {
            name: 'GD%',
            selector: 'gd',
            align: 'left',
            cell: (row: any) => (
                <p>{row.gd}%</p>
            )
        },
        {
            name: 'GT',
            selector: 'gt',
            align: 'left'
        },
        {
            name: 'RT',
            selector: 'rt',
            align: 'left'
        },
        {
            name: 'GT%',
            selector: 'gtp',
            align: 'left',
            cell: (row: any) => (
                <p>{row.gtp}%</p>
            )
        }
    ]; 
    const dataTableStyles = {
        table: {
          style: {
            backgroundColor: '#brbrbr', 
          },
        },
        header: {
          style: {
            backgroundColor: 'transparent', 
            color: '#11BCA9'
          },
        },
        cells: {
          style: {
            backgroundColor: 'transparent',
          },
        },
      };
    
    return (
        <div className='flex flex-col min-h-screen h-auto'>
          <div className="flex flex-row gap-4 items-center">
            <CircleIcon icon="rocket" />
            <h1 className="text-lg text-textPrimary">Resultados Detalhados da Estratégia 1</h1>
          </div> 
        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 p-4">
                <SemiCircleProgressBar subtitle={20} percent={68} />
            </div>
            <div className="col-span-1 p-10">
                <h1 className="absolute text-lg text-textPrimary mt-6 inset-x-[630px]">Resultados de Hoje</h1>
            </div>
            <div className="row-span-2 col-span-2">
                <div className="flex flex-col md:flex-row w-full justify-between gap-1 ">
                    <div className="">
                        <Box icon='users' name="Green Bale 1" percent={20} quantity={10} textDefine='membros' textRange='' />
                    </div>
                    <div className="">
                        <Box icon='users' name="Green Bale 2" percent={12.5} quantity={10} textDefine='total de membros' textRange='' />
                    </div>
                    <div className="">
                        <Box icon='users' name="Green Bale 3" percent={12.5} quantity={10} textDefine='total de membros' textRange='' />
                    </div>
                    <div className="">
                        <Box icon='users'  name="Red" percent={100} quantity={10} textDefine='total de membros' textRange='' />
                    </div>
                </div>
            </div>
            </div>

            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3 p-4">
                    <SemiCircleProgressBar subtitle={20} percent={68} />
                </div>
                <div className="col-span-1 p-10">
                    <h1 className="absolute text-lg text-textPrimary mt-6 inset-x-[630px]">Resultados Totais</h1>
                </div>
                <div className="row-span-2 col-span-2">
                    <div className="flex flex-col md:flex-row w-full justify-between gap-1 ">
                        <div className="">
                            <Box icon='users' name="Green Bale 1" percent={20} quantity={10} textDefine='membros' textRange='' />
                        </div>
                        <div className="">
                            <Box icon='users' name="Green Bale 2" percent={12.5} quantity={10} textDefine='total de membros' textRange='' />
                        </div>
                        <div className="">
                            <Box icon='users' name="Green Bale 3" percent={12.5} quantity={10} textDefine='total de membros' textRange='' />
                        </div>
                        <div className="">
                            <Box icon='users'  name="Red" percent={100} quantity={10} textDefine='total de membros' textRange='' />
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
                <DataTable
                data={data}
                columns={columnsFilled}
                noHeader={true}
                customStyles={dataTableStyles}
                />
            </div>
        </div>
      );
      
}