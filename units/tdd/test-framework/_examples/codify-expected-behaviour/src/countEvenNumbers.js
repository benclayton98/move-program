const countEvenNumbers = (list) => {
  return list.filter(num => num % 2 === 0).length;
}

module.exports = countEvenNumbers;
