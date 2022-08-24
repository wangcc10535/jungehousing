
import Cookies from 'js-cookie';

const TokenKey = 'Vetervas-Client-Web-Token';

const ExpiresInKey = 'Vetervas-Client-Web-Expires-In';

export function getToken(keyValue) {
  return Cookies.get(keyValue || TokenKey);
}

export function setToken(token, keyValue) {
  return Cookies.set(keyValue || TokenKey, token);
}

export function removeToken(keyValue) {
  return Cookies.remove(keyValue || TokenKey);
}

export function getExpiresIn(keyValue) {
  return Cookies.get(keyValue || ExpiresInKey) || -1;
}

export function setExpiresIn(time, keyValue) {
  return Cookies.set(keyValue || ExpiresInKey, time);
}

export function removeExpiresIn(keyValue) {
  return Cookies.remove(keyValue || ExpiresInKey);
}
