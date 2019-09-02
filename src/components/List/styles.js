import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 320px;
  height: 100%;
  padding: 0 15px;
  opacity: ${props => props.done ? .6 : 1};

  &:not(:first-child) {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    align-items: center;
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 16px;
      font-weight: 500;
      padding: 0 10px;
    }

    button {
      align-items: center;
      background: #3b5bfd;
      border: 0;
      border-radius: 100%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      height: 42px;
      width: 42px;
    }
  }

  ul {
    margin-top: 30px;
  }
`;