function percentage(min, max, current) {
  if (current <= min) {
    return 0;
  } else if (current >= max) {
    return 100;
  } else {
    return Math.round(((current - min) / (max - min)) * 100);
  }
}

export default percentage;
