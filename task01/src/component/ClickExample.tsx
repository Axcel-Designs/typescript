import React, { useState } from 'react'

const ClickExample = () => {
    const [value, setValue] = useState('My name ')


    // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log('Button Clicked');
    //     alert('Button Clicked')
    // }

    const handleChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event?.target.value)
    }

    return (
        <div>
            <input type='text' value={value} placeholder='Write value' onChange={handleChange}/>
            <p>
                you typed: {value}
            </p>
        </div>
    )
}

export default ClickExample
