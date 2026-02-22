// Simulando uma API sendo consumida através de callback
// O callback recebe dois parâmetros, como se fosse um reject e resolve das Promises

function getUser(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            username: 'john',
            password: 'js1234'
        })
    }, 1000);
}

function getPhoneNumber(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            phoneNumber: '99999-9999',
            ddd: 11
        })
    }, 1000);
}

function getAddress(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            address: 'Rua Juca de Moraes',
            cep: '00000-000',
            number: 222
        })
    }, 1000);
}

getUser((error, user) => {
    if (error) {
        console.error('ERROR in USER', error);
        return;
    }

    getPhoneNumber(user.id, (error1, phoneNumber) => {
        if (error1) {
            console.error('ERROR in USER', error1);
            return;
        }

        getAddress(user.id, (error2, addressUser) => {
            if (error2) {
                console.error('ERROR in USER', error2);
                return;
            }

            console.log(`
            Nome: ${user.username}
            Senha: ${user.password}    
            Telefone: (${phoneNumber.ddd}) ${phoneNumber.phoneNumber}
            Endereço: ${addressUser.address}, ${addressUser.number}, ${addressUser.cep}
            `)
        })
    })
})