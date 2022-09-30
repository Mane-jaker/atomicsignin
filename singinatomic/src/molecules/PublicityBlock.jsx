import SimpleText from '../atoms/SimpleText'

function PublicityBlock(){
    const name0 = "¿Quieres dinero facil?";
    const clas0 = "m1";
    
    const name1 = "Registrate y mira la magia";
    const clas1 = "m1";
    return(
        <div>
            <SimpleText clas={clas0} text={name0}></SimpleText>  
            <SimpleText clas={clas1} text={name1}></SimpleText> 
        </div>
    )
}

export default PublicityBlock;