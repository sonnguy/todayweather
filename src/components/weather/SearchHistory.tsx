import { RootState } from '../../store/store';
import { HeaderTitle, SearchHistoryAction, SearchHistoryActionIcon, SearchHistoryActions, SearchHistoryCity, SearchHistoryContainer, SearchHistoryInfo, SearchHistoryInfoIcon, SearchHistoryItem, SearchHistoryTime } from "./style";
import { useDispatch, useSelector } from "react-redux";
import searchIcon from "../../assets/icons/search-icon.png";
import trashIcon from "../../assets/icons/trash-icon.png";
import { IOnSearchProps, ISearchHistory, IWeather } from '../../types/types';
import { deleteItem } from '../../store/searchHistoryReducer';
import { formatDate } from '../../utils/dateUtils';
import Icon from '../icons/Icon';

interface ISearchHistoryProps {
    onSearch: (data: IOnSearchProps) => void;
}

const SearchHistory = ({ onSearch }: ISearchHistoryProps) => {
    const items = useSelector((state: RootState) => state.searchHistory.searchedItems);

    const dispatch = useDispatch();

    const onDelete = (item: ISearchHistory) => {
        const text = "Are you sure you want to delete this record?";
        if (window.confirm(text) === true) {
            dispatch(deleteItem(item));
        }
    }

    const handleSearch = ({ city, country }: IWeather) => {
        onSearch({ city, country });
    };

    return (
        <div className="mt-5">
            <HeaderTitle>
                Search History
            </HeaderTitle>
            <SearchHistoryContainer>
                {
                    items.map(item =>
                        <SearchHistoryItem key={item.weather.id}>
                            <SearchHistoryInfo>
                                <SearchHistoryInfoIcon>
                                    <Icon name={item.weather.main} size={55} />
                                </SearchHistoryInfoIcon>
                                <div className="sm:ml-4">
                                    <SearchHistoryCity>
                                        {item.weather.city}, {item.weather.country}
                                    </SearchHistoryCity>
                                    <SearchHistoryTime>
                                        {formatDate(item.searchedTime, "HH:mm:ss A")}
                                    </SearchHistoryTime>
                                </div>
                            </SearchHistoryInfo>
                            <SearchHistoryActions>
                                <SearchHistoryAction onClick={() => { handleSearch(item.weather) }}>
                                    <SearchHistoryActionIcon src={searchIcon} />
                                </SearchHistoryAction>
                                <SearchHistoryAction onClick={() => { onDelete(item) }}>
                                    <SearchHistoryActionIcon src={trashIcon} />
                                </SearchHistoryAction>
                            </SearchHistoryActions>
                        </SearchHistoryItem>
                    )
                }
            </SearchHistoryContainer>
        </div>
    );
}

export default SearchHistory;
