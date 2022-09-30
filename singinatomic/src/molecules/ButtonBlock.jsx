import SimpleText from '../atoms/SimpleText'
import SimpleButton from '../atoms/SimpleButton';

function ButtonBlock(){
    const name = "Cuando este todo listo envia tus datos!";
    const clas = "m3";

    return(
        <div>
            <SimpleText clas={clas} text={name}></SimpleText>
            <SimpleButton />
        </div>
    )
}

export default ButtonBlock;