import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContacts = createFakeContact();
    contacts.push(newContacts);
    await writeContacts(contacts);
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

addOneContact();
