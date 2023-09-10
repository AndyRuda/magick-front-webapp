import { LocalStorage } from './localStorage'
const LocalStorageService = new LocalStorage(true);

export async function Login(username: string){
    LocalStorageService.setItem('username', username)
    return username;
}
export async function logOut(){
    LocalStorageService.removeItem('username');
    return true
}
export async function getUserData(){
    const username = LocalStorageService.getItem('username');
    return username
}