function InputJob(){
    return(
        <div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                <label class="form-check-label" for="flexRadioDefault1">
                    Si
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                <label class="form-check-label" for="flexRadioDefault2">
                    No
                </label>
            </div>
        </div>
    )
}

export default InputJob;