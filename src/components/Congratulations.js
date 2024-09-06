import { useState, useEffect } from "react";
import useFormContext from "../hooks/useFormContext";
import PackedCircle from "./PackedCircle";

const Congratulations = () => {

    const { data } = useFormContext();

    const [formattedData, setFormattedData] = useState({
        "name": "root",
        "children": []
    });

    //---------------------------------------------------------------------//
    // Helper function to generate random integers with max and min values //
    //---------------------------------------------------------------------//
    const generateRandNum = (max, min) => {
        return Math.floor(Math.random() * (max- min + 1)) + min
    }

    //--------------------------------------------//
    // Helper function to fill arrays with values //
    //--------------------------------------------//
    const fillArray = (bubble, dataField) => {
    for (var item in data[dataField]) {
            bubble["children"].push({
                "name": data[dataField][item],
                "value": generateRandNum(400, 200)
            })
        }
        return bubble;
    }
    
    //-------------------------------//
    // Handles topic bubble creation //
    //-------------------------------//
    const createTopicBubble = () => {

        const topicBubble = {
            "name": data.moment,
            "value": 700
        }

        return topicBubble;
    }

    //-------------------------------------------------------------//
    // Handles external factors bubble creation (where + withWhom) //
    //-------------------------------------------------------------//
    const createExternalFactorsBubble = () => {

        // Create where bubble //
        const whereBubbleEmpty = {
            "name": "Where",
            "children": []
        };

        const whereBubble = fillArray(whereBubbleEmpty, "momentLocation");

        // Create with whom bubble //
        const withWhomBubbleEmpty = {
            "name": "With whom",
            "children": []
        };

        const withWhomBubble = fillArray(withWhomBubbleEmpty, "anyoneElseInvolved");
        
        // Build parent bubble
        const exFactorsBubble = {
            "name": "External factors",
            "children": [whereBubble, withWhomBubble]
        }

        return exFactorsBubble;
    }
    
    //-------------------------------------------------------------------------------------//
    // Handles internal factors bubble creation (state of being + mental dialogue + needs) //
    //-------------------------------------------------------------------------------------//
    const createInternalFactorsBubble = () => {
    
        // Create state of being bubble //
        const stateOfBeingBubbleEmpty = {
            "name": "State of being",
            "children": []
        };

        const stateOfBeingBubble = fillArray(stateOfBeingBubbleEmpty, "currentState");

        // Create mental dialogue bubble //
        const mentalDialogueBubble = {
            "name": "Mental dialogue",
            "children": [{
            "name": data.mentalDialogue,
            "value": generateRandNum(600, 400)
            }]
        }

        // Create needs bubble //
        const needsBubbleEmpty = {
            "name": "Needs",
            "children": []
        };

        const needsBubble = fillArray(needsBubbleEmpty, "needs");

        // Handle time:
        const timeOrientationBubbleEmpty = {
            "name": "Time orientation",
            "children": []
        };

        var timeOrientationBubble = timeOrientationBubbleEmpty;

        //Avoid outcome
        var outcomeBubble = {};
        var bodyFeelingBubble = {};

        if (["one", "two"].includes(data.avoidOutcome)) {
            timeOrientationBubble = fillArray(timeOrientationBubbleEmpty, "avoidFeeling");
            if (data.avoidOutcomeText !== "") {
                outcomeBubble = {
                    "name": data.avoidOutcomeText,
                    "value": generateRandNum(400, 200)
                };
            }
            bodyFeelingBubble = {
                "name": data.aOBodyFeeling,
                "value": generateRandNum(400, 200)
            };
        } else if (["three", "four"].includes(data.avoidOutcome)) {
            timeOrientationBubble = fillArray(timeOrientationBubbleEmpty, "captureFeeling");
            if (data.captureOutcome !== "") {
                outcomeBubble = {
                    "name": data.captureOutcome,
                    "value": generateRandNum(400, 200)
                };
            }
            bodyFeelingBubble = {
                "name": data.cOBodyFeeling,
                "value": generateRandNum(400, 200)
            };
        } else if (["five"].includes(data.avoidOutcome)) {
            timeOrientationBubble = fillArray(timeOrientationBubbleEmpty, "reflectingFeeling");
                bodyFeelingBubble = {
                "name": data.rFBodyFeeling,
                "value": generateRandNum(400, 200)
            };
        }

        // Create behavioural response bubble //
        const behaviouralResponseBubble = {
            "name": "Behavioural response",
            "children": [{
                "name": data.behaviouralResponse,
                "value": generateRandNum(400, 200)
            }]
        };

        if (Object.keys(outcomeBubble).length > 0) {timeOrientationBubble["children"].push(outcomeBubble)}
        if (Object.keys(bodyFeelingBubble).length > 0) {timeOrientationBubble["children"].push(bodyFeelingBubble)}

        // Build parent bubble
        const inFactorsBubble = {
            "name": "Internal factors",
            "children": [stateOfBeingBubble, mentalDialogueBubble, needsBubble, timeOrientationBubble, behaviouralResponseBubble]
        };

        return inFactorsBubble;
    }
    
    //-----------------------------//
    // Handles graph data creation //
    //-----------------------------//
    const createData = () => {

        const topicBubble = createTopicBubble();
        const exFactorsBubble = createExternalFactorsBubble();
        const inFactorsBubble = createInternalFactorsBubble();

        // If there's a spending decision: 
        //   1. add forWhat to topicBubble if not empty string
        //   2. add howMuch to externalFactors
        if (data.spendingDecision === "yes") {
            if (data.forWhat !== "") {
                exFactorsBubble["children"].push({
                    "name": "For what?",
                    "children": [
                    {
                        "name": data.forWhat,
                        "value": generateRandNum(600, 400)
                    }
                    ]
                })
            }
            exFactorsBubble["children"].push({
                "name": "How much?",
                "children": [
                    {
                    "name": data.howMuch,
                    "value": generateRandNum(600, 400)
                    }
                ]
            })
        }

        //-----------------//
        // Set all bubbles //
        //-----------------//
        // Topic bubble
        setFormattedData(prevFormattedData => ({
            ...prevFormattedData, 
            ["children"]: [...prevFormattedData["children"], topicBubble]
        }));

        // External factors bubble
        setFormattedData(prevFormattedData => ({
            ...prevFormattedData, 
            ["children"]: [...prevFormattedData["children"], exFactorsBubble]
        }));

        // External factors bubble
        setFormattedData(prevFormattedData => ({
            ...prevFormattedData, 
            ["children"]: [...prevFormattedData["children"], inFactorsBubble]
        }));
    }

    useEffect(() => {
        createData();
    }, []);

    const content = (
        <div>
            <div className="content-div">
                <p><strong>Congratulations on completing this exploration, and taking another step toward financial wellness!</strong></p>
            </div>
            <div className="content-div">
                <PackedCircle formattedData={formattedData}></PackedCircle>
            </div>
        </div>
    )

    return content;
}

export default Congratulations;