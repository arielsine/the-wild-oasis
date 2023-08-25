import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

// React portal is a feature that essentially allows us to render an element outside of the parent component's DOM structure while still keeping the element in the original position of the component tree. So in other words, with a portal we can basically render a component in any place that we want inside the DOM tree but still leave the component at the same place in the React component tree. And so then things like props keep working normally. And so this is great and generally used for all elements that we want to stay on top of other elements. So things like modal windows, tool tips, menus and so on.
// this worked really great already in the beginning with just regular CSS positioning, so without the portal. And so why do we even need to use this portal? Well, the main reason why a portal becomes necessary is in order to avoid conflicts with the CSS property overflow set to hidden. (all about reusability)
function Modal({ children, onClose }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    //document.querySelector()
    document.body // becomes direct child of body element
  );
}

export default Modal;

// convert to a compound component. And the reason why that is necessary is that this modal that we have built is really not ideal when it comes to the state management and to the way in which we actually render this modal. So remember how we render the modal right here based on this isOpenModal state. Now the problem with this is that we really do not want the component who uses the modal to be responsible for creating this piece of state and to keep track of whether the modal is open or not. So again, it shouldn't be the task of the AddCabin component here to track whether right now the modal should be displayed or not. So instead, the modal component itself should actually know whether it is currently open or not, and so it should keep this state internally. So it should track this basically encapsulated inside the component. And then the component should give us simply a way to open the modal and also a way to pass in the content that we actually want to display inside the modal. So basically we want some button to open the modal, and we want the window itself. So these two components together should form the modal component.
