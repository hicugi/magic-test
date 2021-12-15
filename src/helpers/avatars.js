const attachFulPath = (key) => `/assets/img/avatars/${key}.jpeg`;

export default {
  left: attachFulPath("she"),
  right: attachFulPath("me"),

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
