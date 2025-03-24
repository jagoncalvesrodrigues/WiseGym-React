const messages = {
    text:{
        required:'This field is required',
        wrong:'Only letters and spaces'
    },
    email:{
        required:'This field is required',
        wrong:'Enter a valid email'
    },
    query:{
        required:'Check one option',
    }
};

const patterns = {
    //expresion regular 
    onlyLetters:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
    email:/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
}

const textValidation = {
    required:messages.text.required,
    pattern:{
        value: patterns.onlyLetters,
        message:messages.text.wrong
    }
}

const emailValidation = {
    required:messages.email.required,
    pattern:{
        value:patterns.email,
        message:messages.email.wrong
    }
}

const queryValidation = {
    required:messages.query.required,
}

export const FORM_VALIDATIONS = {
    TEXT:textValidation,
    EMAIL:emailValidation,
    QUERY:queryValidation
}
