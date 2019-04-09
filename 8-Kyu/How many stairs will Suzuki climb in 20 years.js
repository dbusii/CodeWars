function stairsIn20(s){
  const allDays = [].concat(...s);
  const days = allDays.reduce((total, amount) => total + amount );
  return days * 20;
}