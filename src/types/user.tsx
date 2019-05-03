export default interface User{
    id? : string;
    name: string;
    email: string;
    username: string;   
    password? : string;
}

export interface LoginFields{
    email: string;
    password: string
}