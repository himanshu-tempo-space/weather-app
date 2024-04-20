import React, { useState } from 'react'

const SearchBar = (props) => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.setCity(value)
        setValue('')
        e.target.reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <input id='city-input' onChange={handleChange} placeholder='Search Your City'></input>
            </form>
        </>
    )
}

export default SearchBar