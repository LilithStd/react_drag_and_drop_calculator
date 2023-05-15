import { combineReducers, configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculator/calculatorSlice';


export const rootReducer = combineReducers({
  calculatorReducer
});

export const setupStore = ()  =>  {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']