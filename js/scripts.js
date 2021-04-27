const PopUp = document.getElementById("popUp");
let preces = [];

window.addEventListener("load", () => {
  preces = JSON.parse(localStorage.getItem("preces") || "[]");
  console.log(preces);
  render();
});

document.getElementById("jaunaPrece").addEventListener("click", () => {
  PopUp.style.display = "flex";
});
document.getElementById("pievienotPreci").addEventListener("click", () => {
  PopUp.style.display = "none";

  let prece = { Prece: Prece.value, Daudzums: Daudzums.value };

  Prece.value = "";
  Daudzums.value = "";

  preces.push(prece);

  render();
});
function render() {
  let biblioteka = document.getElementById("biblioteka");
  biblioteka.innerHTML = "";

  for (let i = 0; i < preces.length; i++) {
    let prece = `
            <div class="prece">
                <h3>Prece: ${preces[i].Prece}</h3> 
                <h3>Daudzums: ${preces[i].Daudzums}</h3>
            </div>`;

    biblioteka.innerHTML += prece;
  }

  localStorage.setItem("preces", JSON.stringify(preces));
}
