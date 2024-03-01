import enviarMensaje from './mensajes.js'

export default function solicitarCredito(monto) {
       console.log(`Solicitando crédito para ${monto}`)
       enviarMensaje('se ha registrad su solicitud ,en breve daremos respuesta a su peticion')

}