import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from './fireBase';
import { getDatabase, ref, get } from 'firebase/database';
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
      return {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
      };
    } catch (error) {
      console.error('Error during registration:', error.message);
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

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (_, thunkAPI) => {
    try {
      const db = getDatabase();
      const teachersRef = ref(db, 'teachers');
      const snapshot = await get(teachersRef);

      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        return thunkAPI.rejectWithValue('No teachers data available');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
