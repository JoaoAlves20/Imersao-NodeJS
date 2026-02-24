// Simulando uma API sendo consumida através de callback
// Refatorando o callback para Promises

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                username: 'john',
                password: 'js1234'
            })
        }, 1000);
    })
}

function getPhoneNumber(idUser) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                phoneNumber: '99999-9999',
                ddd: 11
            })
        }, 1000);
    })
}

function getAddress(idUser) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                address: 'Rua Juca de Moraes',
                cep: '00000-000',
                number: 222
            })
        }, 1000);
    })
}

getUser()
    .then((value) => getPhoneNumber(value.id).then((result) => {
        return {
            usuario: {
                username: value.username,
                password: value.password
            },
            telefone: result
        }
    }))
    .then((value) => getAddress(value.id).then((result) => {
        return {
            usuario: value.usuario,
            telefone: value.telefone,
            endereco: result
        }
    }))
    .then((value) => console.log(value))
    .catch((error) => console.error(error))