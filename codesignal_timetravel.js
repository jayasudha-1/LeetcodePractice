function calculateTravelTime(years) {
    let totalTime = 0;
  
    for (let i = 1; i < years.length; i++) {
      if (years[i] === years[i - 1]) {
        totalTime += 0; // No time for same years
      } else if (years[i] > years[i - 1]) {
        totalTime += 1; // 1 hour if next year is later
      } else {
        totalTime += 2; // 2 hours if next year is earlier
      }
    }
  
    return totalTime;
  }
  
  // Example usage:
  const years = [2020, 2021, 2020, 2025, 2018];
  const timeRequired = calculateTravelTime(years);
  console.log("Total time required:", timeRequired, "hours");
  