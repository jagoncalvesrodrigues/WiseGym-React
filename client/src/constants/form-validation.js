const messages = {
    pass:{
        required:'This field is required',
        wrong:'the password must be at least 6 characters long with a special character _ - ? !'
    },
    email:{
        required:'This field is required',
        wrong:'Enter a valid email'
    },
};

const patterns = {
    //expresion regular 
    lettersAndCharacter:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[_\-?!]).{6,}$/,
    email:/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
}

const passValidation = {
    required:messages.pass.required,
    pattern:{
        value: patterns.lettersAndCharacter,
        message:messages.pass.wrong
    }
}

const emailValidation = {
    required:messages.email.required,
    pattern:{
        value:patterns.email,
        message:messages.email.wrong
    }
}


export const FORM_VALIDATIONS = {
    PASS:passValidation,
    EMAIL:emailValidation,
}
