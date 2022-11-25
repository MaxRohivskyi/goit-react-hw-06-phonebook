import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput, FilterWrapper } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handlerFilterList = e => {
    const inputValue = e.currentTarget.value;

    dispatch(addFilter(inputValue));
  };
  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterWrapper>
        <FilterInput
          id="filter"
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handlerFilterList}
        />
      </FilterWrapper>
    </>
  );
};
