export function generateRandomNumber(min: number, max: number){
  const randomNumber = Math.floor(Math.random() * max);
  return randomNumber < min ? min : randomNumber;
}