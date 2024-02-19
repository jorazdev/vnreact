
import PersonTableLg from "./PersonTableLg";
import PersonTableSm from "./PersonTableSm";
import Modal from "../../../components/Modal";
import { useState } from "react";
import PersonForm from "./PersonForm";
import { useAppSelector } from "../../../store/hooks"

const PersonTable = () => {

  const persons = useAppSelector((state) => state.person.persons)

  const [show, setShow] = useState(false)

 
  return(
    <div>
        <button onClick={() => setShow(true)}>
          Modal
        </button>
        <Modal show={show} 
              title="Add person" 
              onShow={() => setShow(false)}>
          <PersonForm onClose={() => setShow(false)}/>
        </Modal>
        <PersonTableLg persons={persons}/>
        <PersonTableSm persons={persons}/>
    </div>
  )
}

export default PersonTable