function mon(y, z) {
  let dd;
  if (y == 1 || y == 3 || y == 5 || y == 7 || y == 8 || y == 10 || y == 12) {
    dd = 31;
  } else if (
    (y == 2 && z % 4 == 0 && z % 100 != 0) ||
    (y == 2 && z % 400 == 0)
  ) {
    dd = 29;
  } else if (y == 2 && (z % 4 != 0 || z % 100 == 0 || z % 400 != 0)) {
    dd = 28;
  } else {
    dd = 30;
  }
  return dd;
}

function calc() {
  let x, xx, y, z;
  x = Number(document.getElementById("D").value);
  xx = x;
  y = Number(document.getElementById("M").value);
  z = Number(document.getElementById("Y").value);
  let day, month, year, countd, countm, county;
  day = new Date().getDate();
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();
  countd = 0;
  countm = 0;
  county = 0;
  while (x < day || y < month || z < year) {
    countd++;
    x++;
    if (x > mon(y, z)) {
      x = 1;
      y++;
    }

    if (x == xx) {
      countm++;
      countd = 0;
    }

    if (y > 12) {
      y = 1;
      z++;
    }
    if (countm == 12) {
      countm = 0;
      county++;
    }
  }

  document.getElementById("RD").innerHTML = countd;
  document.getElementById("RM").innerHTML = countm;
  document.getElementById("RY").innerHTML = county;
}
