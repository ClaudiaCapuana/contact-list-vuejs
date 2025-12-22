import { reactive, computed, ref } from "vue";
import DB from "@/services/DB";

const contacts = reactive([]);
const searchValue = ref(null);
const sortSettings = reactive({
  key: null,
  isAsc: true,
});

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

const toggleSort = (key) => {
  console.log(key);
  key = key.toLowerCase();

  if (sortSettings.key === key) {
    sortSettings.isAsc = !sortSettings.isAsc;
  } else {
    sortSettings.key = key;

    sortSettings.isAsc = true;
  }
};

const contactCount = computed(() => {
  return contacts.length;
});

const editing = (id) => {
  editClass.value = id;
};

const filteredContacts = computed(() => {
  let filteredContacts = contacts;
  if (searchValue.value) {
    const filter = searchValue.value.toLowerCase();
    filteredContacts = filteredContacts.filter(
      (contact) =>
        contact.firstname.toLowerCase().includes(filter) ||
        contact.lastname.toLowerCase().includes(filter) ||
        contact.email.toLowerCase().includes(filter)
    );
  }

  if (sortSettings.key) {
    filteredContacts = filteredContacts.sort((a, b) => {
      let valA = a[sortSettings.key].toLowerCase();
      let valB = b[sortSettings.key].toLowerCase();
      if (valA < valB) return sortSettings.isAsc ? -1 : 1;
      if (valA > valB) return sortSettings.isAsc ? 1 : -1;
      return 0;
    });
  }

  return filteredContacts;
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
  sortSettings,
  toggleSort,
});
