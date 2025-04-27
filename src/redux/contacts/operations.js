import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../auth/operations";

const handleRequest = async (request, thunkAPI) => {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error.message,
      code: error.response?.status,
    });
  }
};

const fetchContact = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    return await handleRequest(() => api.get("/contacts"), thunkAPI);
  }
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    return await handleRequest(
      () => api.post("/contacts", { name, number }),
      thunkAPI
    );
  }
);

const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await api.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        code: error.response?.status,
      });
    }
  }
);

export { fetchContact, addContact, deleteContact };
