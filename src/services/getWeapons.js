const fetchWeapons = (weapons) => {
  const myWeapons = weapons.map((weapon) => {
    const { id, name, image, description, common_locations, attack, defense } =
      weapon;
    return { id, name, image, description, common_locations, attack, defense };
  });

  myWeapons.sort((a, b) => a.id - b.id);

  return myWeapons;
};

const getWeapons = async () => {
  const API = `https://botw-compendium.herokuapp.com/api/v2`;
  const response = await fetch(API);
  const myWeapons = await response.json();
  const { data } = myWeapons;
  const { equipment } = data;

  return fetchWeapons(equipment);
};
export default getWeapons;
