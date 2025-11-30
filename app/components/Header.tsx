"use client"
import Link from "next/link"
import { useState } from "react";
import { ProjectForm } from "./ProjectForm";
import { useRouter } from "next/navigation";


// type HeaderProps = {
//     onClose: () => void
// }

interface Category {
    id: number,
    name: string,
}

export const Header = ({categories} : {categories : Category[]}) => {
    const router = useRouter()
    const [showForm, setShowForm] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (!value) return;
        router.push(`/categories/${value}`); // value = name (quizz, dataviz…)
      };

    return (
        <div>
            <header className="mb-6 mt-3  flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <Link href={"/"} className="text-4xl font-semibold text-white">ada<span className="text-orange-300">VERSE</span></Link>

                <div className="flex items-center gap-8">
                <select
          defaultValue=""
          onChange={handleChange}
          className="bg-transparent border border-white/40 rounded-full px-4 py-1 text-sm outline-none"
        >
          <option value="" disabled>
            Choisir une catégorie
          </option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
                    <button
                        className=" bg-orange-500 px-5 py-2.5  cursor-pointer text-sm font-medium text-white"
                        onClick={() => { setShowForm((show) => !show), console.log("etat", showForm) }}>
                        PUBLIER UN PROJET
                    </button>
                </div>
            </header>
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                <ProjectForm onClose={() => setShowForm(false)} />
                </div>
            )}
        </div>
    )
}