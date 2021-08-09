import styled from 'styled-components';

interface IAddTaskModalStyle {
  isOpen: boolean;
}

export const AddTaskModalStyle = styled.div<IAddTaskModalStyle>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 10;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    filter: blur(4px);
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 8rem 4rem 8rem;
    background-color: white;
    border-radius: 0.5rem;
    position: relative;

    .close-button {
      position: absolute;
      top: 2.3rem;
      right: 3rem;
      width: 3.5rem;
      height: 3.5rem;
      color: var(--red-2);
      cursor: pointer;

      * {
        width: 100%;
        height: 100%;
      }
    }

    &-title {
      margin-bottom: 2rem;
      font-size: 1.4em;
    }

    &-label {
      font-size: 2rem;
      font-weight: 600;
    }

    &-input {
      padding: 1rem;
      border-bottom: 2px solid var(--blue-3);
      margin-bottom: 1rem;

      input {
        font-size: 1.6rem;
        outline: none;
        border: none;
        font-family: inherit;
      }
    }
  }

  .button__accept {
    border: none;
    outline: none;
    color: white;
    font-size: 1.6rem;
    font-family: inherit;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: var(--blue-4);
    margin-top: 1rem;
  }
`;
