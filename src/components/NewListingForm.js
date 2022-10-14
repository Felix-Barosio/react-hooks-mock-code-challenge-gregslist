import React, { useState } from "react";

function NeListingForm({ handleDataUpload }) {
    const [formData, setFormData] = useState({
        description: "",
        location: "",
        image: ""
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleFormsubmit(event) {
        event.preventDefault()
        handleDataUpload(formData)
    }
    return (
        <form onSubmit={handleFormsubmit}>
            <input type="text" name="description" placeholder="Description" onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" onChange={handleChange} />
            <input type="text" name="image" placeholder="Image" onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}

export default NeListingForm;