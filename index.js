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

// Başlığa tıklandığında mesaj göster.
document.querySelector('header h1').addEventListener('click', () => {
  alert('池上産棄クリーンと開発事業のウェブサイトへようこそ！');
});

// Form gönderildiğinde yükleme işlevi
document.getElementById('uploadForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

  const formData = new FormData();
  formData.append('image', document.getElementById('image').files[0]);
  formData.append('text', document.getElementById('text').value);

  try {
    const response = await fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const result = await response.json();
      alert('Yükleme başarılı!');
      console.log('Sunucudan Gelen Yanıt:', result);
      // İsteğe bağlı olarak sayfaya yeni bir post ekleyebilirsiniz
      addNewPostWithContent(result.imageUrl, document.getElementById('text').value);
    } else {
      alert('Yükleme başarısız oldu.');
    }
  } catch (error) {
    console.error('Yükleme Hatası:', error);
    alert('Bir hata oluştu.');
  }
});

// Dinamik olarak yeni bir post ekleme işlevi (isteğe bağlı)
function addNewPostWithContent(imageUrl, content) {
  const newPost = document.createElement('article');
  newPost.classList.add('post');

  const postImage = document.createElement('img');
  postImage.src = imageUrl;
  postImage.alt = 'Uploaded Image';
  postImage.classList.add('uploaded-image');

  const postContent = document.createElement('p');
  postContent.textContent = content;

  newPost.appendChild(postImage);
  newPost.appendChild(postContent);

  document.querySelector('.content').appendChild(newPost);
}
