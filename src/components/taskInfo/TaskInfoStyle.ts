import styled from 'styled-components';

export const TaskInfoStyle = styled.div`
  .heading-container {
    position: relative;
    z-index: 1;
  }

  .heading {
    padding: 2rem 4rem;
    background-color: var(--blue-5);
    text-align: center;
    color: white;
    z-index: 1;
    text-transform: capitalize;
  }

  .content {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-size: 1.8rem;
    font-weight: 600;

    &-input {
      width: 100%;
      resize: none;
      font-family: inherit;
      font-size: 1.8rem;
      line-height: 2rem;
      min-height: 9rem;
      overflow: auto;

      &__container {
        width: 100%;
        max-width: 600px;
        position: relative;
        margin-bottom: 4rem;

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          height: 2px;
          border-radius: 2px;
          background-color: var(--blue-1);
        }
      }
    }
  }

  .status-container {
    display: flex;
    position: relative;
    gap: 6rem;
    font-size: 2rem;
    font-weight: 600;
    z-index: 1;
    margin-bottom: 4rem;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      z-index: -1;
      transition: all 0.5s;
      height: 4rem;
      border-radius: 0.5rem;
    }

    &__box {
      cursor: pointer;
      background-color: transparent;
      font-size: inherit;
      font-weight: inherit;
      padding: 0;
      margin: 0;
      outline: none;
      border: none;
    }

    &.left {
      &::before {
        margin-left: -2rem;
        width: 13.4rem;
        background-color: var(--yellow-1);
      }
    }
    &.right {
      &::before {
        margin-left: 13.9rem;
        width: 13.4rem;
        background-color: var(--green-1);
      }
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 4rem;

    .button {
      padding: 1rem 2rem;
      border: none;
      outline: none;
      font-size: 1.6rem;
      font-weight: 600;
      color: white;
      cursor: pointer;
      border-radius: 0.5rem;

      &:disabled {
        background-color: lightgrey;
        cursor: not-allowed;
      }

      &__cancel {
        background-color: var(--red-1);
      }

      &__save {
        background-color: var(--green-1);
      }
    }
  }

  .delete-button {
    position: absolute;
    top: 50%;
    right: 4rem;
    transform: translateY(-50%);
    background-color: var(--red-1);
    color: white;
    padding: 1rem 3rem;
    font-size: 1.8rem;
    font-weight: 600;
    border-radius: 10rem;
    cursor: pointer;
    z-index: 2;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;
