const categoriesList = document.querySelectorAll('#categories .item');

// 1. Порахувати і вивести кількість категорій
console.log(`Кількість категорій: ${categoriesList.length}`);

// 2. Вивести заголовок та кількість елементів у кожній категорії
categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('ul li').length;
    console.log(`Категорія: ${categoryName}, Кількість елементів: ${categoryItems}`);
});