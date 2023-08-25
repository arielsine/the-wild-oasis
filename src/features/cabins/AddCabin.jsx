import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>

        {/* // we actually want to allow multiple windows. So let's say, for example, we also want one to show a table. So we can then do this. So we have another button to open and another window. So we want the user of the modal component to be able to do this, so basically having multiple modal windows. However, of course, only one of them can be open at the same time. And so therefore each of these buttons needs to know which window it should actually open.
      <Modal.Open opens="table">
      <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="table">
      <CreateCabinForm />
    </Modal.Window> */}
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
