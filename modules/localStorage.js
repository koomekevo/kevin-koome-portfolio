/* Local Storage */
const localStorageName = document.getElementById('name');
const localStorageEmail = document.getElementById('email');
const localStoragebtnInsert = document.getElementById('btnInsert');

localStoragebtnInsert.onclick = () => {
  const key = localStorageName.value;
  const { value } = localStorageEmail;

  if (key && value) {
    localStorage.setItem(key, value);
    window.location.reload();
  }
};