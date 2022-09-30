import SimpleText from '../atoms/SimpleText'
import InputPhone from '../atoms/InputPhone';

function PhoneBlock(){
    const name = "Numero de telefono";
    const clas = "na";

    return(
        <div>
            <SimpleText clas={clas} text={name}></SimpleText>
            <InputPhone />
        </div>
    )
}

export default PhoneBlock;