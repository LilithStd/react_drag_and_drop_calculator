import { clearCalculator } from "../store/calculator/calculatorSlice"
import { useAppDispatch } from "../store/hook"

export const ClearResultHandler = () => {
    const dispatch = useAppDispatch()
    dispatch(clearCalculator())
}
