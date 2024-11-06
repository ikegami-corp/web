async function validateAdmin() {
  const inputPassword = document.getElementById("mp").value;

  const response = await fetch('elements/photoLocation.json');
  const data = await response.json();

  // Admin şifresini çözme
  const decryptedMp = data.positions.mp.map(pos => data.encryptedData[pos]).join('');
  const decryptedGp = data.positions.gp.map(pos => data.encryptedData[pos]).join('');

  if (inputPassword === decryptedMp) {
    localStorage.setItem("isAdmin", true);
    enablePostPanel();
    closeModal();
    console.log("Giriş başarılı!");
  } else {
    alert("Hatalı şifre!");
  }
}

// Gönderi ekleme panelini etkinleştirme
function enablePostPanel() {
  document.querySelector(".post-panel").style.display = "block";
}

// Admin modal açma
function showAdminLogin() {
  document.getElementById("adminModal").style.display = "block";
}

// Admin modal kapatma
function closeModal() {
  document.getElementById("adminModal").style.display = "none";
}

// CTRL + P kısayolu ile modal açma
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "x") {
    showAdminLogin();
  }
});
