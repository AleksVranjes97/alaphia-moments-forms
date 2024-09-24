import React, { useState } from 'react'
import useFormContext from "../hooks/useFormContext";

export default function MomentMap() {

  const { data } = useFormContext();

  const stringifyArray = (arr) => {
    var val = "";
    for (var i in arr) {
        val += arr[i];
        if (arr[i] != arr[arr.length - 1]) {
            val += ", ";
        }
    }

    return val;
  }

  return (
    <div>
        <div className="content-div">
            <p>Congratulations on completing another "Moment Exploration"!</p>
            <p>Each moment is a journey unto itself, a constellation of numerous external and internal factors. These factors include needs, feelings, motives, behavioural instincts, self-talk, and strategies that merge into behaviour patterns. Each time you record a moment, you will deepen your understanding.</p>
            <p>Each time you record a moment, you will deepen your understanding. Over time, with patience and commitment, you will begin to see how the internal and external elements of your life show up in patterns that are uniquely yours.</p>
            <p>Seeing a pattern is the first step in changing a pattern. Your patience and commitment are key. Users who record moments consistently are successful in developing the deep levels of self-discovery needed for meaningful and lasting change.</p>
            <p><strong>Check your journey</strong></p>
        </div>
        <div className='lines-div'>
            {/* momentLocation */}
            <div className="map_label_div" style={{backgroundColor: "#e3ec63", marginLeft: "100px", marginTop: "100px"}}>I was / I'm</div>
            <div className="map_label_div" style={{backgroundColor: "#fafecc", marginLeft: "100px", marginTop: "10px", maxWidth: "150px"}}>{stringifyArray(data.momentLocation)}</div>

            {/* anyoneElseInvolved */}
            <div className="map_label_div" style={{backgroundColor: "#e3ec63", position: "absolute", top: "110px", left: "270px", maxWidth: "120px"}}>People involved include</div>
            <div className="map_label_div" style={{backgroundColor: "#fafecc", position: "absolute", top: "170px", left: "270px", maxWidth: "130px"}}>{stringifyArray(data.anyoneElseInvolved)}</div>
            
            {/* currentState */}
            <div className="map_label_div" style={{backgroundColor: "#cfdc47", position: "absolute", top: "320px", left: "220px", maxWidth: "200px"}}>I was / I'm already feeling</div>
            <div className="map_label_div" style={{backgroundColor: "#ecf3af", position: "absolute", top: "360px", left: "220px", maxWidth: "200px"}}>{stringifyArray(data.currentState)}</div>
        
            {/* moment */}
            <div className="map_label_div" style={{backgroundColor: "#ccd675", position: "absolute", top: "490px", left: "170px", maxWidth: "200px"}}>I am / I was experiencing the following situation or trigger</div>
            <div className="map_label_div" style={{backgroundColor: "#ecf3af", position: "absolute", top: "570px", left: "170px", maxWidth: "200px"}}>{data.moment}</div>
        
            {/* needs */}
            <div className="map_label_div" style={{backgroundColor: "#bbc256", position: "absolute", top: "775px", left: "105px", maxWidth: "200px"}}>I'm needing</div>
            <div className="map_label_div" style={{backgroundColor: "#e9ecc9", position: "absolute", top: "815px", left: "105px", maxWidth: "200px"}}>{stringifyArray(data.needs)}</div>
        
            {/* avoidOutcome - Conditional rendering if filled out */}
            {data.avoidOutcomeText ? 
                <>
                    <div className="map_label_div" style={{backgroundColor: "#cfd283", position: "absolute", top: "730px", left: "270px", maxWidth: "200px"}}>My goal is to prevent</div>
                    <div className="map_label_div" style={{backgroundColor: "#f3f4cf", position: "absolute", top: "770px", left: "270px", maxWidth: "200px"}}>{data.avoidOutcomeText}</div>
                </>
            :
                <></>
            }

            {/* captureOutcome - Conditional rendering if filled out */}
            {data.captureOutcome ? 
                <>
                    <div className="map_label_div" style={{backgroundColor: "#f8e13e", position: "absolute", top: "960px", left: "115px", maxWidth: "200px"}}>My goal is to</div>
                    <div className="map_label_div" style={{backgroundColor: "#fef9d1", position: "absolute", top: "1000px", left: "115px", maxWidth: "200px"}}>{data.captureOutcome}</div>
                </>
            :
                <></>
            }

            {/* avoidFeeling - Conditional rendering if filled out */}
            {data.avoidFeeling.length > 0 ? 
                <>
                    <div className="map_label_div" style={{backgroundColor: "#f7ef98", position: "absolute", top: "990px", left: "290px", maxWidth: "200px"}}>I am trying not to feel</div>
                    <div className="map_label_div" style={{backgroundColor: "#f8f5cc", position: "absolute", top: "1030px", left: "290px", maxWidth: "200px"}}>{stringifyArray(data.avoidFeeling)}</div>
                </>
            :
                <></>
            }

            {/* captureFeeling - Conditional rendering if filled out */}
            {data.captureFeeling.length > 0 ? 
                <>
                    <div className="map_label_div" style={{backgroundColor: "#f8e13e", position: "absolute", top: "1170px", left: "100px", maxWidth: "200px"}}>I am trying to feel</div>
                    <div className="map_label_div" style={{backgroundColor: "#fef5b6", position: "absolute", top: "1210px", left: "100px", maxWidth: "200px"}}>{stringifyArray(data.captureFeeling)}</div>
                </>
            :
                <></>
            }

            {/* reflectingFeeling - Conditional rendering if filled out */}
            {data.reflectingFeeling.length > 0 ? 
                <>
                    <div className="map_label_div" style={{backgroundColor: "#f5c02c", position: "absolute", top: "1270px", left: "320px", maxWidth: "200px"}}>I currently feel</div>
                    <div className="map_label_div" style={{backgroundColor: "#fef1cd", position: "absolute", top: "1310px", left: "320px", maxWidth: "200px"}}>{stringifyArray(data.reflectingFeeling)}</div>
                </>
            :
                <></>
            }

            {/* aOBodyFeeling - Conditional rendering if filled out */}
            {data.aOBodyFeeling ? 
                <>
                    <div className="map_label_div" style={{backgroundColor: "#f5bc63", position: "absolute", top: "1400px", left: "100px", maxWidth: "200px"}}>Which I feel in my body</div>
                    <div className="map_label_div" style={{backgroundColor: "#fdedd1", position: "absolute", top: "1440px", left: "100px", maxWidth: "200px"}}>{stringifyArray(data.aOBodyFeeling)}</div>
                </>
            :
                <></>
            }

            {/* cOBodyFeeling - Conditional rendering if filled out */}
            {data.cOBodyFeeling ? 
                <>
                    <div className="map_label_div" style={{backgroundColor: "#f5bc63", position: "absolute", top: "1400px", left: "100px", maxWidth: "200px"}}>Which I feel in my body</div>
                    <div className="map_label_div" style={{backgroundColor: "#fdedd1", position: "absolute", top: "1440px", left: "100px", maxWidth: "200px"}}>{stringifyArray(data.cOBodyFeeling)}</div>
                </>
            :
                <></>
            }

            {/* rFBodyFeeling - Conditional rendering if filled out */}
            {data.rFBodyFeeling ? 
                <>
                    <div className="map_label_div" style={{backgroundColor: "#f5bc63", position: "absolute", top: "1400px", left: "100px", maxWidth: "200px"}}>Which I feel in my body</div>
                    <div className="map_label_div" style={{backgroundColor: "#fdedd1", position: "absolute", top: "1440px", left: "100px", maxWidth: "200px"}}>{stringifyArray(data.rFBodyFeeling)}</div>
                </>
            :
                <></>
            }

            {/* behaviouralResponse */}
            <div className="map_label_div" style={{backgroundColor: "#ed9a32", position: "absolute", top: "1585px", left: "95px", maxWidth: "200px"}}>My response to my needs and feelings is</div>
            <div className="map_label_div" style={{backgroundColor: "#fdebd4", position: "absolute", top: "1645px", left: "95px", maxWidth: "180px"}}>{data.behaviouralResponse}</div>
        
            {/* mentalDialogue - Conditional rendering if filled out */}
            {data.mentalDialogue ? 
                <>
                    <div className="map_label_div" style={{backgroundColor: "#ee885b", position: "absolute", top: "1700px", left: "325px", maxWidth: "200px"}}>I tell myself that</div>
                    <div className="map_label_div" style={{backgroundColor: "#fce1d1", position: "absolute", top: "1740px", left: "325px", maxWidth: "200px"}}>{stringifyArray(data.rFBodyFeeling)}</div>
                </>
            :
                <></>
            }

            {/* forWhat / howMuch - Conditional rendering if filled out */}
            {data.spendingDecision === "yes" ? 
                <>
                    <div className="map_label_div" style={{backgroundColor: "#e26e5a", position: "absolute", top: "1850px", left: "110px", maxWidth: "200px"}}>I also spent / am considering spending {data.howMuch} on </div>
                    <div className="map_label_div" style={{backgroundColor: "#fbe0d3", position: "absolute", top: "1910px", left: "110px", maxWidth: "200px"}}>{data.forWhat}</div>
                </>
            :
                <></>
            }

            <div className="map_label_div" style={{backgroundColor: "#f8ac8a", position: "absolute", top: "2053px", left: "150px", maxWidth: "250px"}}>What do you notice about all this information together?</div>
            <div className="map_label_div" style={{backgroundColor: "#f6a5a5", position: "absolute", top: "2120px", left: "175px", maxWidth: "200px"}}>How can this help you in the future?</div>
        </div>
        <div>
            <p><strong>IMPORTANT</strong></p>
            <p>This prototype currently does not have any saving functionality.</p>
            <p>To preserve your progress or moments, we recommend taking screenshots or printing to PDF.</p>
            <p>More features will be added in the future!</p>
        </div>
    </div>
  )
}
