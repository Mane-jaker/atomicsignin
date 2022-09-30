import NameBlock from "../molecules/NameBlock";
import AgeBlock from "../molecules/AgeBlock";
import ButtonBlock from "../molecules/ButtonBlock";
import CareerBlock from "../molecules/CareerBlock";
import CuatriBlock from "../molecules/CuatriBlock";
import EmailBlock from "../molecules/EmailBlock";
import JobBlock from "../molecules/JobBlock";
import LastNameBlock from "../molecules/LastNameBlock";
import PhoneBlock from "../molecules/PhoneBlock";
import PublicityBlock from "../molecules/PublicityBlock";
import '../style/BodyForm.css'

function BodyForm(){
    return(
        <>
            <div className="row">
                <div className="col-4 mar">
                    <PublicityBlock />
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-6">
                            <div className="esp">
                                <NameBlock />
                            </div>
                            <div className="esp">
                            <LastNameBlock />
                            </div>
                            <div className="esp">
                            <AgeBlock />
                            </div>
                            <div className="esp">
                            <EmailBlock />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="esp"><CareerBlock /></div>
                            <div className="esp"><CuatriBlock /></div>
                            <div className="esp"><PhoneBlock /></div>
                            <div className="esp"><JobBlock /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 offset-3">
                            <ButtonBlock />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyForm;