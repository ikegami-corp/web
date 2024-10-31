// Sayfa yüklendiğinde konsola mesaj yazdırıyoruz.
console.log('Sayfa başarıyla yüklendi!');

// Örnek yeni post işlevi.
function addNewPost(title, content) {
  const newPost = document.createElement('article');
  newPost.classList.add('post');

  const postTitle = document.createElement('h2');
  postTitle.textContent = title;

  const postContent = document.createElement('p');
  postContent.textContent = content;

  newPost.appendChild(postTitle);
  newPost.appendChild(postContent);
  document.querySelector('.content').appendChild(newPost);
}

// Başlığa tıklandığında mesaj göster.
document.querySelector('header h1').addEventListener('click', () => {
  alert('池上産棄クリーンと開発事業のウェブサイトへようこそ！');
});
