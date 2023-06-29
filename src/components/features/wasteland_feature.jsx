export default function wastelandFeature(feature, layer) {
    if (feature.properties && feature.properties.OBJECTID) {
      layer.bindPopup(
        "ID: " +
          feature.properties.OBJECTID +
          "<br/>" +
          "Type: " +
          feature.properties.TYPE +
          "<br/>" +
          "Area: " +
          feature.properties.Shape_Area +
          "sq. feet"
      );
    } else {
      layer.bindPopup("Not Found");
    }
  }
  