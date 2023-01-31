function myFunction(a, b) {
  let obj = {};

  for (let i = 0; i < a.length; i++) {
    let x = a[i];
    let y = b[i];
    obj[x] = y;
  }

  return obj;
}

console.log(myFunction(["a", "b", "c"], [1, 2, 3]));
console.log(
  myFunction(["a", "b", "c"], [1, function () {}, { name: "khriztian" }])
);
console.log(
  myFunction(
    ["name", "hobbies", "isAdmin"],
    ["khriztian", ["music", "tv series"], false]
  )
);
