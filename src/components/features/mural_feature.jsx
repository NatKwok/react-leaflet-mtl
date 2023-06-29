export default function muralFeature(feature, layer) {
    if (feature.properties && feature.properties.id) {
      layer.bindPopup(
        "ID: " +
          feature.properties.id +
          "<br/>" +
          "Artist: " +
          feature.properties.artiste +
          "<br/>" +
          "Organization: " +
          feature.properties.organisme +
          "<br/>" +
          "Year: " +
          feature.properties.annee +
          "<br/>" +
          "Address: " +
          feature.properties.adresse +
          
          "<br/>" +
          "Brough: " +
          feature.properties.arrondissement 
      );
    } 
  }