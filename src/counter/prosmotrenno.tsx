import { AnimatePresence, motion } from "framer-motion";
import useStore from "../storage/storeAnime"
import { useRef, useState } from "react";
import DeleteAnime from "../components/deleteAnime";
import Snowfall from 'react-snowfall'

const Vb = {
  hidden:{opacity:1},    // начальное состояние анимации
  visible:{            //конечное состояние анимации
    opacity:1,            
    transition:{
      staggerChildren:0.2,          //задежрка анимации детей
      //delayChildren:0,           //задержка анимации детей
    }
  }
} 

const Va = {
  hidden:{x:0, opacity:0},
  visible:{x:0 , opacity:1}
}

const MoiTop: React.FunctionComponent = () => {
  const store = useStore((state) => state.spisokAnime)
  const [state , setState] = useState(false)
  let Ref = useRef<number>(0)

  return (
    <>
      {/* <Snowfall 
        color="white" 
        snowflakeCount={80} 
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 900 // Чтобы снег был поверх всего
        }}
      /> */}
      <div className="flex items-center flex-col  mt-9 gap-15">
      <motion.p
        className="
          bg-gradient-to-r from-blue-600 to-cyan-500
          bg-clip-text text-transparent
          mb-9
          text-xl sm:text-xl md:text-3xl lg:text-4xl
          font-bold
        "
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        🔥просмотренные аниме🔥
      </motion.p>
      <motion.div className=" grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
        variants={Vb} animate="visible" initial="hidden"
      >
        {store.map((value , index) => {
          return (
            <motion.div key={`${value}-${index}`} className=" shadow-black shadow hover:shadow-2xl  active:scale-90 border-2 border-white/20 rounded-2xl p-10 flex items-center justify-center text-xl bg-white/5 hover:border-white/40 transition-all" 
              variants={Va}
              onClick={() => {
                Ref.current = index
                setState((state) => !state)
              }}
            >
              {value}
            </motion.div>
          )
        })}
      </motion.div>
      <AnimatePresence>
        {state && 
          <DeleteAnime setState={setState} Ref={Ref}/>
        }
      </AnimatePresence>
    </div>
    </>
  )
};

export default MoiTop;