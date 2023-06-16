import { Field, Form } from 'formik';
import styled from 'styled-components';
import { BsFillSearchHeartFill } from 'react-icons/bs';

export const HeaderSearch = styled.header`
  background-color: #4f2ee8;
  border: 1px solid #000;
  justify-content: center;
  padding: 15px;
  display: flex;
`;
export const FormSearch = styled(Form)`
  text-align: center;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;
export const ButtonSearch = styled.button`
  background-color: #f4f2f2;
  border: none;
  padding: 0;
`;
export const IconButtonSearch = styled(BsFillSearchHeartFill)`
  height: 1.3em;
  width: 1.3em;
  fill: #ff4646;
  cursor: pointer;
`;
export const InputSearch = styled(Field)`
  font-family: inherit;
  font-size: inherit;
  color: #646464;
  width: 14em;
  background-color: #f4f2f2;
  border: none;
  border-radius: 30px;
  margin-right: -2rem;
  padding: 0.7rem 1rem;
  transition: all 0.5s ease-in-out;
`;
