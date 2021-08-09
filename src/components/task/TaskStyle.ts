import styled from 'styled-components';

export const TaskStyle = styled.div`
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: center;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  overflow: hidden;
  position: relative;

  .task-badge {
    padding: 1rem;
    border-radius: 50%;
    background-color: var(--yellow-1);
    font-weight: 600;
    color: white;

    &.done {
      background-color: var(--green-2);
    }
  }

  .task-arrow {
    position: absolute;
    top: 50%;
    right: 2.5rem;
    transform: translate(5rem, -50%);
    transition: all 0.3s;
    opacity: 0;
    color: var(--blue-3);
  }

  &:hover {
    background-color: rgba(222, 240, 255, 0.8);

    .task-arrow {
      opacity: 1;
      transform: translate(0, -50%);
    }
  }
`;
