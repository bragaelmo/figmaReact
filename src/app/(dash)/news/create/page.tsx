
import ToogleCheckbox from '@/app/components/toogleCheckbox';
import Button from '../../../components/button'
import CircleIcon from "../../../components/circleIcon";

export default function CreateNews() {


    return (
        <div className='flex flex-col min-h-screen h-auto'>
            <div className="flex flex-row gap-4 items-center">
                <CircleIcon icon="rocket" />
                <h1 className="text-lg text-textPrimary">Adicionar notícia</h1>
            </div>
            <div className="box-general" >
                <div className='flex flex-col lg:flex-row bg-gradientBox items-center justify-between'>
                    <div className=" w-full md:w-80 rounded-2xl text-textPrimary  font-abeezee flex flex-col lg:flex-row" >
                        <div className="input-group mt-2 lg:mt-0 lg:mr-2 flex-grow">
                            <label className="text-textPrimary ml-4">Título</label>

                            <div className="relative flex items-center ">
                                <i className="fa-solid fa-pen w-5 h-1 absolute ml-3 fill-transparent" />
                                <input type="text" className="input-text-new mt-1 w-full lg:w-96 h-8" placeholder="Título" />
                            </div>
                        </div>
                    </div>
                    <ToogleCheckbox title='Noticia ativa ?' checked={true} function={undefined} />
                </div>
                <div className=" w-full md:w-130 rounded-2xl text-textPrimary font-abeezee flex flex-col lg:flex-row" >
                    <div className="input-group mt-2 lg:mt-0 lg:mr-2 flex-grow">
                        <textarea className="input-text-new md:h-80" />
                    </div>
                </div>
                <div className=" mt-8 w-full rounded-2xl font-abeezee flex flex-col md:flex-row justify-end">
                    <Button fullWidth pattern={1} className="h-10 float-right rounded-md text-sm px-6 flex flex-row gap-x-4 items-center"> <i className="fa-brands fa-telegram text-textPrimary flex justify-content align-items" /><h1 className='text-textPrimary text-sm'>Cadastrar Notícia</h1></Button>
                </div>

            </div>
        </div>                       
    )
}