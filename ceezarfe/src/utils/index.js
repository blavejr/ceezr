export function padThreeDigits(num) {
  if (num >= 100) {
    return String(num);
  }
  return String(num).padStart(3, "0");
}

export function getImageUrl(id) {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padThreeDigits(
    id
  )}.png`;
}
