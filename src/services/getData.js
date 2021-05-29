const fetchData = (data) => {
  const myData = data.map((dta) => {
    const { id, name, image, description, common_locations } = dta;
    return { id, name, image, description, common_locations };
  });

  myData.sort((a, b) => a.id - b.id);

  return myData;
};

const getData = async (categoryData) => {
  const API = `https://botw-compendium.herokuapp.com/api/v2/category/${categoryData}`;
  try {
    const response = await fetch(API);
    if (response.ok) {
      const myData = await response.json();
      const { data } = myData;
      if (categoryData === 'creatures') {
        const { non_food } = data;
        const { food } = data;
        const creatures = non_food.concat(food);
        return fetchData(creatures);
      }
      return fetchData(data);
    }
  } catch (error) {
    console.error(error);
  }
  return fetchData([]);
};
export default getData;

// equipment
// materials
// monsters
// treasure
