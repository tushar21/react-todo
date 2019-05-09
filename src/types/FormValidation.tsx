export interface FormValidationType{
    field : string
    message?: string
    isEmail? : boolean
    isNumber? : boolean
    minLength?: number
    maxLength? : number 
}