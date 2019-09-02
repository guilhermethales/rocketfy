import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  border-top: 20px solid rgba(230, 236, 245, 0.5); 
  box-shadow: 0 1px 4px 0 rgba(198, 208, 230, 0.8);
  cursor: grab;
  margin-bottom: 15px;
  padding: 15px;
  position: relative;

  header {
    left: 15px;
    position: absolute;
    top: -5px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    border-radius: 2px;
    height: 25px;
    margin-top: 5px;
    width: 25px;
  }
`;

export const Label = styled.span`
  background: ${props => props.color};
  border-radius: 2px;
  display: inline-block;
  height: 10px;
  width: 10px;
`;