(() => {
  // ../library/function-a.js
  var valueA = "function A";
  function functionA() {
    return valueA;
  }

  // src/index.js
  console.log("Hello!", functionA());
})();
