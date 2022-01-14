const contactsOperations = require("./contacts");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(`${id}`);
      console.log(contact);
      break;

    case "add":
      const result = await contactsOperations.addContact(name, email, phone);
      console.log(result);
      break;

    case "remove":
      const newContacts = await contactsOperations.removeContact(`${id}`);
      console.log(newContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "5" });
// invokeAction({
//   action: "add",
//   name: "egor-sokurenko",
//   email: "sokurenko337@gmail.com",
//   phone: "0631152409",
// });
// invokeAction({ action: "remove", id: "ktnl56iwkyezdy2m" });

const arr = hideBin(process.argv);
const { argv } = yargs(arr);

invokeAction(argv);
