function formatToThreeDigit(number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
}

function calc() {
  let x = Number(document.getElementById("Amount").value);
  let y = Number(document.getElementById("years").value);
  let z = Number(document.getElementById("per").value);
  let r = document.getElementById("12").value;
  const DDD = document.getElementById("Div3");
  const DD = document.getElementById("Div2");
  let MP, total, interest, NP;
  interest = Number(z / (100 * 12));
  NP = Number(y * 12);
  MP = Number(
    (x * (interest * (interest + 1) ** NP)) / ((interest + 1) ** NP - 1)
  );
  total = MP * NP;
  console.log(MP);
  DDD.style.display = "none";
  DD.style.display = "block";

  document.getElementById("MP").innerHTML = formatToThreeDigit(MP.toFixed(2));
  document.getElementById("total").innerHTML = formatToThreeDigit(
    total.toFixed(2)
  );
}
