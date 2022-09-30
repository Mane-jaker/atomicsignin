import SimpleText from '../atoms/SimpleText'
import '../style/Footer.css'

function Footer(){
    const name = "¡Muchas gracias!"
    const clas = "m2"

    return(
        <div className='row blok1'>
            <SimpleText clas={clas} text={name} />
        </div>
    )
}

export default Footer;