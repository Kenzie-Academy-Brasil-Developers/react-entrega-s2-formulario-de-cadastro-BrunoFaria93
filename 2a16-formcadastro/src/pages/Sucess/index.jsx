import { useHistory } from "react-router-dom"
import { useParams } from "react-router"
import { motion
 } from "framer-motion"
const Sucess = () => {
    const history = useHistory()
    const params = useParams()

    return(
        <motion.div className='sucess-div'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0.9}}
        >
            <h1>Bem vindo, <span>{params.name}</span>!</h1>
            <img src='http://www.mds.gov.br/webarquivos/arquivo/crianca_feliz/Encarte/0405_seis_nove_meses.png'></img>
            <button onClick={() => history.push('/')}>Voltar</button>
        </motion.div>
    )
}

export default Sucess