
type Props = {
    value?: string,
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({value, handleChange}: Props) => {
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }
    return  ( 
        <>
            <input
                type="text"
                value={value}
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
            />
            
        </>
    );
}
