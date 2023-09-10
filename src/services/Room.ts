import { LocalStorage } from './localStorage'
import { Login } from './User'
const LocalStorageService = new LocalStorage(true);

export async function createRoom(roomName: string,  username: string){
    LocalStorageService.setItem('room', roomName)
    Login(username)
    return roomName;
}
export async function getRoom(){
    const room = LocalStorageService.getItem('room')
    return room;
}
export async function joinRoom(roomName: string){
    LocalStorageService.setItem('room', roomName)
    return roomName
}
export async function leftRoom(){
    LocalStorageService.removeItem('room');
    return true
}