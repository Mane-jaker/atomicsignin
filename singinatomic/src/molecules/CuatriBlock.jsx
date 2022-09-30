import SimpleText from '../atoms/SimpleText'
import InputCuatri from '../atoms/InputCuatri';

function CuatriBlock(){
    const name = "¿Que cuatri cursas?";
    const clas = "na";

    return(
        <div>
            <SimpleText clas={clas} text={name}></SimpleText>
            <InputCuatri />
        </div>
    )
}

export default CuatriBlock;