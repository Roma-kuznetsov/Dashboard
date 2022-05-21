
export const validateEmail = (value) => {
    let error;
    if (!value) {
        error = '*Обязательное поле';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Неподходящий формат';
    }
    return error;
}

export const validatePassword = (value) => {
    let error;
    if (!value) {
        error = '*Обязательное поле';
    } else if (value.length < 6) {
        error = 'Короткий пароль';
    }
    return error;
}

export const validateUsername = (value) => {
    let error;
    if (!value) {
        error = '*Обязательное поле';
    } else if (value.length < 2) {
        error = 'Короткое имя';
    }
    return error;
}
export const validateKey = (value) => {
    let error;
    if (!value) {
        error = '*Обязательное поле';
    } 
    return error;
}