const axios = require("axios");
const { Dog, Temper } = require("../db.js");

const getApiData = async () => {
  const dataApi = await axios.get("https://api.thedogapi.com/v1/breeds");
  let result = await dataApi.data.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      temperament: dog.temperament,
      weight_min: parseInt(dog.weight.imperial.split("-")[0]),
      weight_max: parseInt(dog.weight.imperial.split("-")[1]),
      height: dog.height.metric,
      life_span: dog.life_span,
      image: dog.image.url,
    };
  });
  return result;
};

const getDBData = async () => {
  try {
    const DBData = await Dog.findAll({
      include: {
        model: Temper,
        atributes: ["name"],
        trhough: {
          atributes: [],
        },
      },
    });

    let result = await DBData.map((data) => {
      return {
        id: data.id,
        name: data.name,
        weight_min: data.weight_min,
        weight_max: data.weight_max,
        life_span: data.life_span,
        height_min: data.height_min,
        height_max: data.height_max,
        image: data.image,
      };
    });
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAllData = async () => {
  try {
    const dataApi = await getApiData();
    const dataDB = await getDBData();
    const total = dataApi.concat(dataDB);
    return total;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { getAllData };

// const getApiData = async () => {
//     try {
//       let apiData = await axios.get("https://api.thedogapi.com/v1/breeds");

//       let result = apiData.data;

//       if (result.length > 0) {
//         let dogInfo = await result.map((data) => {
//           return {
//             id: data.id,
//             name: data.name,
//             temperament: data.temperament,
//             weight_min: parseInt(data.weight.imperial.split("-")[0]),
//             weight_max: parseInt(data.weight.imperial.split("-")[1]),
//             height_min: parseInt(data.height.imperial.split("-")[0]),
//             height_max: parseInt(data.height.imperial.split("-")[1]),
//             life_span: data.life_span,
//             image: data.image.url,
//           };
//         });
//         return dogInfo;
//       }
//     } catch (error) {
//       console.log(error);
//       return error;
//     }
//   };
