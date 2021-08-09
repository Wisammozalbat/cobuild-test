import styled from 'styled-components';

const HomeStyle = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;

  .tasks-list {
    width: 30%;
    height: 100%;
    overflow: auto;
    box-shadow: 0.5rem 0 1rem lightgrey;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;

    .add-task-button {
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 2rem;
      background-color: var(--blue-4);
      box-shadow: 0 0 1rem var(--blue-5);
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      text-transform: uppercase;
      margin-bottom: 2rem;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        background-color: var(--blue-2);
      }
    }
  }

  .task-detail {
    width: 70%;
    height: 100%;
    overflow: auto;
  }
`;

export default HomeStyle;
