let lab1 = {
    Opys: `
    <pre>
    <b>Предметне середовище:</b> Предметним середовищем для лабораторної роботи є розробка веб-сайту для пекарні. 
    Для цього використовується сучасний стек технологій, включаючи HTML, CSS і JavaScript для розробки фронтенду.
    Для управління версіями та спільної роботи над проєктом використовується
    система контролю версій Git та хмарний сервіс GitHub.
    </pre>`,
    Theme: `
    <pre>
    <b>Тема:</b> СТРУКТУРА HTML-ДОКУМЕНТА.ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ.
    
    <b>Мета:</b> придбати практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. 
    Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт. HTML-ДОКУМЕНТІ.
    
    <b>Сайт:</b> https://github.com/Mar4ik10/WebCoworking
    </pre>`,
    Structure: {
        Table: `
        <pre>
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
      </pre>
      `,

        Form: `
        <pre>
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
      </pre>
      `,
        Image: `
        <pre>
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
        </pre>
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
  <pre>
  <b>Тема</b>: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ
  ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.

  <b>Мета</b>: придбати практичні навички роботи з селекторами, ідентифікаторами,
  списками, різноманітними властивостями кольору і фону, зовнішними та
  внутрішними відступами, плаваючими елементами, оформленням текстових елементів
  
  <b>Сайт:</b> https://github.com/Mar4ik10/WebCoworking
  </pre>
  `,
  Opys: `
  <pre>
  <h1>Способи підключення:</h1>
        
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
  </p>
  </pre>
  `,
  Selectors: {
    Tags: `
    <pre>
    <h1>Селектори тегів</h1>
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
    </pre>
}`,
    Classes: `
    <pre>
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
<img src="images/circle.png" alt="">
</pre>
`,
    Ids: `
    <pre>
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
</p>
</pre>`,
    Others: `
    <pre>
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
}</p>
</pre>
`
  },
  CSS: `
  <pre>
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
</pre>
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

let lab3 = {
  Theme: `
  <pre>
  Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА
ЗАСОБАМИ CSS та FLEXBOX.

Мета:
⎯ придбати практичні навички роботи верстки сторінок засобами CSS, верстки на
основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-
сторінок
⎯ придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX
</pre>
`,
  Maket: `
  <pre>
  <h1>HEADER</h1>
  <img src="images/header.png" alt="" width="500px">

  <h1>BODY</h1>
  <img src="images/body.png" alt="" width="500px">

  <h1>FOOTER</h1>
  <img src="images/footer.png" alt="" width="500px">
  </pre>
  `,
  FixedTable: `
  <pre>
  <style>
            table, th, td {
              border-collapse: collapse;
              border: 1px solid;
              font-size: 35px;
            }
          </style>
          <table style="width: 700px;" >
            <tr>
              <td rowspan="4" style="width: 100px;"></td>
              <td colspan="2" style="width: 400px;padding-left: 10px; text-align: left;color: white;background-color: blue;">1</td>
              <td rowspan="4" style="width: 100px;"></td>
            </tr>
            <tr>
              <td rowspan="2" style="width: 50px;height: 300px;background-color: yellow; color: black;">2</td>
              <td style="width: 100px;height: 100px;background-color: yellow; color: black;">5</td>
            </tr>
            <tr>
              <td >4</td>
            </tr>
            <tr>
              <td colspan="2" style="background-color: blue; color: white;">3</td>
            </tr>
        </table>
        </pre>
  `,
  FlexibleTable:`
  <style>
            table, th, td {
              border-collapse: collapse;
              border: 1px solid;
              font-size: 35px;
            }
          </style>
          
          <table style="width: 100%;" >
            <tr>
              <td rowspan="4" style="width: 100px;"></td>
              <td colspan="2" style="width: 400px;padding-left: 10px; text-align: left;color: white;background-color: blue;">1</td>
              <td rowspan="4" style="width: 100px;"></td>
            </tr>
            <tr>
              <td rowspan="2" style="width: 50px;height: 300px;background-color: yellow; color: black;">2</td>
              <td style="width: 100px;height: 100px;background-color: yellow; color: black;">5</td>
            </tr>
            <tr>
              <td >4</td>
            </tr>
            <tr>
              <td colspan="2" style="background-color: blue; color: white;">3</td>
            </tr>
        </table>
  `,
  FixedDiv: `
  <style>
          section div {
            font-size: 20px;
            border: 1px solid;
          }
        </style>
        <div style="width: 500px; height: 400px; display: flex">
          <div
            style="
              height: 400px;
              width: 100px;
              line-height: 300px;
              background-color: yellow;
              text-align: center;
            "
          >
            2
          </div>
          <div style="width: 100px; height: 400px"></div>
          <div style="width: 200px; height: 400px">
            <div
              style="
                background-color: blue;
                height: 50px;
                line-height: 50px;
                text-align: center;
                color: white;
              "
            >
              1
            </div>
            <div style="height: 300px; line-height: 300px; text-align: center">
              4
            </div>
            <div
              style="
                background-color: blue;
                height: 50px;
                line-height: 50px;
                text-align: center;
                color: white;
              "
            >
              3
            </div>
          </div>
          <div style="width: 100px; height: 400px"></div>
        </div>
  `,
  FlexibleDiv:`
  
  `
}


let currentelement;
let lastelement;

let containing = document.getElementsByTagName("section")[0];
console.log(containing);

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
              containing.innerHTML = lab3.Maket;
            }
            else if (classelementName == "aside-button3"){
              containing.innerHTML = lab3.FixedTable
            }
            else if (classelementName == "aside-button4"){
              containing.innerHTML = lab3.FlexibleTable;
            }
            else if (classelementName == "aside-button5"){
              containing.innerHTML = lab3.FixedDiv;
            }
            else if (classelementName == "aside-button6"){
              containing.innerHTML = lab3.FlexibleDiv;
            }
            else if (classelementName == "aside-button7"){
              containing.innerHTML = lab3.FixedDiv;
            }
            break;
            }
}