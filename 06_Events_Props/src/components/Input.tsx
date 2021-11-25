import React from "react";

type Props = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: Props) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }
    return  ( 
        <>
            <input
                type="text"
                value={props.value}
                onChange={props.handleChange}
            />
            <br />
            <input
                type="text"
                value={props.value}
                onChange={handleInputChange}
            />
            
        </>
    );
}
