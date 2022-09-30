import SimpleText from '../atoms/SimpleText'
import InputLastName from '../atoms/InputLastName';

function LastNameBlock(){
    const name = "Apellidos";
    const clas = "na";

    return(
        <div>
            <SimpleText clas={clas} text={name}></SimpleText>
            <InputLastName />
        </div>
    )
}

export default LastNameBlock;