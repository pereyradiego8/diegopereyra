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
    $("h4").replaceWith(`<h4>El interés generado es de $${new Intl.NumberFormat("de-DE").format(rendimiento)}</h4>`);
    $("h4").css("animation", "aparecer 2s");
    $("h4").css("padding", "1%");
  }
}

let form = document.getElementById("formSimu");
form.addEventListener("submit", function (event){
  event.preventDefault();
});