const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            index: true,
            required: true,
            auto: true,
          },

        firstname:{
            type: String,
            required: true,

        },

        name:{
            type: String,
            required: true,

        },

        pass:{
            type: String,
            required: true,

        },

        dateCreated: {
            type: Date,
            required: true,
            default: Date.now,
        }

    }
)


const geometrySchema = new mongoose.Schema(
  {
      type: String,
      coordinates: [],

  }
)

const wifiSchema = new mongoose.Schema(
  {
      type: String,
          properties: {
              id: String,
              lieu: String,
              type: String,
              arrondissement: String,
              zone_active: String,
              latitude: Number,
              longitude: Number,
              x: Number,
              y: Number,
          },
          geometry: geometrySchema,
  }

)

const wetlandSchema = new mongoose.Schema(
{
    type: String,
        properties: {
            id: Number,
            type: Number,
            commu_vege: String,
        },
        geometry: geometrySchema,
}

)

const watercourseSchema = new mongoose.Schema(
    {
        type: String,
            properties: {
                id: String,
                nom: String,
                type: String,
                length: Number,
                numero_rui: String,
            },
            geometry: geometrySchema,
    }
  
  )

const wastelandSchema = new mongoose.Schema(
    {
        type: String,
            properties: {
                id: Number,
                type: String,
                perimeter: Number,
                area: Number,
                type2: String,
            },
            geometry: geometrySchema,
    }
  
  )

const muralSchema = new mongoose.Schema(
    {
        type: String,
            properties: {
                id: Number,
                artiste: String,
                organisme: String,
                adresse: String,
                annee: String,
                arrondissement: String,
                programme_entente: String,
                latitude: Number,
                longitude: Number,
                image: String,
            },
            geometry: geometrySchema,
    }

)

const cyclepathSchema = new mongoose.Schema(
    {
        type: String,
            properties: {
                id: Number,
                id_trc: Number,
                id2020: Number,
                type_voie_r: Number,
                saisons4_r: String,
                protege_4s_r: String,
                ville_mtl_r: String,
                nom_arr: String,
            },
            geometry: geometrySchema,
    }

)


var userModel = mongoose.model("User", UserSchema);
var cyclepathModel = mongoose.model("cyclepaths", cyclepathSchema);
var muralModel = mongoose.model("murals", muralSchema);
var wastelandModel = mongoose.model("wastelands", wastelandSchema);
var watercourseModel = mongoose.model("watercourses", watercourseSchema);
var wetlandModel = mongoose.model("wetlands", wetlandSchema);
var wifiModel = mongoose.model("wifihotspots", wifiSchema);
// const pointModel = mongoose.model("Points", pointSchema);
module.exports = {userModel, cyclepathModel, muralModel, wastelandModel, watercourseModel, wetlandModel, wifiModel};