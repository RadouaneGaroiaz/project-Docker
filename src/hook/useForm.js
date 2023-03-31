import { useState } from "react";
import * as mongoose from 'mongoose';

function useForm(props) {

  const [formData, setFormData] = useState(props);

  const setDynamicFormData = (name, value) => {
    setFormData({
      data: {
        ...formData.data,
        [name]: value,
      },
      error: { ...formData.error, ...validate(name, value) },
    });
  };

  const validate = (name, value) => {
    const error = {};
    if (!value || value === null) {
      error[name] = `${name} is required`;
    } else {
      error[name] = "";
    }
    return error;
  };

  const isValid =
    Object.keys(formData.error).length === Object.keys(formData.data).length &&
    Object.values(formData.error).every((d) => d === "");

  const clearForm = () => {
    setFormData(props);
  };

  const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    discordId: { type: String, required: true },
    story: { type: String, required: true },
  });
  
  const Form = mongoose.model('Form', formSchema);
  
  const submitForm = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/xultimate', { useNewUrlParser: true });
  
      const form = new Form(formData.data);
      const result = await form.save();
  
      console.log(`Inserted ${result.insertedCount} documents into the collection`);
    } catch (err) {
      console.error(err);
    } finally {
      await mongoose.connection.close();
    }
  };

  return {
    formData,
    setDynamicFormData,
    clearForm,
    isValid,
    submitForm
  };
}

export default useForm;
