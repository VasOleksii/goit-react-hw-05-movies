import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const StyledPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 40px 0;
  font-size: 18px;
  .selected {
    color: #e9e9e9;
    background-color: #589ceb;
    &:hover {
      background-color: #0268dd;
    }
  }
  li {
    list-style-type: none;
    border-radius: 7px;
    color: #e9e9e9;
    background-color: #0f1652;
    &:hover {
      background-color: #0268dd;
      color: #e9e9e9;
    }
  }
  a {
    display: block;
    padding: 5px 10px;
    cursor: pointer;
  }
`;
