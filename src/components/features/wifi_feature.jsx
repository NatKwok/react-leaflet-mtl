export default function wifiFeature(feature, layer) {



    if (feature.properties && feature.properties.ID) {
      layer.bindPopup(
        "ID: " +
          feature.properties.ID +
          "<br/>" +
          "Location: " +
          feature.properties.Lieu +
          "<br/>" +
          "Borough: " +
          feature.properties.Arrondissement 
      );
      
    } 
  }
  