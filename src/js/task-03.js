const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl=document.querySelector('.gallery');

const markup = images
  .map((image) => `<li><img src= ${image.url} alt=${image.alt}/></li>`)
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);
galleryEl.style.display = "flex" 
galleryEl.style.listStyleType = "none" 
const itemEl = document.querySelectorAll('img')
for (const item of itemEl) {
  item.style.width = "500px"
  item.style.height = "300px"
  item.style.margin = "5px"
  }
console.log(galleryEl)