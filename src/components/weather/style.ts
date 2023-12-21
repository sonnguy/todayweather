import { keyframes, styled } from "styled-components";

const HeaderTitle = styled.h1`
  font-weight: bold;
  font-size: 23px;
  margin: 0 15px;
  padding-bottom: 10px;
  border-bottom: solid 2px;
`;

// styles for SearchBar
const SearchBarContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 10px;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchBarInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchBarInputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }
`;

const SearchBarActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Input = styled.input<{
  $error?: boolean;
}>`
  padding: 8px;
  margin-right: 10px;
  border: solid 1px ${(props) => (props.$error ? "red" : "#ddd")};
  border-radius: 5px;
  @media (max-width: 768px) {
    min-width: 100%;
    margin-top: 5px;
  }
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;
`;

const Button = styled.button<{
  $primary?: boolean;
}>`
  padding: 8px 16px;
  background-color: ${(props) => (props.$primary ? "#44d7b6" : "#eee")};
  color: ${(props) => (props.$primary ? "white" : "black")};
  border: solid 1px ${(props) => (props.$primary ? "#44d7b6" : "#ddd")};
  cursor: pointer;
  border-radius: 5px;
  min-width: 100px;
  margin-right: 10px;
`;

// styles for Weather detail

const WeatherDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const WeatherLabel = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: #8f8f8f;
  width: 120px;
`;

const WeatherText = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: #333;
`;

const WeatherIcon = styled.img`
  height: 100px;
  width: 100px;
`;

const WeatherLocation = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #8f8f8f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherTextContainer = styled.div`
  display: flex;
`;

// styles for Search History

const SearchHistoryContainer = styled.div`
  padding: 10px;
`;

const SearchHistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
  margin-top: 15px;
  background-color: #fff;
  border-radius: 5px;
  border: solid 1px #ddd;
  &:hover {
    background-color: #44d7b6;
    * {
      color: #fff;
    }
  }
`;

const SearchHistoryInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SearchHistoryInfoIcon = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
`;

const SearchHistoryActions = styled.div`
  display: flex;
  align-items: center;
`;

const SearchHistoryCity = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #333;
`;

const SearchHistoryTime = styled.div`
  font-size: 14px;
  color: #333;
`;

const SearchHistoryAction = styled.div`
  padding: 10px;
  border-radius: 999px;
  background-color: #eee;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;

const SearchHistoryActionIcon = styled.img`
  height: 15px;
  width: 15px;
`;

const SearchNotFoundMessage = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #8f8f8f;
  text-align: center;
  margin: 10px 0;
`;

// styles for loading spinner

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

// styles for Search Error Message

const ErrorMessageContainer = styled.div`
  margin: 0 15px;
  padding: 5px 10px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: #fdeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const ErrorMessage = styled.div`
  font-size: 14px;
  color: #333;
`;

const ErrorCloseIcon = styled.span`
  font-size: 14px;
  color: red;
  cursor: pointer;
  padding: 10px;
`;

export {
  HeaderTitle,
  SearchBarContainer,
  SearchBarInputContainer,
  SearchBarInputGroup,
  SearchBarActionsContainer,
  Input,
  Label,
  Button,
  WeatherDetailContainer,
  WeatherTextContainer,
  WeatherLocation,
  WeatherLabel,
  WeatherText,
  WeatherIcon,
  SearchHistoryContainer,
  SearchHistoryItem,
  SearchHistoryInfo,
  SearchHistoryInfoIcon,
  SearchHistoryActions,
  SearchHistoryCity,
  SearchHistoryTime,
  SearchHistoryAction,
  SearchHistoryActionIcon,
  SearchNotFoundMessage,
  SpinnerContainer,
  Spinner,
  ErrorMessageContainer,
  ErrorMessage,
  ErrorCloseIcon,
};
