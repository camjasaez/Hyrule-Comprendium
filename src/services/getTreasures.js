const fetchTreasures = (treasures) => {
  const myTreasures = treasures.map((treasure) => {
    const { id, name, image, description, common_locations, drops } = treasure;
    return { id, name, image, description, common_locations, drops };
  });

  myTreasures.sort((a, b) => a.id - b.id);

  return myTreasures;
};

const getTreasures = async () => {
  const API = `https://botw-compendium.herokuapp.com/api/v2`;
  const response = await fetch(API);
  const myTreasures = await response.json();
  const { data } = myTreasures;
  const { treasure } = data;

  return fetchTreasures(treasure);
};
export default getTreasures;
