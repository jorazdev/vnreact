import { decrement, increment } from "../../../store/counterSlice"
import { useAppDispatch } from "../../../store/hooks"

const Counter = () => {

    const dispatch = useAppDispatch()
    
    return(
        <div className="p-5 my-10 ">
            <h1 className="text-sm mb-6">Redux actions</h1>
            <div className="text-center flex justify-center items-center gap-3">
                <button onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <button onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
        
    )
}

export default Counter