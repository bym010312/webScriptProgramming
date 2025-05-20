let button = document.querySelector("button");

button.addEventListener("click", () => {
  let tsNode = document.createElement("p");
  let tsTextNode = document.createTextNode("Typescript");
  tsNode.appendChild(tsTextNode);
  
  let basisNode = document.querySelectorAll("p")[2];
  document.body.insertBefore(tsNode, basisNode); //insertBefore(새로운 노드, 기준 노드)
});


