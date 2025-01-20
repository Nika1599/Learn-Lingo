import { db } from './firebase';
import { ref, set } from 'firebase/database';

// Завантаження JSON-файлу
const loadJSONAndUpload = async () => {
  try {
    // Імпортуємо JSON-файл за допомогою `fetch` (працює тільки на фронтенді)
    const response = await fetch('./teachers.json'); // Вказуємо шлях до JSON
    const teachersData = await response.json();

    // Створюємо посилання на колекцію в Realtime Database
    const teachersRef = ref(db, 'teachers');

    // Завантажуємо дані в базу
    await set(teachersRef, teachersData);
    console.log('Teachers data uploaded successfully!');
  } catch (error) {
    console.error('Error uploading teachers data:', error);
  }
};

loadJSONAndUpload();
