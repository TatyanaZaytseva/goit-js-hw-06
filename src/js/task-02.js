const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

  const elements = []

  ingredients.forEach((ingredient) => {
  
    // Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
    const itemEl = document.createElement('li')
    // Додасть назву інгредієнта як його текстовий вміст.
    itemEl.textContent = ingredient
    // Додасть елементу клас item.
    itemEl.classList.add('.item')
   

    elements.push(itemEl)
  })

   // Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
  const ingredientsEl = document.querySelector('ul#ingredients')
  ingredientsEl.append(...elements)
  console.log(ingredientsEl)
