import { useState } from "react";
import { Button, Input, InputContainer, Label, SearchBarContainer } from "./style";
import { ISearchBarProps } from "../../types/types";


const SearchBar = ({ onSearch }: ISearchBarProps) => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const handleSearch = () => {
        onSearch({ city, country });
    };

    const handleClear = () => {
        setCity('');
        setCountry('');
    };

    return (
        <SearchBarContainer>
            <InputContainer>
                <Label>City:</Label>
                <Input
                    type="text"
                    placeholder="e.g. London"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <Label>Country:</Label>
                <Input
                    type="text"
                    placeholder="e.g. GB"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                <Button $primary onClick={handleSearch}>Search</Button>
                <Button onClick={handleClear}>Clear</Button>
            </InputContainer>
        </SearchBarContainer>
    );
};

export default SearchBar;