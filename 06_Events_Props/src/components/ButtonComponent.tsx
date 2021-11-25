
type Props= {
    onClick?: () => void,
    handleClick?: () => void,
    handleClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleClickEventId?: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
}

export const ButtonComponent = (props: Props) => {
    return (
        <>
            <button onClick={props.onClick}>Hello React</button> <br /><br />
            <button onClick={props.handleClick}> handleClick TypeScript</button> <br /><br />
            <button onClick={props.handleClickEvent}> Click Event</button> <br /><br />
            {/* <button onClick={(event) => props.handleClickEventId(event, 1)}> Click Event + Id</button> <br /> <br /> */}
            <br />
        </>
    );
}
