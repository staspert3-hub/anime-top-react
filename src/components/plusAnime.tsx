import { motion } from "motion/react"
import useStoreAnime from "../storage/storeAnime"
import { useRef } from "react"

type props = {
    setState:React.Dispatch<React.SetStateAction<boolean>>,
}

const plusAnime:React.FC<props> = ({setState}) => {
    const store = useStoreAnime(s => s.addAnime)
    const Ref = useRef<HTMLInputElement>(null)

    function StoreAdd(){
        const value = Ref.current?.value.trim()
        const input = Ref.current 
        if(value) {
            store(value)
            if(input){
                input.value = ""
                input.blur()
            } 
        }
    }

    return(
        <motion.div className="fixed left-0 right-0 top-0 bottom-0 backdrop-blur-2xl z-50 flex flex-col gap-10 justify-center items-center"
            onClick={() => setState(false)}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
            <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-6 items-center justify-center">
                <div className="p-1.5 text-2xl text-center">новое просмотренное аниме🔥</div>
                <div className=" flex items-center justify-center w-full gap-2">
                    <input
                    ref={Ref}
                    type="text"
                    placeholder="Введите название аниме..."
                    className="
                        w-full max-w-xl
                        rounded-2xl
                        border border-white/15
                        bg-white/5
                        px-5 py-3
                        text-white/90
                        placeholder:text-white/35
                        shadow-[0_0_0_1px_rgba(255,255,255,0.06)]
                        backdrop-blur-xl
                        outline-none

                        transition
                        focus:border-sky-400/40
                        focus:shadow-[0_0_0_2px_rgba(56,189,248,0.25),0_0_30px_rgba(56,189,248,0.10)]"
                    />
                    <button className="bg-white/5 h-full w-12 rounded-2xl border-2 border-white/15 active:border-sky-400/40 hover:border-sky-400/40 transition-all duration-400" onClick={StoreAdd}>
                        +
                    </button>

                </div>
            </div>
        </motion.div> 
    )
}

export default plusAnime