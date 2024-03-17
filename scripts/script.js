let lab1 = {
    Opys: `
    <b>Предметне середовище:</b> Предметним середовищем для лабораторної роботи є розробка веб-сайту для пекарні. 
    Для цього використовується сучасний стек технологій, включаючи HTML, CSS і JavaScript для розробки фронтенду.
    Для управління версіями та спільної роботи над проєктом використовується
    система контролю версій Git та хмарний сервіс GitHub.`,
    Theme: `
    <b>Тема:</b> СТРУКТУРА HTML-ДОКУМЕНТА.ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ.
    
    <b>Мета:</b> придбати практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. 
    Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт. HTML-ДОКУМЕНТІ.
    
    <b>Сайт:</b> https://github.com/Mar4ik10/WebCoworking`,
    Structure: {
        Table: `
        <b>Table:</b>


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

        Form: `
        
        <b>Form</b>
        
        &lt;div class="footer-contacts"&gt;
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
        Image: `
        <b>Images</b>        
        
        &lt;img src="images/logo.png" alt="Лого" /&gt;
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
    Conclusion: `
    В ході лабораторної роботи було створено HTML-документ, який відповідає вимогам теми Структура HTML-документа. 
    Вибір предметної галузі. 
    Робота з посиланнями, таблицями, зображеннями, списками в HTML-документі. 
    Метою цієї роботи було отримання практичних навичок у роботі з HTML-документом та його складовими елементами 
    В результаті виконання лабораторної роботи був створений шаблон звітного HTML-документу, який може використовуватися для відображення результатів інших лабораторних робіт.
    Документ включає в себе структуру HTML з відповідними тегами, посиланнями на зовнішні ресурси, таблиці для представлення даних, зображення для ілюстрації, 
    а також списки та форми для організації інформації та збору даних.  Отриманий результат відповідає поставленим завданням та відображає вміння працювати з різними
    елементами HTML-документу, що відповідає потребам сучасного веб-розвитку.`
}


let lab2 = {
  Theme: `
  <b>Тема</b>: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ
  ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.

  <b>Мета</b>: придбати практичні навички роботи з селекторами, ідентифікаторами,
  списками, різноманітними властивостями кольору і фону, зовнішними та
  внутрішними відступами, плаваючими елементами, оформленням текстових елементів
  
  <b>Сайт:</b> https://github.com/Mar4ik10/WebCoworking
  `,
  Opys: `<h1>Способи підключення:</h1>
        
  <h4>Вкладений CSS:</h4>
  <p>  
  Використовується тег &ltstyle&gt в розділі HTML-документу для включення CSS-коду безпосередньо в сторінку.
  </p>
   <h4>Зовнішній файл CSS:</h4>
   <p>
  CSS-стилі зберігаються в окремому файлі з розширенням css, а потім підключаються до HTML-сторінки за допомогою тегу &ltlink&gt.
</p>
   <h4>Внутрішній CSS:</h4>
   <p>
   Стилі включаються безпосередньо в теги HTML-елементів за допомогою атрибуту style.</p>
  </p>`,
  Selectors: {
    Tags: `<h1>Селектори тегів</h1>
    <p>


      html {
        scroll-behavior: smooth;
    }
    
    header nav {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #E5E6BA;
    }
    <img src="images/tags.png" alt="" width="70%">

    section#Prices h1 {
      text-align: center;
      margin: 40px 0;
      font-size: 70px;
      letter-spacing: 8px;
  }

  section#Time table {
    margin: 30px auto 0;
    padding-bottom: 30px;
    width: 80%;
}`,
    Classes: `
    <h1>Селектори класів</h1>
    <p>.contact-row {
      display: flex;
      justify-content: space-around;
      padding-bottom: 50px;
  }
  
  .contact-place {
      display: flex;
      border: 1px solid;
      padding-right: 10px;
  }

  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #F2AF4C;
    position: relative;
    margin: 20px 0;
}</p>
<img src="images/circle.png" alt="">`,
    Ids: `
<h1>Селектори ідентифікаторів</h1>
<p>section#Service {
  display: flex;
  align-items: center;
}

