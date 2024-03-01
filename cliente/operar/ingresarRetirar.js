export function ingresar(e, user,token) {
    const ingreso =Number( document.getElementById('ingreso').value)
    console.log(ingreso)
    const ingresarUrl = `http://localhost:3000/movements?token=${token}`
    console.log('desde ingresar', e, ingreso, user);
    const movement = {
        amount: ingreso,
        date: new Date().toISOString()
    }
    console.log('desde ingresar', e, ingreso, user);

    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movement) // Convertir el objeto a formato JSON
    };

    // Realizar la solicitud fetch al servidor
    fetch(ingresarUrl, opciones)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error de red');
            }
            return response.json(); // Parsear la respuesta JSON
        })
        .then(data => {
            // Manejar la respuesta del servidor
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });


}
export function retirar(e, user,token) {
    const retirada = document.getElementById('retirada').value
    const retirarUrl = `http://localhost:3000/movements?token=${token}`
    const ingresoObj = {
        amount: -parseInt(retirada),
        date: new Date().toISOString()
    }
    console.log('desde retirar', e, retirada, user);

    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ingresoObj) // Convertir el objeto a formato JSON
    };

    // Realizar la solicitud fetch al servidor
    fetch(retirarUrl, opciones)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error de red');
            }
            return response.json(); // Parsear la respuesta JSON
        })
        .then(data => {
            // Manejar la respuesta del servidor
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

}