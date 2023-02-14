fetch("http://localhost:8080/my-first-endpoint").then((res) => {
  if (res.ok) {
    res.text().then((respuesta) => {
      document.querySelector("p").innerHTML = respuesta;
    });
  }
});
