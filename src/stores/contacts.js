import { reactive, computed, ref } from "vue";
import DB from "@/services/DB";

const contacts = reactive([]);

const formData = reactive({
  addFirstname: "",
  addLastname: "",
  addEmail: "",
});
const editClass = ref("");

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
  const index = store.contacts.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    store.contacts.splice(index, 1);
  }
};

const updateContact = async (newData) => {
  const response = await DB.updateOne(newData);
  editClass.value = null;
};

const contactCount = computed(() => {
  return store.contacts.length;
});

const editing = (id) => {
  editClass.value = id;
};

export const store = reactive({
  init,
  contacts,
  formData,
  createContact,
  deleteContact,
  updateContact,
  contactCount,
  editing,
  editClass,
});
