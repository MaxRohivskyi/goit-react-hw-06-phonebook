import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { getContactsValue } from 'redux/selectors';
import {
  ContactFormWrapper,
  InputField,
  Label,
  Error,
  BtnSubmitForm,
  AddIcon,
} from './ContactForm.styled';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
  });
  const dispatch = useDispatch();

  const contacts = useSelector(getContactsValue);

  const handlerFormSubmit = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    const findContacts = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    !findContacts
      ? dispatch(addContact(contact))
      : alert(`${data.name.name} is already in contacts`);

    reset();
  };

  return (
    <ContactFormWrapper
      onSubmit={handleSubmit(handlerFormSubmit)}
      autoComplete="on"
    >
      <Label htmlFor="name">Name</Label>
      <InputField
        id="name"
        type="text"
        {...register('name', {
          required: 'this is required',
          minLength: {
            value: 6,
            message: 'min length is 6 symbols',
          },
          pattern: {
            value: nameRegExp,
            message: 'Use only text',
          },
        })}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Surname Name"
      />
      {errors.name && <Error>{errors.name?.message}</Error>}
      <Label htmlFor="number">Number</Label>
      <InputField
        id="number"
        type="tel"
        {...register('number', {
          required: 'this is required',
          maxLength: {
            value: 12,
            message: 'max length is 12 symbols',
          },
          pattern: {
            value: phoneRegExp,
            message: 'use only numbers',
          },
        })}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="+38(000)000-00-00"
      />
      {errors.number && <Error>{errors.number?.message}</Error>}
      <BtnSubmitForm type="submit">
        <AddIcon size="24" />
        add contact
      </BtnSubmitForm>
    </ContactFormWrapper>
  );
};
