import { Formik } from 'formik';

import {
  ButtonSearch,
  FormSearch,
  HeaderSearch,
  InputSearch,
  IconButtonSearch,
} from './Searchbar.styled';

function Searchbar({ sendPhoto }) {
  const onSubmit = (data, tools) => {
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
