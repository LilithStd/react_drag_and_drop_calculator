import { combineReducers, configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculator/calculatorSlice';
import constructorReducer from './constructor/constructorSlice';


export const rootReducer = combineReducers({
  calculatorReducer,
  constructorReducer
});

export const setupStore = ()  =>  {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']