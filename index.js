async function validateAdmin() {
  const inputPassword = document.getElementById("mp").value; // Admin parolası

  const response = await fetch('elements/photoLocation.json');
  const data = await response.json();

  // mp şifresini çözüyoruz
  const decryptedMp = data.positions.mp.map(pos => data.encryptedData[pos]).join('');
  const decryptedGp = data.positions.gp.map(pos => data.encryptedData[pos]).join('');

  if (inputPassword === decryptedMp) {
    localStorage.setItem("isAdmin", true);
    enablePostPanel();
    closeModal();
    console.log("acces OK");
  } else {
    alert("access denied");
  }
}

// Gönderi ekleme panelini etkinleştirme
function enablePostPanel() {
  document.querySelector(".post-panel").style.display = "block";
}

// A ekranını açma
function showAdminLogin() {
  document.getElementById("adminModal").style.display = "block";
}

// A ekranını kapatma
function closeModal() {
  document.getElementById("adminModal").style.display = "none";
}

// CTRL + P kısayolu ile a açma
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "x") 
  {
    showAdminLogin();
  }
  

  // Yeni gönderi ekleme işlevi
  function addNewPost(title, content, imageUrl) 
  {
    const newPost = document.createElement('article');
    newPost.classList.add('post');
  
    const postTitle = document.createElement('h2');
    postTitle.textContent = title;
  
    const postContent = document.createElement('p');
    postContent.textContent = content;
  
    const postImage = document.createElement('img');
    postImage.src = imageUrl;
    postImage.classList.add('post-image');
  
    newPost.appendChild(postTitle);
    newPost.appendChild(postImage);
    newPost.appendChild(postContent);
  
    document.querySelector('.content').appendChild(newPost);
  }

});
