import { useMutation } from "@apollo/client"
import { IPerson } from "../../../interfaces/person.model"
import { useForm, SubmitHandler, type FieldValues } from "react-hook-form"
import { UPDATE_PERSON_MUTATION } from "../../../graphql/person/person.query"
import { useAppDispatch } from "../../../store/hooks"
import { addPerson } from "../../../store/personSlice"

interface IPersonFormProps {
    onClose: () => void
}

const PersonForm = ({onClose}: IPersonFormProps) => {

    const [updatePersonMutate, { data, loading, error }] = useMutation(UPDATE_PERSON_MUTATION);
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
      } = useForm()

   const onSubmit = async (fieldValues: FieldValues) => {
    
    const personInput: any = {
        id: 0,
        ...fieldValues
    }

    const res = await updatePersonMutate({ variables: {
        personInput: {
            ...personInput
        }
    } })

    dispatch(addPerson(res.data.updatePerson))
    onClose()
    console.log(res)
   }

    return (
        <form className="flex flex-col justify-center items-center gap-y-2 w-full" 
            onSubmit={handleSubmit(onSubmit)}>
           <input type="text"
                {
                    ...register('lastName', {
                        required: "Last name is required"
                    })
                }
                name="lastName" 
                placeholder="Last Name" 
                className="px-4 py-2 bg-gray-100 w-full" />
                {errors.lastName && (
                    <p className="text-red-500">{`${errors.lastName.message}`}</p>
                )}

           <input type="text"
                {
                    ...register('firstName', {
                        required: "First name is required"
                    })
                }
                name="firstName" 
                placeholder="First Name" 
                className="px-4 py-2 bg-gray-100 w-full"/>
                {errors.firstName && (
                    <p className="text-red-500">{`${errors.firstName.message}`}</p>
                )}

           <input type="text" 
                {
                    ...register('contact', {
                        required: "Contact name is required"
                    })
                }
                name="contact" 
                placeholder="Contact" 
                className="px-4 py-2 bg-gray-100 w-full"/>
                {errors.contact && (
                    <p className="text-red-500">{`${errors.contact.message}`}</p>
                )}

           <button disabled={isSubmitting}
                className=" bg-gray-600 text-sm text-white w-1/3 mt-6">
            Save
           </button>
        </form>
    )
}

export default PersonForm