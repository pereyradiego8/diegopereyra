function calcularRendimiento() {
  let montoInversion = $('#montoAInvertir').val();
  let plazoInversion = $('#plazoEnDias').val();
  let tipoInversion = $('#tipoDeInversion').val();

  if (tipoInversion == 'FCI') {
    porcentaje = 0.34;
    }else if (tipoInversion == 'PLAZOFIJO') {
    porcentaje = 0.37;
    }else if (tipoInversion == 'CAUCION') {
    porcentaje = 0.27;
  }

  if (plazoInversion >= 30 && plazoInversion <= 365) {
    let rendimiento = (montoInversion * porcentaje / 365 * plazoInversion).toFixed(2);
    let mensaje = document.createElement("h4");
    mensaje.textContent = `El interés generado es de $${new Intl.NumberFormat("de-DE").format(rendimiento)}`;
    document.body.appendChild(mensaje);
    }
}
h4 {
  animation-duration: 2s;
  animation-name: aparecer;
  padding: 1%;
}