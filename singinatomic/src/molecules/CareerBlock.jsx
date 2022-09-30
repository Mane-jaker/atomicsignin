import SimpleText from '../atoms/SimpleText'
import InputCareer from '../atoms/InputCareer';

function CareerBlock(){
    const name = "¿Cual es tu carrera?";
    const clas = "na";

    return(
        <div>
            <SimpleText clas={clas} text={name}></SimpleText>
            <InputCareer />
        </div>
    )
}

export default CareerBlock;