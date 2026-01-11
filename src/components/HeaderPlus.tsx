import { useState } from "react"
import PlusAnime from "./plusAnime"
import { AnimatePresence } from "motion/react"

const HeaderP:React.FunctionComponent = () => {
    const [state , setState] = useState(false)

    return(
        <>
            <button className="fixed bottom-4 right-4 border-2 border-white/20 p-3 rounded-xl hover:border-white transition-all flex items-center justify-center"
            onClick={() => setState((s) => !s)}
            >+</button>
            <AnimatePresence>
                {state && <PlusAnime setState={setState}/>}
            </AnimatePresence>
        </>
    )
}

export default HeaderP