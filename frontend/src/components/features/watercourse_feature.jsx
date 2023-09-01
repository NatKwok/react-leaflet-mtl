export default function watercourseFeature(feature, layer) {
    if (feature.properties && feature.properties.OBJECTID_1) {
      layer.bindPopup(
        "ID: " +
          feature.properties.OBJECTID_1 +
          "<br/>" +
          "Name: " +
          feature.properties.NOM +
          "<br/>" +
          "Type: " +
          feature.properties.TYPE 
      );
    } else {
      layer.bindPopup("Not Found");
    }
  }
  