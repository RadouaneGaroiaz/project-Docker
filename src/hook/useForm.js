import { useState } from "react";
import mysql from "mysql2/promise";

function useForm(props) {

  const PORT = 3000;
  const DB_HOST = process.env.DB_HOST;
  const DB_PORT = process.env.DB_PORT;
  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const DB_NAME = process.env.DB_NAME;

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

  const submitForm = async () => {
    try {
      // create a connection to the MySQL database
      const connection = await mysql.createConnection({
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
      });

      // insert the form data into a table
      const [rows, fields] = await connection.execute(
        "INSERT INTO form_data (name, lastname, email, discordId, story) VALUES (?, ?, ?, ?, ?)",
        [
          formData.data.name,
          formData.data.lastname,
          formData.data.email,
          formData.data.discordId,
          formData.data.story,
        ]
      );

      console.log(rows);
      console.log(fields);

      // close the connection to the MySQL database
      await connection.end();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    formData,
    setDynamicFormData,
    clearForm,
    isValid,
  };
}

export default useForm;