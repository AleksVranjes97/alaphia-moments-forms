import React, { useState, useEffect } from 'react'
import useFormContext from "../hooks/useFormContext";

import arrow from '../files/arrow.png';

export default function MomentMap() {

  const { data } = useFormContext();

  return (
    <div>
        <div className="no-bg-div">
            <p>Congratulations on completing another "Moment Exploration"!</p>
            <p>Each moment is a journey unto itself, a constellation of numerous external and internal factors.</p>
            <p>These factors include needs, feelings, motives, behavioural instincts, self-talk, and strategies that merge into behaviour patterns.</p>
            <p>Each time you record a moment, you will deepen your understanding. Over time, with patience and commitment, you will begin to see how the internal and external elements of your life show up in patterns that are uniquely yours.</p>
            <p>Seeing a pattern is the first step in changing a pattern. Your patience and commitment are key. Users who record moments consistently are successful in developing the deep levels of self-discovery needed for meaningful and lasting change.</p>
            
            <div style={{display: "flex", flexDirection: "horizontal"}}>
                <p className='underlined_p'><strong>Explore your moment journey</strong></p>
                <div className='map_label_div' style={{backgroundColor: "#fafecc", marginLeft: "12px", marginTop: "19px", paddingTop: "2px", paddingBottom: "0px"}}>
                    <img className="arrow-img" src={arrow} alt=""></img>
                </div>
            </div>
        </div>
        <div className='lines-div'>

            {/* momentLocation */}
            <div className="img-div" style={{marginLeft: "65px", marginTop: "75px", background: "#e3ec63"}}></div>
            <div className="map_label_div" style={{backgroundColor: "#e3ec63", marginLeft: "85px", marginTop: "100px"}}>I was / I'm</div>
            <div className="map_label_div" style={{backgroundColor: "#fafecc", marginLeft: "85px", marginTop: "10px", maxWidth: "165px"}}>{data.momentLocation}</div>

            {/* anyoneElseInvolved */}
            <div className="img-div" style={{left: "255px", top: "105px", background: "#e3ec63"}}></div>
            <div className="map_label_div" style={{backgroundColor: "#e3ec63", position: "absolute", top: "130px", left: "275px", maxWidth: "135px"}}>People involved include</div>
            <div className="map_label_div" style={{backgroundColor: "#fafecc", position: "absolute", top: "190px", left: "275px", maxWidth: "130px"}}>{data.anyoneElseInvolved}</div>
            
            {/* currentState */}
            <div className="img-div" style={{left: "198px", top: "300px", background: "#cfdc47"}}></div>
            <div className="map_label_div" style={{backgroundColor: "#cfdc47", position: "absolute", top: "320px", left: "220px", maxWidth: "200px"}}>I was / I'm already feeling</div>
            <div className="map_label_div" style={{backgroundColor: "#ecf3af", position: "absolute", top: "360px", left: "220px", maxWidth: "200px"}}>{data.currentState}</div>
        
            {/* moment */}
            <div className="img-div" style={{left: "148px", top: "470px", background: "#ccd675"}}></div>
            <div className="map_label_div" style={{backgroundColor: "#ccd675", position: "absolute", top: "490px", left: "170px", maxWidth: "200px"}}>I am / I was experiencing the following situation or trigger</div>
            <div className="map_label_div" style={{backgroundColor: "#ecf3af", position: "absolute", top: "570px", left: "170px", maxWidth: "200px"}}>{data.moment}</div>
        
            {/* needs */}
            <div className="img-div" style={{left: "83px", top: "755px", background: "#bbc256"}}></div>
            <div className="map_label_div" style={{backgroundColor: "#bbc256", position: "absolute", top: "775px", left: "105px", maxWidth: "200px"}}>I'm needing</div>
            <div className="map_label_div" style={{backgroundColor: "#e9ecc9", position: "absolute", top: "815px", left: "105px", maxWidth: "130px"}}>{data.needs}</div>
        
            {/* avoidOutcome - Conditional rendering if filled out */}
            {["one", "two"].includes(data.avoidOutcome) ? 
                <>
                    <div className="img-div" style={{left: "248px", top: "710px", background: "#cfd283"}}></div>
                    <div className="map_label_div" style={{backgroundColor: "#cfd283", position: "absolute", top: "730px", left: "270px", maxWidth: "200px"}}>My goal is to prevent</div>
                    <div className="map_label_div" style={{backgroundColor: "#f3f4cf", position: "absolute", top: "770px", left: "270px", maxWidth: "170px"}}>{data.avoidOutcomeText}</div>
                </>
            :
                <></>
            }

            {/* captureOutcome - Conditional rendering if filled out */}
            {["three", "four"].includes(data.avoidOutcome) ? 
                <>
                    <div className="img-div" style={{left: "93px", top: "940px", background: "#f8e13e"}}></div>
                    <div className="map_label_div" style={{backgroundColor: "#f8e13e", position: "absolute", top: "960px", left: "115px", maxWidth: "200px"}}>My goal is to</div>
                    <div className="map_label_div" style={{backgroundColor: "#fef9d1", position: "absolute", top: "1000px", left: "115px", maxWidth: "200px"}}>{data.captureOutcome}</div>
                </>
            :
                <></>
            }

            {/* avoidFeeling - Conditional rendering if filled out */}
            {["one", "two"].includes(data.avoidOutcome) ? 
                <>
                    <div className="img-div" style={{left: "268px", top: "970px", background: "#f7ef98"}}></div>
                    <div className="map_label_div" style={{backgroundColor: "#f7ef98", position: "absolute", top: "990px", left: "290px", maxWidth: "200px"}}>I am trying not to feel</div>
                    <div className="map_label_div" style={{backgroundColor: "#f8f5cc", position: "absolute", top: "1030px", left: "290px", maxWidth: "170px"}}>{data.avoidFeeling}</div>
                </>
            :
                <></>
            }

            {/* captureFeeling - Conditional rendering if filled out */}
            {["three", "four"].includes(data.avoidOutcome) && data.captureFeeling.length > 0 ? 
                <>
                    <div className="img-div" style={{left: "78px", top: "1150px", background: "#f8e13e"}}></div>
                    <div className="map_label_div" style={{backgroundColor: "#f8e13e", position: "absolute", top: "1170px", left: "100px", maxWidth: "200px"}}>I am trying to feel</div>
                    <div className="map_label_div" style={{backgroundColor: "#fef5b6", position: "absolute", top: "1210px", left: "100px", maxWidth: "200px"}}>{data.captureFeeling}</div>
                </>
            :
                <></>
            }

            {/* reflectingFeeling - Conditional rendering if filled out */}
            {data.avoidOutcome === "five" && data.reflectingFeeling.length > 0 ? 
                <>
                    <div className="img-div" style={{left: "298px", top: "1250px", background: "#f5c02c"}}></div>
                    <div className="map_label_div" style={{backgroundColor: "#f5c02c", position: "absolute", top: "1270px", left: "320px", maxWidth: "200px"}}>I currently feel</div>
                    <div className="map_label_div" style={{backgroundColor: "#fef1cd", position: "absolute", top: "1310px", left: "320px", maxWidth: "200px"}}>{data.reflectingFeeling}</div>
                </>
            :
                <></>
            }

            {/* aOBodyFeeling - Conditional rendering if filled out */}
            {["one", "two"].includes(data.avoidOutcome) && data.aOBodyFeeling ? 
                <>
                    <div className="img-div" style={{left: "78px", top: "1380px", background: "#f5bc63"}}></div>
                    <div className="map_label_div" style={{backgroundColor: "#f5bc63", position: "absolute", top: "1400px", left: "100px", maxWidth: "200px"}}>Which I feel in my</div>
                    <div className="map_label_div" style={{backgroundColor: "#fdedd1", position: "absolute", top: "1440px", left: "100px", maxWidth: "200px"}}>{data.aOBodyFeeling}</div>
                </>
            :
                <></>
            }

            {/* cOBodyFeeling - Conditional rendering if filled out */}
            {["three", "four"].includes(data.avoidOutcome) && data.cOBodyFeeling ? 
                <>
                    <div className="img-div" style={{left: "78px", top: "1380px", background: "#f5bc63"}}></div>
                    <div className="map_label_div" style={{backgroundColor: "#f5bc63", position: "absolute", top: "1400px", left: "100px", maxWidth: "200px"}}>Which I feel in my</div>
                    <div className="map_label_div" style={{backgroundColor: "#fdedd1", position: "absolute", top: "1440px", left: "100px", maxWidth: "200px"}}>{data.cOBodyFeeling}</div>
                </>
            :
                <></>
            }

            {/* rFBodyFeeling - Conditional rendering if filled out */}
            {data.avoidOutcome === "five" && data.rFBodyFeeling ? 
                <> 
                    <div className="img-div" style={{left: "78px", top: "1380px", background: "#f5bc63"}}></div>
                    <div className="map_label_div" style={{backgroundColor: "#f5bc63", position: "absolute", top: "1400px", left: "100px", maxWidth: "200px"}}>Which I feel in my</div>
                    <div className="map_label_div" style={{backgroundColor: "#fdedd1", position: "absolute", top: "1440px", left: "100px", maxWidth: "200px"}}>{data.rFBodyFeeling}</div>
                </>
            :
                <></>
            }

            {/* behaviouralResponse */}
            <div className="img-div" style={{left: "73px", top: "1565px", background: "#ed9a32"}}></div>
            <div className="map_label_div" style={{backgroundColor: "#ed9a32", position: "absolute", top: "1585px", left: "95px", maxWidth: "200px"}}>My response to my needs and feelings is</div>
            <div className="map_label_div" style={{backgroundColor: "#fdebd4", position: "absolute", top: "1645px", left: "95px", maxWidth: "180px"}}>{data.behaviouralResponse}</div>
        
            {/* mentalDialogue - Conditional rendering if filled out */}
            {data.mentalDialogue ? 
                <>
                    <div className="img-div" style={{left: "308px", top: "1690px", background: "#ee885b"}}></div>
                    <div className="map_label_div" style={{backgroundColor: "#ee885b", position: "absolute", top: "1710px", left: "330px", maxWidth: "200px"}}>I tell myself that</div>
                    <div className="map_label_div" style={{backgroundColor: "#fce1d1", position: "absolute", top: "1750px", left: "330px", maxWidth: "130px"}}>{data.mentalDialogue}</div>
                </>
            :
                <></>
            }

            {/* forWhat / howMuch - Conditional rendering if filled out */}
            {data.spendingDecision === "yes" ? 
                <>
                    <div className="img-div" style={{left: "88px", top: "1830px", background: "#e26e5a"}}></div>
                    <div className="map_label_div" style={{backgroundColor: "#e26e5a", position: "absolute", top: "1850px", left: "110px", maxWidth: "230px"}}>I also spent / am considering spending {data.howMuch} on </div>
                    <div className="map_label_div" style={{backgroundColor: "#fbe0d3", position: "absolute", top: "1910px", left: "110px", maxWidth: "200px"}}>{data.forWhat}</div>
                </>
            :
                <></>
            }

            <div className="map_label_div" style={{backgroundColor: "#f8ac8a", position: "absolute", top: "2013px", left: "150px", maxWidth: "250px", textAlign: "center"}}>What do you notice when you see this moment journey unpacked in this way?</div>
            <div className="map_label_div" style={{backgroundColor: "#f6a5a5", position: "absolute", top: "2100px", left: "175px", maxWidth: "200px", textAlign: "center"}}>How can you apply this observation to help you in the future?</div>

            
        </div>
        <div className='no-bg-div'>
            <p><strong>IMPORTANT</strong></p>
            <p>This prototype currently does not have any saving functionality.</p>
            <p>To preserve your progress or moments, we recommend taking screenshots or printing to PDF.</p>
            <p>More features will be added in the future!</p>
        </div>
    </div>
  )
}
