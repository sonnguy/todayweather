import { ErrorMessage, ErrorMessageContainer } from "./style";

const SearchErrorMessage = (props: any) => {
    return (
        <ErrorMessageContainer>
            <ErrorMessage>Data not found. Please ensure that the city name or country name is entered correctly.</ErrorMessage>
        </ErrorMessageContainer>
    );
}

export default SearchErrorMessage;
