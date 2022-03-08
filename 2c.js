const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

const rateProduct = (productId, userId, ratingPoint) => {
  let found = false;
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      for (let j = 0; j < products[i].ratings.length; j++) {
        if (products[i].ratings[j].userId === userId) {
          const rate = { userId, rate: ratingPoint };
          products[i].ratings[j].rate = ratingPoint;
          found = true;
          break;
        }
      }
      if (!found) {
        products[i].ratings.push({ userId, rate: ratingPoint });
      }
    }
  }
};
rateProduct("hedfcg", "zwf8md", 4.5);
rateProduct("aegfal", "ghderc", 5);
console.log(products);

//For showing averaging rating of a particular product.

const avgRating = (productId) => {
  let sum = 0;
  let len;
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      len = products[i].ratings.length;
      for (let j = 0; j < len; j++) {
        if (len === 0) {
          return 0;
        } else {
          sum += products[i].ratings[j].rate;
        }
      }
    }
  }
  console.log(len);
  return sum / len;
};

console.log(avgRating("hedfcg"));

//For give like to a product.

const likeProduct = (productId, userId) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      const likes = products[i].likes;
      const index = products[i].likes.indexOf(userId);
      if (index !== -1) {
        products[i].likes.splice(index, 1);
      } else {
        products[i].likes.push(userId);
      }
    }
  }
};

likeProduct("eedfcf", "ghderc");
likeProduct("eedfcf", "ab12ex");
console.log(products);
