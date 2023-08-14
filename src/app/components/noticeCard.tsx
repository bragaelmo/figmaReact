import CircleIcon from "./circleIcon";

export default function NoticeCard(){
    return (
        <div className=" ml-8 p-8 w-full rounded-2xl text-textPrimary bg-gradientBox font-raleway flex flex-col" >
            <div className="flex flex-row gap-4 items-center">
                <CircleIcon icon="rocket" />
                <h1 className="text-lg">Novidades</h1>
            </div>
            <div className="w-full mx-auto p-6 bg-bgCards rounded-2xl flex justify-between flex-col mt-8">
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="text-thin text-lg text-textPrimary">The Greate  Icescape - Jogo Liberado</h1>
                    <h1 className="text-thin text-sm text-textSecondary font-poppins" >10/08/2023</h1>
                </div>
                <h1 className="text-textSecondary mt-4">
                    Liberamos para você a configuração completa deste jogo, preparamos um tutorial para você começar ganhar dinheirohoje mesmo com este jogo!     
                </h1>                 
            </div>
            <div className="w-full mx-auto p-6 bg-bgCards rounded-2xl flex justify-between flex-col mt-8">
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="text-thin text-lg text-textPrimary">The Greate  Icescape - Jogo Liberado</h1>
                    <h1 className="text-thin text-sm text-textSecondary font-poppins" >10/08/2023</h1>
                </div>
                <h1 className="text-textSecondary mt-4">
                    Liberamos para você a configuração completa deste jogo, preparamos um tutorial para você começar ganhar dinheirohoje mesmo com este jogo!     
                </h1>                 
            </div>
        </div>
    )
}