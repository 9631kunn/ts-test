enum CoffeeSize{
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI"
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

// coffee.size = "mini"
// coffee.size = true
coffee.size = CoffeeSize.VENTI

console.log(CoffeeSize);
console.log(CoffeeSize.TALL);
