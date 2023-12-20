import { RootState } from '../../store/store';
import { HeaderTitle, SearchHistoryAction, SearchHistoryActionIcon, SearchHistoryActions, SearchHistoryCity, SearchHistoryContainer, SearchHistoryInfo, SearchHistoryItem, SearchHistoryTime } from "./style";
import { useDispatch, useSelector } from "react-redux";
import searchIcon from "../../assets/icons/search-icon.png";
import trashIcon from "../../assets/icons/trash-icon.png";
import { ISearchHistory, ISearchHistoryProps, IWeather } from '../../types/types';
import { deleteItem } from '../../store/searchHistoryReducer';
import { formatDate } from '../../utils/dateUtils';
import Icon from '../icons/Icon';

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
                                <Icon name={'cloudy'} size={55} />
                                <div className="ml-4">
                                    <SearchHistoryCity>
                                        {item.weather.city}, {item.weather.country}
                                    </SearchHistoryCity>
                                    <SearchHistoryTime>
                                        {formatDate(item.searchedTime, "HH:mm:ss A")}
                                    </SearchHistoryTime>
                                </div>
                            </SearchHistoryInfo>
                            <SearchHistoryActions>
                                <SearchHistoryAction>
                                    <SearchHistoryActionIcon src={searchIcon} onClick={() => { handleSearch(item.weather) }} />
                                </SearchHistoryAction>
                                <SearchHistoryAction>
                                    <SearchHistoryActionIcon src={trashIcon} onClick={() => { onDelete(item) }} />
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
