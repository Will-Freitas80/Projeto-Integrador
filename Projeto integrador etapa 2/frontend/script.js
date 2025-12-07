fetch("http://localhost:3000/servicos")
  .then(res => res.json())
  .then(data => console.log(data));
