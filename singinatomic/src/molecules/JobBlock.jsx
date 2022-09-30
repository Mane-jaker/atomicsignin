import SimpleText from '../atoms/SimpleText'
import InputJob from '../atoms/InputJob';

function JobBlock(){
    const name = "¿Trabajas despues de clases?";
    const clas = "na";

    return(
        <div>
            <SimpleText clas={clas} text={name}></SimpleText>
            <InputJob />
        </div>
    )
}

export default JobBlock;