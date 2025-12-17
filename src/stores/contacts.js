import { reactive, computed } from "vue";
import DB from "@/services/DB";

const contacts = reactive([]);

const formData = reactive({
  addFirstname: "",
  addLastname: "",
  addEmail: "",
});

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

export const store = reactive({
  init,
  contacts,
  formData,
  createContact,
});
