"use client"

export const Header = () => {
    return (
        <header className="mb-6 flex items-center justify-between mt-3">
            <h1 className="text-4xl font-semibold text-white">ada<span className="text-orange-300">VERSE</span></h1>

            <div className="flex items-center gap-8">
                <button className="rounded-full cursor-pointer  px-3 py-2.5 text-sm ">
                    TOUT LES PROJETS ⌄
                </button>
                <button className=" bg-orange-500 px-5 py-2.5  cursor-pointer text-sm font-medium text-white">
                   PUBLIER UN PROJET
                </button>
            </div>
        </header>
    )
}