import { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import SearchBar from "./SearchBar";
import SearchHistory from "./SearchHistory";
import WeatherDetail from "./WeatherDetail";
import { HeaderTitle } from "./style";
import { FetchResponse, IOnSearchProps, ISearchHistory, IWeatherResponse, RequestConfig } from "../../types/types";
import SearchErrorMessage from "./SearchErrorMessage";
import SearchLoading from "./SearchLoading";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "../../store/searchHistoryReducer";
import { RootState } from "../../store/store";
import { today } from "../../utils/dateUtils";

const Weather = () => {
    const storedItems = useSelector((state: RootState) => state.searchHistory.searchedItems);
    
    const [url, setUrl] = useState('');

    const dispatch = useDispatch();

    const config: RequestConfig = {
        url: url,
        method: 'GET',
    };
    const { data, error, loading }: FetchResponse<IWeatherResponse> = useFetch<IWeatherResponse>(config);

    const onSearch = ({ city, country }: IOnSearchProps) => {
        if (!city && !country) return;

        const url = `${process.env.REACT_APP_API_URL}/weather?q=${city},${country}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;

        setUrl(url);
    }

    const mappingDataToSearchHistory = (source: IWeatherResponse) => {
        const { id, name, sys } = source;
        const mappedData: ISearchHistory = {
            searchedTime: today(),
            weather: {
                id,
                city: name,
                country: sys?.country
            }
        }
        return mappedData;
    }

    useEffect(() => {
        if (data) {
            const mappedData = mappingDataToSearchHistory(data);

            const index = storedItems.findIndex(
                (o: ISearchHistory) => o.weather.id === mappedData.weather.id
            );
            
            dispatch(index === -1 ? addItem(mappedData) : updateItem(mappedData));
        }
    }, [data])

    return (
        <div>
            <HeaderTitle>
                Today's Weather
            </HeaderTitle>
            <SearchBar onSearch={onSearch} isClear={false}/>
            {loading && <SearchLoading />}
            {(error && !loading) && <SearchErrorMessage />}
            {(data && !loading) && <WeatherDetail data={data} />}
            <SearchHistory onSearch={onSearch} />
        </div>
    );
}

export default Weather;
