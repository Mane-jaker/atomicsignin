import '../style/SimpleText.css'

function SimpleText({clas,text}){
    return(
        <div>
            <p className={clas}>{text}</p>
        </div>
    )
}

export default SimpleText;