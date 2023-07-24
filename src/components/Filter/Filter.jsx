import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        value={filter}
      />
    </Label>
  );
};
