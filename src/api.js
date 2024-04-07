const BASE_URL =
  'https://sky-fitness-pro-3a520-default-rtdb.europe-west1.firebasedatabase.app';

//Запрос на текущего пользователя
export async function getCurrentUser(currentId) {
    const response = await fetch(BASE_URL + `/users/${currentId}.json`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Ошибка сервера');
    }
    const newData = await response.json();
    return newData;
  }
  
  //Запрос на шаблоны всех курсов для пользователей
  export async function getUsersCourses() {
    const response = await fetch(BASE_URL + `/usersCourses.json`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Ошибка сервера');
    }
    const newData = await response.json();
  
    return newData;
  }