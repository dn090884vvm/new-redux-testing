import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
} from 'redux/contacts/contactsReducersSlice';
import { nanoid } from 'nanoid';
import { filtered } from 'redux/contacts/contactsReducersSlice';

export const App = () => {
  const contact = useSelector(state => state.xxx);
  const filter = useSelector(state => state.yyy);

  const gettedContacts = contact;
  console.log(filter);
  console.log(contact);

  const dispatch = useDispatch();

  const handlerSubmit = e => {
    e.preventDefault();
    // console.log(e.target.elements.name.value);
    // console.log(e.target.elements.phone.value);

    const newcontact = {
      id: nanoid(),
      name: e.target.elements.name.value,
      phone: e.target.elements.phone.value,
    };
    dispatch(addContact(newcontact));
    e.target.elements.name.value = '';
    e.target.elements.phone.value = '';
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const onInputChange = e => {
    // console.log(e.target.value);
    dispatch(filtered(e.target.value));
  };

  function filteredElements() {
    const normalizedFilter = filter.toLowerCase();
    return gettedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <>
      <input
        type="text"
        name="search"
        value={filter}
        onChange={onInputChange}
      />
      <div>
        React homework template
        <form onSubmit={handlerSubmit}>
          <input type="text" name="name" />
          <input type="text" name="phone" />
          <button type="submit">Add name</button>
        </form>
      </div>

      <ul>
        {filteredElements().map(element => (
          <li key={element.id}>
            <p>{element.name}</p>
            <p>{element.phone}</p>
            <button
              onClick={() => {
                onDeleteContact(element.id);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
