import SimpleText from '../atoms/SimpleText'
import InputEmail from '../atoms/InputEmail';


function EmailBlock(){
    const name = "Correo Electronico";
    const clas = "na";

    return(
        <div>
            <SimpleText clas={clas} text={name}></SimpleText>
            <InputEmail />
        </div>
    )
}

export default EmailBlock;