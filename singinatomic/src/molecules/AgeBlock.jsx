import SimpleText from '../atoms/SimpleText'
import InputAge from '../atoms/InputAge';

function AgeBlock(){
    const name = "Ingresa tu edad";
    const clas = "na";

    return(
        <div>
            <SimpleText clas={clas} text={name}></SimpleText>
            <InputAge />
        </div>
    )
}

export default AgeBlock;