import { HTMLInputTypeAttribute } from "react"

interface InputFormProps {
    title: string
    props: HTMLInputTypeAttribute
}
const InputForm = ({title, props}: InputFormProps) => {

    return(
        <div>
            <label className="block font-medium text-sm text-gray-700" />
            <input type='email' 
                name='email'
                placeholder='Email'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]" />                        
        </div>
    )
}

export default InputForm