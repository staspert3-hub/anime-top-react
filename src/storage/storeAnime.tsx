import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Anime = {
    spisokAnime:string[],
    addAnime:(anime:string) => void,
    deleteAnime:(index:number) => void,
}

const stateAnime = create<Anime>()(persist((set) => ({
    spisokAnime:["Атака Титанов 🔥"],
    addAnime:(anime:string) => set(state => ({
       spisokAnime:[...state.spisokAnime , anime]
    })),
    deleteAnime:(index:number) => set(state => ({
        spisokAnime: state.spisokAnime.filter((_, i) => i !== index),
    }))
}),{name:'my store'} ))

export default stateAnime