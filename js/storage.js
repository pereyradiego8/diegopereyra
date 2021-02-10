let objeto = [
    {
        "Tipo de inversión" : "Plazo Fijo",
        "Rendimiento" : "37%"
    },
    {
        "Tipo de inversión" : "FCI",
        "Rendimiento" : "34%"
    },
    {
        "Tipo de inversión" : "Caucion",
        "Rendimiento" : "27%"
    }
];
localStorage.setItem('Inversiones', JSON.stringify(objeto));
sessionStorage.setItem('Inversiones', JSON.stringify(objeto));