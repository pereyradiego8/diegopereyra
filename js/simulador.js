function calcularRendimiento() {
  let montoInversion = document.getElementById('montoAInvertir').value;
  let plazoInversion = document.getElementById('plazoEnDias').value;
  let tipoInversion = document.getElementById('tipoDeInversion').value;

  if (tipoInversion == 'FCI') {
    porcentaje = 0.34;
    }else if (tipoInversion == 'PLAZOFIJO') {
    porcentaje = 0.37;
    }else if (tipoInversion == 'CAUCION') {
    porcentaje = 0.27;
  }

  if (plazoInversion >= 30 && plazoInversion <= 365) {
    let rendimiento = (montoInversion * porcentaje / 365 * plazoInversion).toFixed(2);
    alert(`El interés generado es de $${new Intl.NumberFormat("de-DE").format(rendimiento)}`);
    }
}