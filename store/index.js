import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { persistStore, persistReducer } from 'redux-persist';

// Import Reducers
import cartReducer from "./cart";
import wishlistReducer from './wishlist';

const rootReducers = combineReducers({
    cartlist: cartReducer,
    wishlist: wishlistReducer,
});

export const makeStore = (context) => {
    const store = createStore(rootReducers);
    store.__persistor = persistStore(store);
    return store;
};

// export default makeStore;
export const wrapper = createWrapper(makeStore, { debug: true });