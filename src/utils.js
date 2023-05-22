const getRandomInRange = (min, max) => {
    const ranInt = Math.random() * (max - min + 1) + min;
    return Math.floor(ranInt);
  };
  
  export default getRandomInRange;