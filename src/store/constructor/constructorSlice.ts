import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CONSTRUCTOR_MODE } from '../../const/calculator'
interface DitemType {
    id:string,
    status:boolean
}

interface ConstructorState {
    constructorMode: boolean,
    mode: string,
    draggableItems:DitemType[]

}

const initialState:ConstructorState = {
    constructorMode: false,
    draggableItems:[],
    mode: CONSTRUCTOR_MODE.RUNTIME
}

export const constructorSlice = createSlice({
    name:  'constructor',
    initialState,
    reducers: {
        constructorMode(state, action:PayloadAction<boolean>) {
            state.constructorMode = action.payload
        },
        pickedElement(state, action:PayloadAction<{id:string,status:boolean}>) {
            if(state.draggableItems.find(element => element.id === action.payload.id && element.status === action.payload.status)) {
                return
            }

            // if(state.draggableItems.find(element => element.id === action.payload.id && element.status !== action.payload.status)) {
            //     const result = state.draggableItems.map((element) => {
            //         if(element.id === action.payload.id && element.status !== action.payload.status ){
            //             return {...element, status: action.payload.status}
            //         }
            //         return element
            //     })
            //     return state.draggableItems = result
            // }
            // if(state.draggableItems.find(element => element.id !== action.payload.id && element.status !== action.payload.status)) {
            //     state.draggableItems = [...state.draggableItems, action.payload]
            // }
            
            
            state.draggableItems = [...state.draggableItems, action.payload]
            console.log(state.draggableItems);
            
        },
        updateStatusPickedElement(state, action:PayloadAction<{id:string,status:boolean}>) {
                if(state.draggableItems.find(element => element.id === action.payload.id && element.status === action.payload.status)) {
                return
            }
            const result = state.draggableItems.map((element) => {
                    if(element.id === action.payload.id && element.status !== action.payload.status ){
                        return {...element, status: action.payload.status}
                    }
                    return element
                })
            state.draggableItems = result
            console.log(state.draggableItems);
        },
        mode(state, action:PayloadAction<string>) {
            state.mode = action.payload
        }
    }
})

export const {constructorMode, pickedElement, mode, updateStatusPickedElement} = constructorSlice.actions

export default constructorSlice.reducer