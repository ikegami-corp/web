// Sayfa yüklendiğinde konsola mesaj yazdırıyoruz.
console.log('Sayfa başarıyla yüklendi!');

// Bir post eklemek için HTML elemanı oluşturuyoruz.
function addNewPost() {
  // Yeni bir article elementi oluşturuyoruz.
  const newPost = document.createElement('article');
  newPost.classList.add('post');

  // Post başlığı oluşturuyoruz.
  const postTitle = document.createElement('h2');
  postTitle.textContent = 'New Dynamic Post';

  // Post içeriği oluşturuyoruz.
  const postContent = document.createElement('p');
  postContent.textContent = 'This is a new post added dynamically using JavaScript.';

  // Postu sayfanın içeriğine ekliyoruz.
  newPost.appendChild(postTitle);
  newPost.appendChild(postContent);

  // İçerik bölümünü buluyoruz ve yeni postu oraya ekliyoruz.
  document.querySelector('.content').appendChild(newPost);
}

// Butona tıklandığında çalışacak fonksiyon.
document.querySelector('header h1').addEventListener('click', () => {
  alert('Welcome to the site!'); // Başlığa tıklandığında bir uyarı mesajı gösteriyoruz.
});

// Sayfa yüklendiğinde otomatik olarak yeni bir post ekliyoruz.
window.onload = () => {
  addNewPost();
};
