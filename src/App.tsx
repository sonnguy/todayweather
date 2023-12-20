import DefaultLayout from './components/layouts/DefaultLayout';
import Weather from './components/weather/Weather';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Weather />
      </DefaultLayout>
    </Provider>
  );
}

export default App;
