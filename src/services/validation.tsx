import { FormValidationType } from '../types/FormValidation'
import validator from 'validator'

export class Formvalidation {
    errors: any = {}

    isValid = true

    private functionMappings = [{ key: 'isEmail', fn: 'isEmail' }, { key: 'maxLength', fn: 'isLength', args: true }, { key: 'minLength', fn: 'isLength', args: true }]

    constructor(private validations: FormValidationType[]) { }

    validate(data: any) {

        this.isValid = true

        this.validations.forEach((validation: any) => {

            const field = validation.field

            if (data[field] && !this.errors[field]) {

                let inputVal = data[field]

                this.functionMappings.forEach((mapping) => {
                    let key = mapping.key
                    if (validation[key]) {
                        if (!mapping.args) {
                            if (!validator[mapping.fn](inputVal)) {
                                this.errors[field] = validation.message
                                this.isValid = false
                            }
                        } else {
                            let args = {}
                            switch (key) {
                                case 'minLength':
                                    args = { min: validation.minLength }
                                    break

                                case 'maxLength':
                                    args = { max: validation.maxLength }
                                    break

                                default:
                                    break
                            }

                            if (!validator[mapping.fn](inputVal, args)) {
                                this.errors[field] = validation.message
                                this.isValid = false
                            }
                        }
                    }
                })
            }
        })
        
        return this.isValid;
    }

}


