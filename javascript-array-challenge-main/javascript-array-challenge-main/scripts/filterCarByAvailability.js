function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];
  cars.map(car => {
    if (car.available === true) {
      result.push(car); // Masukkan mobil ke dalam result jika available bernilai true
    }
  });
  return result;
}
