import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import languageReducer from './language/languageReducer';

const reducers = combineReducers({
  lang: languageReducer
})

const store = createStore(reducers);

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider;
