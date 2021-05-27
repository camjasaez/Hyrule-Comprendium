const fetchMaterials = (materials) => {
  const myMaterials = materials.map((material) => {
    const {
      id,
      image,
      name,
      common_locations,
      cooking_effect,
      description,
      hearts_recovered,
    } = material;

    return {
      id,
      image,
      name,
      common_locations,
      cooking_effect,
      description,
      hearts_recovered,
    };
  });

  myMaterials.sort((a, b) => a.id - b.id);

  return myMaterials;
};

const getMaterials = async () => {
  const API = `https://botw-compendium.herokuapp.com/api/v2`;
  const response = await fetch(API);
  const myMaterials = await response.json();
  const { data } = myMaterials;
  const { materials } = data;

  return fetchMaterials(materials);
};

export default getMaterials;
