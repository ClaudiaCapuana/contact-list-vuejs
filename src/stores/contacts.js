import { reactive, computed, ref } from "vue";
import DB from "@/services/DB";

const contacts = reactive([]);
const searchValue = ref(null);

const formData = reactive({
  addFirstname: "",
  addLastname: "",
  addEmail: "",
});
const editClass = ref(null);

const isCompleted = computed(() => {
  if (formData.addFirstname && formData.addLastname && formData.addEmail) {
    return true;
  } else {
    return false;
  }
});

const createContact = async () => {
  if (isCompleted.value) {
    const newContact = await DB.create(formData);
    contacts.push(newContact);
    resetInput();
    console.table(contacts);
  } else {
    alert("Veuillez remplir tous les champs");
    resetInput();
  }
};

const resetInput = () => {
  formData.addFirstname = "";
  formData.addLastname = "";
  formData.addEmail = "";
};

const init = async (url) => {
  DB.setApiUrl(url);
  contacts.splice(0, contacts.length, ...(await DB.findAll()));
};

const deleteContact = async (id) => {
  await DB.deleteOne(id);
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
  }
};

const updateContact = async (newData) => {
  const response = await DB.updateOne(newData);
  editClass.value = null;
};

const contactCount = computed(() => {
  return contacts.length;
});

const editing = (id) => {
  editClass.value = id;
};

const filteredContacts = computed(() => {
  if (!searchValue.value) {
    return contacts;
  }
  return contacts.filter(
    (contact) =>
      contact.firstname.toLowerCase().includes(searchValue.value) ||
      contact.lastname.toLowerCase().includes(searchValue.value) ||
      contact.email.toLowerCase().includes(searchValue.value)
  );
});

// watch(
//   contacts,
//   () => {
//     filteredContacts.value = contacts;
//   },
//   { deep: true }
// );

export const store = reactive({
  init,
  formData,
  createContact,
  deleteContact,
  updateContact,
  contactCount,
  editing,
  editClass,
  searchValue,
  filteredContacts,
});
