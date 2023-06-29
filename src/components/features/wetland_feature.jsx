export default function wetlandFeature(feature, layer) {
    if (feature.properties && feature.properties.mh_id) {
      layer.bindPopup(
        "ID: " +
          feature.properties.mh_id +
          "<br/>" +
          "Type: " +
          feature.properties.mh_type_dv +
          "<br/>" +
          "Communal: " +
          feature.properties.commu_vege 
      );
    } else {
      layer.bindPopup("Not Found");
    }
  }
  