import SimpleText from '../atoms/SimpleText'
import '../style/Header.css'

function Header(){
    const name = "Registro de Beca"
    const clas = "m2"

    return(
        <div className='row blok'>
            <SimpleText clas={clas} text={name} />
        </div>
    )
}

export default Header;