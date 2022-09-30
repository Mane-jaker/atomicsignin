import SimpleText from '../atoms/SimpleText'
import InputName from '../atoms/InputName';

function NameBlock(){
    const name = "Nombre";
    const clas = "na";

    return(
        <div>
            <SimpleText clas={clas} text={name}></SimpleText>
            <InputName></InputName>
        </div>
    )
}

export default NameBlock;