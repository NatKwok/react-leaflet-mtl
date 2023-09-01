export default function cycleFeature(feature, layer) {
    if (feature.properties && feature.properties.ID_CYCL) {
      layer.bindPopup(
        "ID: " +
          feature.properties.ID_CYCL +
          "<br/>" +
          "Region Name: " +
          feature.properties.NOM_ARR_VILLE_R 
      );
    } 
  }
  