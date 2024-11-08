index.js

console.log('LOADED');

function addNewPost() {
  const newPost = document.createElement('article');
  newPost.classList.add('post');

  const postTitle = document.createElement('h2');
  postTitle.textContent = 'New Dynamic Post';

  const postContent = document.createElement('p');
  postContent.textContent = 'This is a new post added dynamically using JavaScript.';

  newPost.appendChild(postTitle);
  newPost.appendChild(postContent);

  document.querySelector('.content').appendChild(newPost);
}

window.onload = () => {
  addNewPost();
};

// Smooth scroll to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Başlığa tıklandığında mesaj göster.
document.querySelector('header h1').addEventListener('click', () => {
  alert('池上産棄クリーンと開発事業のウェブサイトへようこそ！');
});


