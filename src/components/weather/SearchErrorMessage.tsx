import { useState } from "react";
import { ErrorCloseIcon, ErrorMessage, ErrorMessageContainer } from "./style";

interface IErrorMessageProps {
    message: string
}

const SearchErrorMessage = ({ message }: IErrorMessageProps) => {
    const [show, setShow] = useState(true);

    const onClose = () => {
        setShow(false);
    }
    if (!show) {
        return <></>
    }
    return (
        <ErrorMessageContainer>
            <ErrorMessage>{message}</ErrorMessage>
            <ErrorCloseIcon onClick={onClose}>x</ErrorCloseIcon>
        </ErrorMessageContainer>
    );
}

export default SearchErrorMessage;
