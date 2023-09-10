
export type key = 'username' | 'room' 

export class LocalStorage {
    constructor(private strict = false){}
    getItem(key: key){
        const value = localStorage.getItem(key)
        if(value && value.length > 0 || !this.strict ){
            return value
        }
        if(this.strict){
            throw new Error('Key is not defined on localstorage')
        }
    }
    setItem(key: key, value: string){
        try {
            localStorage.setItem(key, value) 
            return true
        } catch (error) {
            throw new Error('Error saving ' + key)
        }

    }
    removeItem(key: key){
        try {
            localStorage.removeItem(key)
        } catch (error) {
            throw new Error('Error removing ' + key)
        }
    }
}

