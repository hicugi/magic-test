const attachFulPath = (key) => `/assets/img/avatars/${key}.jpeg`;

export default {
  left: attachFulPath("wife"),
  right: attachFulPath("hicugi"),

  others: [
    "america",
    "deadpool",
    "girl",
    "hulk",
    "ironman",
    "spiderman",
    "tor",
  ].map(attachFulPath),
};
