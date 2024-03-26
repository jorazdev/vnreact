
import PersonTableLg from "./PersonTableLg";
import PersonTableSm from "./PersonTableSm";
import Modal from "../../../components/Modal";
import { useState } from "react";
import PersonForm from "./PersonForm";
import { useAppSelector } from "../../../store/hooks"
import Drawer from "../../../components/Drawer";

const PersonTable = () => {

  const persons = useAppSelector((state) => state.person.persons)

  const [show, setShow] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
 
  return(
    <div>
        <div className="flex justify-center items-center mt-9 gap-3">
          <button onClick={() => setShow(true)}>
            Modal
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            Drawer { isOpen ? 'Open' : ''}
          </button>
        </div>

        <Drawer isOpen={isOpen} 
          title="Drawer"
          position="right"
          width={500}
          onClose={() => setIsOpen(false)}>
          <PersonForm onClose={() => setIsOpen(false)}/>
        </Drawer>

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