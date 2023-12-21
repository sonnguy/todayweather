import { useState } from "react";
import { SearchBarActionsContainer, Button, Input, SearchBarInputContainer, Label, SearchBarContainer, SearchBarInputGroup } from "./style";
import { IOnSearchProps } from "../../types/types";

interface ISearchBarProps {
    onSearch: (data: IOnSearchProps) => void;
}

const SearchBar = ({ onSearch }: ISearchBarProps) => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState(false);

    const handleSearch = () => {
        if (!city && !country) {
            setError(true);
            return;
        }
        onSearch({ city, country });
        setError(false);
    };

    const handleEnterKey = (event: any) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleClear = () => {
        setCity('');
        setCountry('');
        setError(false);
    };

    return (
        <SearchBarContainer>
            <SearchBarInputContainer>
                <SearchBarInputGroup>
                    <Label>City:</Label>
                    <Input
                        $error={error && !city}
                        type="text"
                        placeholder="e.g. London"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        onKeyDown={handleEnterKey}
                    />
                </SearchBarInputGroup>
                <SearchBarInputGroup>
                    <Label>Country:</Label>
                    <Input
                        $error={error && !country}
                        type="text"
                        placeholder="e.g. GB"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        onKeyDown={handleEnterKey}
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