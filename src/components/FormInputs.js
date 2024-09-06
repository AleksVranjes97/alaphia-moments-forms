import Welcome from "./Welcome";
import HowToUse from "./HowToUse";
import Examples from "./Examples";
import ChoosingAMoment from "./ChoosingAMoment";
import MomentDescription from "./MomentDescription";
import SpendingDecision from "./SpendingDecision";
import ForWhatHowMuch from "./ForWhatHowMuch";
import MomentLocation from "./MomentLocation";
import AnyoneElseInvolved from "./AnyoneElseInvolved";
import CurrentState from "./CurrentState";
import MentalDialogue from "./MentalDialogue";
import Needs from "./Needs";
import PastFutureThoughts from "./PastFutureThoughts";
import AvoidOutcome from "./AvoidOutcome";
import CaptureOutcome from "./CaptureOutcome";
import ReflectingFeeling from "./ReflectingFeeling";
import BehaviouralResponse from "./BehaviouralResponse";
import Congratulations from "./Congratulations";

import useFormContext from "../hooks/useFormContext";

const FormInputs = () => {

    const { page } = useFormContext();

    const display = {
        0: <Welcome></Welcome>,
        1: <HowToUse></HowToUse>,
        2: <Examples></Examples>,
        3: <ChoosingAMoment></ChoosingAMoment>,
        4: <MomentDescription></MomentDescription>,
        5: <SpendingDecision></SpendingDecision>,
        6: <ForWhatHowMuch></ForWhatHowMuch>,
        7: <MomentLocation></MomentLocation>,
        8: <AnyoneElseInvolved></AnyoneElseInvolved>,
        9: <CurrentState></CurrentState>,
        10: <MentalDialogue></MentalDialogue>,
        11: <Needs></Needs>,
        12: <PastFutureThoughts></PastFutureThoughts>,
        13: <AvoidOutcome></AvoidOutcome>,
        14: <CaptureOutcome></CaptureOutcome>,
        15: <ReflectingFeeling></ReflectingFeeling>,
        16: <BehaviouralResponse></BehaviouralResponse>,
        17: <Congratulations></Congratulations>
    }

    const content = (
        <div>
            {display[page]}
        </div>
    )

    return content;
}

export default FormInputs