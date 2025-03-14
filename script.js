function daysOfAYear(year) {
  // Leap year is divisible by 4, but not by 100, unless also divisible by 400
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366; // Leap year
  } else {
    return 365; // Non-leap year
  }
}

// Test cases
console.log(daysOfAYear(2022)); // 365
console.log(daysOfAYear(2024)); // 366
console.log(daysOfAYear(1900)); // 365
console.log(daysOfAYear(2000)); // 366
