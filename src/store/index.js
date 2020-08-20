import { createStore } from 'redux';
import rootReducer from '../reducers';

const configureStore = () => {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS__EXTENSION__ &&
            window.__REDUX_DEVTOOLS__EXTENSION__(),
    );
    return store;
};

export default configureStore;
