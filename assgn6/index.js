fetch("./header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

document.getElementById("imagePanel").addEventListener("click",()=>{
	window.location.href="./browse.html";
});


localStorage.clear();
sessionStorage.clear();