import Circles from "../../../public/assets/img/circles-blur.svg"
import Logo from "../../../public/assets/img/logo.svg"
import Line from "../../../public/assets/img/line.svg"
import Image from "next/image"
import Button from "../components/button"
import Link from 'next/link'

export default function Login(){
    return (
        <div className="overflow-hidden relative h-screen bg-backgroundPrimary">
            <Image src={Circles} alt="Logo" className="absolute w-full" />
            <div className="flex">
                <div className="flex h-screen center w-1/2 relative">
                    <div className="absolute inset-0 bg-bgLogin bg-cover opacity-40 h-fill"></div>
                    <Image src={Logo} alt="Logo Fox" width={300} className="mx-auto z-10"/>
                </div>
                <div className="h-screen justify-center flex flex-col z-40 w-1/2">
                    <Image src={Line} alt="bg-line" className="z-0 -ml-20 absolute" width={190}/>
                    <div className="flex flex-col gap-2 mx-auto w-6/12  my-auto">
                        <span className="text-4xl font-normal text-white font-sans">É bom te ver aqui!</span>
                        <span className="text-sm text-gray-400">Digite o seu e-mail e senha</span>
                        <div className="input-group mt-8 ">
                            <label className="text-textPrimary ml-4">E-mail</label>
                            <input type="text" className="input-text-new" placeholder="seu e-mail" />
                        </div>
                        <div className="input-group mt-4">
                            <label className="input-label">Senha</label>
                            <input  type="password" className="input-text-new" placeholder="sua senha" />
                        </div>
                        <Button fullWidth pattern={1} className="h-14 mt-8" >Entrar agora</Button>
                        <h1 className="text-textSecondary text-sm mx-auto">Esqueceu sua senha ?  <Link href="/reset-password" legacyBehavior><a className="text-textPrimary">Clique aqui</a></Link></h1>

                    </div>
                        <span className="mx-auto text-textPrimary text-sm bottom-0 my-auto">@ 2023 Feito com ❤️ by Fox Robots</span>
                </div>
            </div>
        </div>
    )
}