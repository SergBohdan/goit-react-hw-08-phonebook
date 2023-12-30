import { StyledInput } from 'components/LoginForm/LoginFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatusFilter } from 'redux/contacts/contactsSelectors';
import { setFilter } from 'redux/filterSlice';


export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label >
      Find contacts by name
      <StyledInput
        
        type="text"
        name={filter}
        value={filter}
        onChange={onChange}
        placeholder="Please write name"
      />
    </label>
  );
}
