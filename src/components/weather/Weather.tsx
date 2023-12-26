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

        const newUrl = `${process.env.REACT_APP_API_URL}/weather?q=${city},${country}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;

        setUrl(newUrl);
    }

    const mappingDataToSearchHistory = (source: IWeatherResponse) => {
        const { id, name, sys, weather } = source;
        const mappedData: ISearchHistory = {
            searchedTime: today(),
            weather: {
                id,
                city: name,
                country: sys?.country,
                main: weather[0]?.main.toLowerCase()
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
        // Reset the URL to force a re-fetch for the next user behavior 
        if (error || data) {
            setUrl('');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error])

    return (
        <div>
            <HeaderTitle>
                Today's Weather
            </HeaderTitle>
            <SearchBar onSearch={onSearch} />
            {loading && <SearchLoading />}
            {(error && !loading) && <SearchErrorMessage message={"Data not found. Please ensure that the city name or country name is entered correctly."} />}
            {(data && !loading) && <WeatherDetail data={data} />}
            <SearchHistory onSearch={onSearch} />
        </div>
    );
}

export default Weather;
