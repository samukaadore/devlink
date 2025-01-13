import { Link } from "react-router-dom";

export function ErrorPage(){
    return(
        <div className="flex  w-full min-h-screen justify-center items-center flex-col text-white">
            <h1 className="font-bold text-6xl mb-2">404</h1>
            <h1 className="font-bold text-4xl mb-4">Pagina não encotrada </h1>
            <p className=" italic text-1xl mb-4">voce caiu em uma pagina não encotrada</p>

            <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to={"/"}>

              voltar para home

            </Link>

        </div>
    )
}