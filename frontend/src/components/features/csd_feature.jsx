export default function csdFeature(feature, layer) {
  if (feature.properties && feature.properties.csd_code) {
    layer.bindPopup(
      "CSD Code: " +
        feature.properties.csd_code +
        "<br/>" +
        "CSD Name: " +
        feature.properties.csd_name_en
    );
  } else {
    console.log(feature.properties.csd_cod);
    layer.bindPopup("Not Found");
  }
}
