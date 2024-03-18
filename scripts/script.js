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
  <style>
          section div {
            font-size: 20px;
            border: 1px solid;
          }
        </style>
        <div style="width: 100%; height: 400px; display: flex">
          <div
            style="
              height: 400px;
              width: 20%;
              line-height: 300px;
              background-color: yellow;
              text-align: center;
            "
          >
            2
          </div>
          <div style="width: 20%; height: 400px"></div>
          <div style="width: 45%; height: 400px">
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
            <div
              style="
                width: 100%;
                height: 300px;
                line-height: 300px;
                text-align: center;
              "
            >
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
          <div style="width: 20%; height: 400px"></div>
        </div>
  `,

  IMG: `
  <img src="images/lab3.png" alt=""/>
  `,
  HTML: `
  &lt;header&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#"&gt;Форми навчання&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;Заходи&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;Про Академію&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;Контакти&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;
        &lt;select id="cities"&gt;
          &lt;option value="kyiv"&gt;Київ&lt;/option&gt;
        &lt;/select&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;div class="courses"&gt;
    &lt;div class="guarantee"&gt;
      &lt;h1&gt;
        КУРСИ ПРОГРАМУВАННЯ &lt;span&gt;З 100% ГАРАНТІЄЮ&lt;/span&gt; ПРАЦЕВL
      &lt;/h1&gt;
      &lt;p&gt;
        З SCHOOL ти отримаєш високооплачувану роботу своєї мрії. Ми готуємо
        висококласних IT-спеціалістів
      &lt;/p&gt;
    &lt;/div&gt;
    &lt;img src="images/school.png" alt="" /&gt;
  &lt;/div&gt;

  &lt;section&gt;
    &lt;h2&gt;ВІДГУКИ ВІД РОБОТОДАВЦІВ&lt;/h2&gt;
    &lt;h1&gt;ПІДТВЕРДЖЕНА ЯКІСТЬ&LT;/h1&gt;
    &lt;p&gt;
      Школа програмування - єдина, що має відгуки від роботодавців, які
      входять до списку найкращих компаній DOU.UA. А випускники курсів з
      інкубатором отримують гарантії працевлаштування впродовж 6 місяців
      після успішного закінчення навчання. Але зазвичай їх забирають до себе
      наші офіційні партнери ще до закінчення курсу.
    &lt;/p&gt;

    &lt;div class="work-feedbacks"&gt;
      &lt;img src="images/feedbacks.png" alt="" /&gt;

      &lt;div class="companies"&gt;
        &lt;img src="images/epam.png" alt="" /&gt;
        &lt;img src="images/incoria.png" alt="" /&gt;
        &lt;img src="images/binariks.png" alt="" /&gt;
        &lt;img src="images/rolique.png" alt="" /&gt;
        &lt;img src="images/eleks.png" alt="" /&gt;
        &lt;img src="images/globallogic.png" alt="" /&gt;
        &lt;img src="images/intetics.png" alt="" /&gt;
        &lt;img src="images/softserve.png" alt="" /&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;p&gt;Відгук INCORA про випускників Okten&lt;/p&gt;
  &lt;/section&gt;

  &lt;div class="programming"&gt;
    &lt;h2&gt;ПОПУЛЯРНІ НАПРЯМКИ&lt;/h2&gt;
    &lt;h1&gt;КУРСІВ ПРОГРАМУВАННЯ&lt;/h1&gt;

    &lt;div class="cards"&gt;
      &lt;div class="card"&gt;
        &lt;img src="images/js.png" alt="" /&gt;
        &lt;h3&gt;JAVASCRIPT&lt;/h3&gt;
        &lt;h4&gt;Комплексний курс&lt;/h4&gt;

        &lt;p&gt;
          Стартовий рівень: початківець&lt;br /&gt;Тривалість: 5-11 місяців&lt;br /&gt;Ціна
          від 14500 грн.
        &lt;/p&gt;

        &lt;h5&gt;Залишилось 3 місця&lt;/h5&gt;

        &lt;a href="#"&gt;Детальніше
        &lt;/a&gt;
        &lt;/div&gt;
        &lt;div class="card"&gt;
          &lt;img src="images/java.png" alt="" /&gt;
          &lt;h3&gt;JAVA&lt;/h3&gt;
          &lt;h4&gt;Комплексний курс&lt;/h4&gt;
    
          &lt;p&gt;
            Стартовий рівень: початківець&lt;br /&gt;Тривалість: 6-11 місяців&lt;br /&gt;Ціна
            від 14500 грн.
          &lt;/p&gt;
    
          &lt;h5&gt;Залишилось 6 місць&lt;/h5&gt;
    
          &lt;a href="#"&gt;Детальніше&lt;/a&gt;
        &lt;/div&gt;
        &lt;div class="card"&gt;
          &lt;img src="images/python.png" alt="" /&gt;
          &lt;h3&gt;PYTHON&lt;/h3&gt;
          &lt;h4&gt;Комплексний курс&lt;/h4&gt;
    
          &lt;p&gt;
            Стартовий рівень: початківець&lt;br /&gt;Тривалість: 6-11 місяців&lt;br /&gt;Ціна
            від 14500 грн.
          &lt;/p&gt;
    
          &lt;h5&gt;Залишилось 4 місця&lt;/h5&gt;
    
          &lt;a href="#"&gt;Детальніше&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    </main>
  `,
  CSS: `
  nav ul {
    display: flex;
    justify-content: space-evenly;
  }

  nav ul li {
    background-color: black;
    font-size: 1.5rem;
    list-style: none;
    padding: 15px;
  }
  nav ul li a {
    color: white;
    text-decoration: none;
  }

  nav ul li select {
    color: white;
    background-color: black;
    border: none;
    font-size: 1.5rem;
    margin: auto 50px;
  }
  .courses {
    display: flex;
    justify-content: space-between;
    margin: 50px;
  }

  .guarantee span {
    color: rgb(33, 59, 206);
  }

  .guarantee p {
    width: 400px;
  }

  section {
    background-color: rgb(234, 242, 245);
  }

  section h1 {
    color: orange;
  }

  section h1,
  section h2 {
    text-align: center;
  }

  section &gt; p:first-of-type {
    width: 500px;
    margin: 0 auto 20px;
  }

  section &gt; p:last-of-type {
    margin: 20px;
  }

  .work-feedbacks {
    display: flex;
    justify-content: space-around;
  }

  .work-feedbacks * {
    margin: 0 20px;
  }
  .programming h2 {
    color: white;
  }

  .programming h1,
  .programming h2 {
    text-align: center;
  }

  .programming h1 {
    color: orange;
  }

  .programming {
    background-color: rgb(27, 27, 27);
  }

  .cards {
    display: flex;
    justify-content: space-around;
  }

  .card {
    width: 350px;
    height: 400px;
    border: 1px solid rgb(72, 72, 72);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card img {
    margin: 10px auto;
  }

  .card h3 {
    color: white;
  }

  .card h4 {
    color: orange;
  }

  .card h5 {
    color: rgb(112, 133, 153);
  }

  .card p {
    color: white;
  }

  .card a {
    margin: auto 0;
    height: 100%;
    border: 1px solid rgb(72, 72, 72);
    width: 100%;
    text-align: center;
    color: white;
    border-radius: 0 0 20px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    text-decoration: none;
  }
  `,
  Conclusion: `
  У ході виконання лабораторної роботи ми отримали практичні навички роботи 
  з версткою сторінок засобами HTML та CSS. Під час розробки макету власного сайту,
  ми використовували блокову верстку, пояснили вибір цього типу макету та базову 
  концепцію верстки сторінок. Робота з таблицями та блоками (плаваючими елементами)
  надала нам можливість порівняти фіксовану та гумову верстку, оцінити переваги та
  недоліки кожного підходу.

Використання технології Flexbox дозволило нам легко організувати розмітку 
елементів на сторінці, забезпечивши гнучкість та ефективне управління їх 
розташуванням. Ми виконали завдання засобами Flexbox, згідно з власними номерами
варіантів, і висвітлили особливості макету кожного студента.

У висновках ми зазначили переваги та недоліки використання таблиць та блоків 
(плаваючих блоків) для створення веб-додатків. Використання таблиць може бути 
зручним для створення рівномірної розмітки, але може виникнути проблема з адаптивністю 
на різних пристроях. Блокова верстка надає більшу гнучкість у керуванні розташуванням 
елементів та працює краще для адаптивного дизайну.

У цілому, виконання лабораторної роботи дозволило нам поглибити знання та навички
з верстки веб-сторінок, ознайомитися з різними типами макетів та вивчити основи
Flexbox, що буде корисним у подальшій роботі з веб-розробкою.
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
              containing.innerHTML = lab3.IMG;
            }
            else if (classelementName == "aside-button8"){
              containing.innerHTML = lab3.HTML;
            }
            else if (classelementName == "aside-button9"){
              containing.innerHTML = lab3.CSS;
            }
            else if (classelementName == "aside-button10"){
              containing.innerHTML = lab3.Conclusion;
            }
            break;
            }
}