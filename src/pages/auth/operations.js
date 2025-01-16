import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from './fireBase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ email, password }, thunkApi) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return userCredential.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const logInUser = createAsyncThunk(
  'auth/logInUser',
  async ({ email, password }, thunkApi) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
      };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, thunkApi) => {
    try {
      await signOut(auth);
      return true;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const checkUserStatus = createAsyncThunk(
  'auth/checkUserStatus',
  async (_, thunkAPI) => {
    try {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(
          auth,
          user => {
            if (user) {
              resolve(user);
            } else {
              resolve(null);
            }
          },
          error => {
            reject(error);
          },
        );
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
