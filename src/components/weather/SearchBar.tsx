import { useState } from "react";
import { SearchBarActionsContainer, Button, Input, SearchBarInputContainer, Label, SearchBarContainer, SearchBarInputGroup } from "./style";
import { IOnSearchProps } from "../../types/types";

interface ISearchBarProps {
    onSearch: (data: IOnSearchProps) => void;
}

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
            <SearchBarInputContainer>
                <SearchBarInputGroup>
                    <Label>City:</Label>
                    <Input
                        type="text"
                        placeholder="e.g. London"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </SearchBarInputGroup>
                <SearchBarInputGroup>
                    <Label>Country:</Label>
                    <Input
                        type="text"
                        placeholder="e.g. GB"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                </SearchBarInputGroup>
            </SearchBarInputContainer>
            <SearchBarActionsContainer>
                <Button $primary onClick={handleSearch}>Search</Button>
                <Button onClick={handleClear}>Clear</Button>
            </SearchBarActionsContainer>
        </SearchBarContainer>
    );
};

export default SearchBar;