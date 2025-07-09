const loadButton = document.getElementById('loadButton');
const imageContainer = document.getElementById('imageContainer');

loadButton.addEventListener('click', async () => {
  imageContainer.innerHTML = '';

  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/20');
    if (!response.ok) throw new Error('Ошибка загрузки данных');

    const data = await response.json();
    const images = data.message;

    images.forEach((url) => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Собака';
      img.className = 'gallery__image';
      imageContainer.appendChild(img);
    });
  } catch (error) {
    console.error('Произошла ошибка:', error);
    imageContainer.innerHTML = 'Не удалось загрузить изображения. Попробуйте ещё раз.';
  } 
});