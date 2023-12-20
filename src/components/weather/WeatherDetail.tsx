import { IWeatherDetailProps } from "../../types/types";
import { convertTimestampToDate } from "../../utils/dateUtils";
import { WeatherDetailContainer, WeatherLabel, WeatherLocation, WeatherTextContainer, WeatherText, WeatherIcon } from "./style";

const WeatherDetail = (props: IWeatherDetailProps) => {
    const { data } = props;

    const { main, name, sys, weather, dt } = data;

    const getTemp = () => {
        if (main.temp_max === main.temp_min) {
            return <>{main.temp}&deg;C</>
        }

        return <>{main.temp_min}&deg;C ~ {main.temp_max}&deg;C</>
    }

    const getWeatherIcon = () => {
        return `${process.env.REACT_APP_ICON_URL}/${weather[0]?.icon}.png`;
    }
    return (
        <WeatherDetailContainer>
            <div>
                <WeatherLocation>{name}, {sys?.country}</WeatherLocation>
                <WeatherLocation><WeatherIcon src={getWeatherIcon()} /></WeatherLocation>
                <WeatherTextContainer>
                    <WeatherLabel>Description:</WeatherLabel>
                    <WeatherText>{weather[0]?.description}</WeatherText>
                </WeatherTextContainer>
                <WeatherTextContainer>
                    <WeatherLabel>Temperature:</WeatherLabel>
                    <WeatherText>{getTemp()}</WeatherText>
                </WeatherTextContainer>
                <WeatherTextContainer>
                    <WeatherLabel>Humidity:</WeatherLabel>
                    <WeatherText>{main?.humidity}%</WeatherText>
                </WeatherTextContainer>
                <WeatherTextContainer>
                    <WeatherLabel>Time:</WeatherLabel>
                    <WeatherText>{convertTimestampToDate(dt)}</WeatherText>
                </WeatherTextContainer>
            </div>
        </WeatherDetailContainer>
    );
}

export default WeatherDetail;
