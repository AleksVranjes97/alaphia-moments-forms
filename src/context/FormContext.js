import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {

    const [page, setPage] = useState(0);
    const [error, setError] = useState(false);
    const [clearModal, setClearModal] = useState(false);

    const [data, setData] = useState({
        keepReading: "true",
        moment: "",
        spendingDecision: "yes",
        forWhat: "",
        howMuch: "",
        
        // moment location array, other field(s), checkbox
        momentLocation: [],
        mLOtherField: "",
        mLOtherFieldOld: "",
        mLOtherCheckbox: false,

        // anyone else involved array, other field(s), checkbox   
        anyoneElseInvolved: [],
        aEIOtherField: "",
        aEIOtherFieldOld: "",
        aEIOtherCheckbox: false,

        // current state array, other field(s), checkbox   
        currentState: [],
        cSOtherField: "",
        cSOtherFieldOld: "",
        cSOtherCheckbox: false,

        mentalDialogue: "",
        
        // needs array, other field(s), checkbox   
        needs: [],
        nOtherField: "",
        nOtherFieldOld: "",
        nOtherCheckbox: false,

        // avoid outcome field, array, other field(s), checkbox, and body field
        avoidOutcome: "one",
        avoidOutcomeText: "",
        avoidFeeling: [],
        aOOtherField: "",
        aOOtherFieldOld: "",
        aOOtherCheckbox: false,
        aOBodyFeeling: "",

        // capture outcome field, array, other field(s), checkbox, and body field
        captureOutcome: "",
        captureFeeling: [],
        cOOtherField: "",
        cOOtherFieldOld: "",
        cOOtherCheckbox: false,
        cOBodyFeeling: "",

        // reflecting feeling field, array, other field(s), checkbox, and body field
        reflectingFeeling: [],
        rFOtherField: "",
        rFOtherFieldOld: "",
        rFOtherCheckbox: false,
        rFBodyFeeling: "",

        behaviouralResponse: "",
    });

    const [formattedData, setFormattedData] = useState({
        "name": "root",
        "children": []
    });

    // Hide prev button on welcome page
    const prevHide = [0, 17].includes(page) && "remove-button";
    
    // Hide next button on results graph
    const nextHide = page === 17 && "remove-button";

    //------------------------------------------------//
    // Change all field values based on element names //
    //------------------------------------------------//
    const handleChange = e => {
        const type = e.target.type;
        const name = e.target.name;
        const value = e.target.value;

        // If checkbox, push value to appropriate array
        if (type === "checkbox") {
            // Add checkbox text to list if not checked
            if (e.target.checked) {
                setData(prevData => ({
                    ...prevData, 
                    [name]: [...prevData[name], value]
                }));
            // Remove checkbox text if already checked
            } else {
                setData(prevData => ({
                    ...prevData,
                    [name]: prevData[name].filter(item => item !== value)
                }));
            }
        // Else, update the value normally
        } else {
            setData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    }

    //--------------------------------------//
    // Handle other field checkbox toggling //
    //--------------------------------------//
    const handleOther = e => {
        const name = e.target.name;
        setData(prevData => ({
            ...prevData,
            [name]: !prevData[name]
        }));
    }

    return (
        <FormContext.Provider value={{page, setPage, error, setError, clearModal, setClearModal, data, setData, formattedData, setFormattedData, prevHide, nextHide, handleChange, handleOther}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext