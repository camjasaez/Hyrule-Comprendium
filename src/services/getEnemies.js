const fetchEnemies = (enemies) => {
  const myEnemies = enemies.map((enemy) => {
    const { id, name, image, description, common_locations } = enemy;
    return { id, name, image, description, common_locations };
  });

  myEnemies.sort((a, b) => a.id - b.id);

  return myEnemies;
};

const getEnemies = async () => {
  const API = `https://botw-compendium.herokuapp.com/api/v2`;
  const response = await fetch(API);
  const myEnemies = await response.json();
  const { data } = myEnemies;
  const { monsters } = data;

  return fetchEnemies(monsters);
};
export default getEnemies;
