console.log("hello world");

function shor() {
  let search = document.getElementById("shortlnk").value;

  if (search === "") {
    document.getElementById("shortlnk").style.outline = "2px solid red";
    document.getElementById("errortext").style.display = "block";
  } else {
    document.getElementById("shortlnk").style.outline = "2px solid black";
    document.getElementById("errortext").style.display = "none";
  }
}
