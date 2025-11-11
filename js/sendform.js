const sendForm = () => {
    const form = document.querySelector('.modal')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const text = form.querySelector('input[type=text]')
        const tel = form.querySelector('input[type=tel]')
        const email = form.querySelector('input[type=email]')

        const sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        }

        //console.log(sendObj )

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => {
                if (response.status !== 201) {
                    throw new Error()
                } 
                return response.json()
            })
            .then((json) => {
                //console.log(json) 
                window.alert('Спасибо, Ваши данные приняты')

            })
            .catch(error => { 
                //console.warn() 
                window.alert('Что-то не так, попробуйте позже. Ответ сервера: ' + error.message)
            })
            .finally(() => {
                text.value = '';
                tel.value = '';
                email.value = '';
                form.style.display = 'none';
                
            })

    })
}

sendForm()

/* Fetch Get */

//  fetch('https://jsonplaceholder.typicode.com/todos/4')
//         .then(response => {
//             if (response.ststus === 400) {
//                 throw new Error('Not found')
//             } return response.json()
//         })
//         .then(json => console.log(json))
//         .then(data => { console.log(data) })
//         .catch(error => { console.warn(error.message) })
//         .finally(()=>{
//             console.log('f');
//         })