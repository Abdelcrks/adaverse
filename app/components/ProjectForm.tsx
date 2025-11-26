"use client"

export const ProjectForm = () => {

    return (
        <div className="flex justify-center">
            <form action=""
            className="relative mt-30 p-10 w-[450px] bg-white text-black flex flex-col items-center gap-10 rounded-2xl"
            >
                <button className="absolute left-4 top-4 text-red-600 text-xl">❌</button>
                <h1 className="text-2xl">Publier un projet</h1>

                <input type="text" name="title" placeholder="Quizz Marvel" />
                <input type="url" name="github" placeholder="www.github.com" />
                <input type="url" name="demo" placeholder="www.quizz-marvel.vercel.app" />

                <select name="promo">
                    <option value="">Frida</option>
                    <option value="">Graces</option>
                </select>

                <select name="theme">
                    <option value="">Quizz</option>
                    <option value="">Dataviz</option>
                    <option value="">Adacheckevent</option>
                </select>

                <button className="p-3.5 bg-orange-500 text-white rounded-full">Envoyer</button>

                <p className="text-red-700">tous les champs sont obligatoires</p>
            </form>
        </div>
    )
}
