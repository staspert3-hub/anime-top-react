import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Anime = {
    spisokAnime:string[],
    addAnime:(anime:string) => void
}

const stateAnime = create<Anime>()(persist(set => ({
    spisokAnime:["Атака Титанов 🔥"],
    addAnime:(anime:string) => set(state => ({
       spisokAnime:[...state.spisokAnime , anime]
    }))
}),{name:'my store'} ))

export default stateAnime