<img src="images/service.png" alt="" width="40%">


section#Time {
background-color: #FFD2B9;
text-align: center;
overflow-x: auto;
}
</p>`,
    Others: `
<h1>Інші</h1>
<p>nav .nav-buttons {
display: flex;
align-items: center;
}

nav .nav-buttons ul {
display: flex;
list-style: none;
}

nav .nav-buttons ul li > a {
text-decoration: none;
color: black;
font-weight: 700;
font-size: 1.5rem;
margin: 0 10px;
}</p>`
  },
  CSS: `
  <h1>Шрифти</h1>
          <p>
          .price-card h2 {
            font-family: "Roboto serif";
            font-size: 35px;
        }
      </p>

      <h1>Фон</h1>
      <p>section#Time {
        background-color: #FFD2B9;
        text-align: center;
        overflow-x: auto;
    }</p>

    <h1>Контури</h1>
    <p>section#Time table th, td {
      border: 1px solid black;
      font-size: 24px;
  }</p>

  <h1>Для таблиць</h1>
  <p>section#Time table {
    margin: 30px auto 0;
    padding-bottom: 30px;
    width: 80%;
}

section#Time table th {
    background-color: #D9D9D9;
}

section#Time table th, td {
    border: 1px solid black;
    font-size: 24px;
}</p>
  `,
  Conclusion: `
  Під час виконання лабораторної роботи ми успішно ознайомилися з різноманітними
   можливостями CSS для стилізації веб-сторінок. Ми змогли ефективно використовувати 
   різні типи селекторів для вибору елементів, задавати їм стилі, змінювати їх 
   властивості, такі як колір, фон, відступи тощо. Це дає нам можливість створювати 
   стильні та естетично приємні веб-сайти, що відповідають сучасним тенденціям 
   веб-дизайну.
  `
}


let currentelement;
let lastelement;

let containing = document.querySelector("section pre");

function displaylabbuttons(buttonid) {
  if (lastelement) {
    lastelement.style.display = "none";
  }

  currentelement = document.getElementById(buttonid);
  currentelement.style.display = "flex";

  lastelement = currentelement;
}


function displayinfo(button) {
    let parentelement = button.parentNode.id;
    var classelementName = button.className.split(' ')[1]
    
    containing.innerHTML = "";

    switch (parentelement) {
        case "aside-button-lab1":
          if (classelementName == "aside-button1") {
            containing.innerHTML = lab1.Opys;
          }
          else if (classelementName == "aside-button2"){
            containing.innerHTML = lab1.Theme;
          }
          else if (classelementName == "aside-button3"){
            containing.innerHTML = lab1.Structure.Table + "\n" +lab1.Structure.Form + "\n" + lab1.Structure.Image;

          }
          else if (classelementName == "aside-button4"){
            containing.innerHTML = lab1.Conclusion;
          }
          break;

          case "aside-button-lab2":
            if (classelementName == "aside-button1") {
              containing.innerHTML = lab2.Theme;
            }
            else if (classelementName == "aside-button2"){
              containing.innerHTML = lab2.Opys;
            }
            else if (classelementName == "aside-button3"){
              containing.innerHTML = lab2.Selectors.Tags + "\n" +lab2.Selectors.Classes + "\n" + lab2.Selectors.Ids;
  
            }
            else if (classelementName == "aside-button4"){
              containing.innerHTML = lab2.CSS;
            }
            else if (classelementName == "aside-button5"){
              containing.innerHTML = lab2.Conclusion;
            }
            break;

          case "aside-button-lab3":
            if (classelementName == "aside-button1") {
              containing.innerHTML = lab3.Theme;
            }
            else if (classelementName == "aside-button2"){
              containing.innerHTML = lab3.Opys;
            }
            else if (classelementName == "aside-button3"){
              containing.innerHTML = lab3
  
            }
            else if (classelementName == "aside-button4"){
              containing.innerHTML = lab3.CSS;
            }
            else if (classelementName == "aside-button5"){
              containing.innerHTML = lab3.Conclusion;
            }
            break;
            }
}