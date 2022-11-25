import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import {
  DeleteIcon,
  Btn,
  Text,
  ContactListItemWrapper,
} from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactListItemWrapper>
        <Text>
          {name}: <>{number}</>
        </Text>
        <Btn
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          <DeleteIcon size="20" />
          Delete
        </Btn>
      </ContactListItemWrapper>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
