import { useState } from "react";
import { ErrorCloseIcon, ErrorMessage, ErrorMessageContainer } from "./style";

const SearchErrorMessage = () => {
    const [show, setShow] = useState(true);

    const onClose = () => {
        setShow(false)
    }
    if (!show) {
        return <></>
    }
    return (
        <ErrorMessageContainer>
            <ErrorMessage>Data not found. Please ensure that the city name or country name is entered correctly.</ErrorMessage>
            <ErrorCloseIcon onClick={onClose}>x</ErrorCloseIcon>
        </ErrorMessageContainer>
    );
}

export default SearchErrorMessage;
