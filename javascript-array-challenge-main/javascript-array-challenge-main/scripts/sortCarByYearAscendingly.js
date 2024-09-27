function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  // Sorting berdasarkan tahun secara ascending
  result.sort((a, b) => a.year - b.year);

  return result;
}
