let lab1 = {
    Opys: `
    <b>Предметне середовище:</b> Предметним середовищем для лабораторної роботи є розробка веб-сайту для пекарні. 
    Для цього використовується сучасний стек технологій, включаючи HTML, CSS і JavaScript для розробки фронтенду.
    Для управління версіями та спільної роботи над проєктом використовується
    система контролю версій Git та хмарний сервіс GitHub.`,
    Theme: `Тема: СТРУКТУРА HTML-ДОКУМЕНТА. 
    ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ.
     Мета: придбати практичні навички роботи з HTML-документом, таблицями, ,зображеннями, посиланнями, списками, формами. 
     Створити шаблон звітного HTML-документом для відображеннярезультатів роботи всіх лабораторних робіт. HTML-ДОКУМЕНТІ.`,
    Structure: {
        Table: `
        &lt;table&gt;
        &lt;tr&gt;
          &lt;th&gt;День&lt;/th&gt;
          &lt;th&gt;Час&lt;/th&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td&gt;Понеділок&lt;/td&gt;
          &lt;td&gt;10:00-18:00&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td&gt;Вівторок&lt;/td&gt;
          &lt;td&gt;10:00-18:00&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td&gt;Середа&lt;/td&gt;
          &lt;td&gt;10:00-18:00&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td&gt;Четвер&lt;/td&gt;
          &lt;td&gt;10:00-18:00&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td&gt;П'ятниця&lt;/td&gt;
          &lt;td&gt;10:00-18:00&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td&gt;Субота&lt;/td&gt;
          &lt;td&gt;Субота&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td&gt;Неділя&lt;/td&gt;
          &lt;td&gt;Вихідний&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/table&gt;
      `,

        Form: `&lt;div class="footer-contacts"&gt;
        &lt;form action="#" method="post"&gt;
          &lt;input
            placeholder="Введіть ваше ім'я"
            type="text"
            name="name"
            id="name"
          /&gt;
          &lt;input
            placeholder="Введіть вашу пошту"
            type="text"
            name="mail"
            id="mail"
          /&gt;
          &lt;textarea
            placeholder="Введіть ваш текст"
            name="footer-text"
            id="footer-text"
            cols="30"
            rows="10"
          &gt;&lt;/textarea&gt;
          &lt;input type="submit" value="Відправити" /&gt;
        &lt;/form&gt;
      &lt;/div&gt;
      `,
        Image: `&lt;img src="images/logo.png" alt="Лого" /&gt;
        &lt;img src="images/coworkingdesna.png" alt="Картинка Коворкінгу" /&gt;
 
        &lt;div class="footer-icons"&gt;
          &lt;a href="https://youtube.com"
            &gt;&lt;img src="images/icons/youtube.png" alt="Youtube"
          /&gt;&lt;/a&gt;
          &lt;a href="https://tiktok.com"
            &gt;&lt;img src="images/icons/tiktok.png" alt="Tiktok"
          /&gt;&lt;/a&gt;
          &lt;a href="https://facebook.com"
            &gt;&lt;img src="images/icons/facebook.png" alt="Facebook"
          /&gt;&lt;/a&gt;
        &lt;/div&gt;
        `,
        
    },
    Conclusion: "В ході лабораторної роботи було створено HTML-документ, який відповідає вимогам теми Структура HTML-документа. Вибір предметної галузі. Робота з посиланнями, таблицями, зображеннями, списками в HTML-документі. Метою цієї роботи було отримання практичних навичок у роботі з HTML-документом та його складовими елементами В результаті виконання лабораторної роботи був створений шаблон звітного HTML-документу, який може використовуватися для відображення результатів інших лабораторних робіт. Документ включає в себе структуру HTML з відповідними тегами, посиланнями на зовнішні ресурси, таблиці для представлення даних, зображення для ілюстрації, а також списки та форми для організації інформації та збору даних.  Отриманий результат відповідає поставленим завданням та відображає вміння працювати з різними елементами HTML-документу, що відповідає потребам сучасного веб-розвитку."
}


let currentelement;
let lastelement;

let containing = document.querySelector("section pre");

function displaylabbuttons(buttonid) {
    if (lastelement){
        lastelement = currentelement;
        lastelement.style.display = "none";
    }
    
    currentelement = document.getElementById(buttonid);
    currentelement.style.display = "flex";
}


function displayinfo(button) {
    let parentelement = button.parentNode.id;
    var classelementName = button.className.split(' ')[1]
    
    console.log(classelementName);

    containing.innerHTML = "";
    console.log(containing);

    switch (parentelement) {
        case "aside-button-lab1":
            if (classelementName == "aside-button1") {
                containing.innerHTML = lab1.Opys;
            }
    }
}