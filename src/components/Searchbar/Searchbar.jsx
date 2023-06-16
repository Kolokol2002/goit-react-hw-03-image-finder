import { Formik } from 'formik';

import {
  ButtonSearch,
  FormSearch,
  HeaderSearch,
  InputSearch,
  IconButtonSearch,
} from './Searchbar.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Searchbar({ sendPhoto }) {
  const onSubmit = (data, tools) => {
    if (data.search === '') {
      toast.warn('Ви нічого не ввели!!!', {
        autoClose: 2000,
        theme: 'dark',
      });
      return;
    }
    sendPhoto(data.search);
    tools.resetForm();
  };
  return (
    <HeaderSearch>
      <Formik initialValues={{ search: '' }} onSubmit={onSubmit}>
        <FormSearch>
          <InputSearch
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ButtonSearch type="submit">
            <IconButtonSearch />
          </ButtonSearch>
        </FormSearch>
      </Formik>
    </HeaderSearch>
  );
}

export default Searchbar;
