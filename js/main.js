const app_id = "6e209c57";
const app_key = "f195e25e9575dbf6e995f87f96ddb4a2";
const mensaje = document.querySelector(".mensaje");
fetch(
  `https://api.tmb.cat/v1/transit/parades?app_id=${app_id}&app_key=${app_key}`
)
  .then((response) => response.json())
  .then((dato) => proximaParada(dato));
const proximaParada = ({ features }) => {
  const { properties } = features[0];
  mensaje.textContent = `Proxima circulación (${properties.DESC_TIPUS_PARADA}) con destino (${properties.DESC_PARADA})`;
};
