import {motion} from 'motion/react'
import useStore from '../storage/storeAnime'

type props = {
    setState:React.Dispatch<React.SetStateAction<boolean>>,
    Ref:React.RefObject<number>
}

const deleteAnime: React.FC<props> = ({setState, Ref}) => {
    const store = useStore(s => s.deleteAnime)

    const click = () => {
        store(Ref.current)
        setState(false)
    }

    return(
        <>
            <motion.div className="fixed left-0 right-0 top-0 bottom-0 backdrop-blur-2xl z-50 flex flex-col gap-10 justify-center items-center"
              onClick={() => setState(false)}
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center flex-col"
                >
                <div className="p-1.5 text-2xl text-center mb-6">Удалить аниме?</div>
                <motion.button
                    whileHover={{scale:0.9}}
                    className="
                        px-8 py-4
                        rounded-2xl
                        bg-red-500/90
                        text-lg sm:text-xl
                        text-white font-bold
                        shadow-2xl shadow-red-500/40
                        hover:bg-red-600
                        hover:shadow-red-400/60
                        active:scale-95
                        transition-all duration-500 
                        backdrop-blur-md
                    "
                    onClick={click}
                >
                    УДАЛИТЬ
                </motion.button>
                </div>


            </motion.div>
        </>
    )
}

export default deleteAnime