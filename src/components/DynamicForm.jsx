import React, {useState} from "react";

const DynamicForm = ({ schema }) => {
    const initialState = schema.reduce((acc, field) => {
        acc[field.label] = "";
        return acc
    }, {})
    const [formData, setFormData] = useState(initialState);
    const [SubmittedData, setSubmittedFormData] = useState(null);

    const handleChange = (e, name) => {
        setFormData({
            ...formData,
            [name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedFormData(formData);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {schema.map((field,index)=>(
                    <div key={index}>
                        <label>
                            {field.label}
                        </label>
                        {field.type === "text" && (
                            <input
                                type="text"
                                value={formData[field.name]}    
                                onChange={(e) => handleChange(e, field.label)}
                                placeholder={`Enter ${field.label}`}
                            />

                        )}
                        {field.type === "number" && (
                            <input
                                type="number"
                                value={formData[field.name]}    
                                onChange={(e) => handleChange(e, field.label)}
                                placeholder={`Enter ${field.label}`}
                            />

                        )}
                        {field.type === "select" && (
                            <select
                                value={formData[field.name]}
                                onChange={(e) => handleChange(e,field.label)}
                                >
                                        <option
                                            value=""
                                        >
                                            Select {field.name}
                                        </option>
                                        {field.options.map((opt, i) => (
                                            <option key={i}>
                                                {opt}
                                            </option>
                                        ))}

                            </select>
                        )}

                    </div>
                ))}
                <button
                    type="Submit"
                >
                    Submit
                </button>
            </form>
            {SubmittedData && (
                <div>
                    <h3>Submitted Data</h3>
                    <pre>
                        {JSON.stringify(SubmittedData,null,2)}
                    </pre>


                </div>
                
            )}
        </div>
    )

}
export default DynamicForm;
