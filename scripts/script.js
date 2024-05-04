let lab1 = {
    Opys: `
    <b>Предметне середовище:</b> Предметним середовищем для лабораторної роботи є розробка веб-сайту для пекарні. 
    Для цього використовується сучасний стек технологій, включаючи HTML, CSS і JavaScript для розробки фронтенду.
    Для управління версіями та спільної роботи над проєктом використовується
    система контролю версій Git та хмарний сервіс GitHub.
    `,
    Theme: `
    <b>Тема:</b> СТРУКТУРА HTML-ДОКУМЕНТА.ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ.
    
    <b>Мета:</b> придбати практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. 
    Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт. HTML-ДОКУМЕНТІ.
    
    <b>Сайт:</b> https://github.com/Mar4ik10/WebCoworking
    `,
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
  Opys: `
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
  `,
  Selectors: {
    Tags: `
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
<img src="images/circle.png" alt="">
`,
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
</p>
`,
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
}</p>
`
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

let lab3 = {
  Theme: `
  <div class="center">
    <h1>Тема</h1>
    <p>
      ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА ЗАСОБАМИ CSS та
      FLEXBOX.
    </p>
    <br />
    <h1>Мета:</h1>
    <p>
      Придбати практичні навички роботи верстки сторінок засобами CSS,
      верстки на основі плаваючих елементів, з’ясувати переваги та
      недоліки типів макетів веб- сторінок ⎯ придбати практичні навички
      роботи верстки сторінок засобами CSS та FLEXBOX
    </p><br/>
    <h1>Сайт:</h1>
    <p>https://github.com/Mar4ik10/WebCoworking</p>
  </div>
`,
  Maket: `
  <div class="center">
  <h1>HEADER</h1>
  <img src="images/header.png" alt="" width="500px">

  <h1>BODY</h1>
  <img src="images/body.png" alt="" width="500px">

  <h1>FOOTER</h1>
  <img src="images/footer.png" alt="" width="500px">
  </div>
  `,
  FixedTable: `
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
  &lt;header&gt;<br/>
  &lt;nav&gt;<br/>
    &lt;ul&gt;<br/>
      &lt;li&gt;&lt;a href="#"&gt;Форми навчання&lt;/a&gt;&lt;/li&gt;<br/>
      &lt;li&gt;&lt;a href="#"&gt;Заходи&lt;/a&gt;&lt;/li&gt;<br/>
      &lt;li&gt;&lt;a href="#"&gt;Про Академію&lt;/a&gt;&lt;/li&gt;<br/>
      &lt;li&gt;&lt;a href="#"&gt;Контакти&lt;/a&gt;&lt;/li&gt;<br/>
      &lt;li&gt;<br/>
        &lt;select id="cities"&gt;<br/>
          &lt;option value="kyiv"&gt;Київ&lt;/option&gt;<br/>
        &lt;/select&gt;<br/>
      &lt;/li&gt;<br/>
    &lt;/ul&gt;<br/>
  &lt;/nav&gt;<br/>
&lt;/header&gt;<br/>
<br/>
&lt;main&gt;<br/><br/>
  &lt;div class="courses"&gt;<br/>
    &lt;div class="guarantee"&gt;<br/>
      &lt;h1&gt;<br/>
        КУРСИ ПРОГРАМУВАННЯ &lt;span&gt;З 100% ГАРАНТІЄЮ&lt;/span&gt; ПРАЦЕВL<br/>
      &lt;/h1&gt;<br/>
      &lt;p&gt;<br/>
        З SCHOOL ти отримаєш високооплачувану роботу своєї мрії. Ми готуємо
        висококласних IT-спеціалістів<br/>
      &lt;/p&gt;<br/>
    &lt;/div&gt;<br/>
    &lt;img src="images/school.png" alt="" /&gt;<br/>
  &lt;/div&gt;<br/>

  &lt;section&gt;<br/>
    &lt;h2&gt;ВІДГУКИ ВІД РОБОТОДАВЦІВ&lt;/h2&gt;<br/>
    &lt;h1&gt;ПІДТВЕРДЖЕНА ЯКІСТЬ&LT;/h1&gt;<br/>
    &lt;p&gt;<br/>
      Школа програмування - єдина, що має відгуки від роботодавців, які
      входять до списку найкращих компаній DOU.UA. А випускники курсів з
      інкубатором отримують гарантії працевлаштування впродовж 6 місяців
      після успішного закінчення навчання. Але зазвичай їх забирають до себе
      наші офіційні партнери ще до закінчення курсу.
    &lt;/p&gt;<br/>
    <br/>
    &lt;div class="work-feedbacks"&gt;<br/>
      &lt;img src="images/feedbacks.png" alt="" /&gt;<br/>
      <br/>
      &lt;div class="companies"&gt;<br/>
        &lt;img src="images/epam.png" alt="" /&gt;<br/>
        &lt;img src="images/incoria.png" alt="" /&gt;<br/>
        &lt;img src="images/binariks.png" alt="" /&gt;<br/>
        &lt;img src="images/rolique.png" alt="" /&gt;<br/>
        &lt;img src="images/eleks.png" alt="" /&gt;<br/>
        &lt;img src="images/globallogic.png" alt="" /&gt;<br/>
        &lt;img src="images/intetics.png" alt="" /&gt;<br/>
        &lt;img src="images/softserve.png" alt="" /&gt;<br/>
      &lt;/div&gt;<br/>
    &lt;/div&gt;<br/>
    <br/>
    &lt;p&gt;Відгук INCORA про випускників Okten&lt;/p&gt;<br/>
  &lt;/section&gt;<br/>
  <br/>
  &lt;div class="programming"&gt;<br/>
    &lt;h2&gt;ПОПУЛЯРНІ НАПРЯМКИ&lt;/h2&gt;<br/>
    &lt;h1&gt;КУРСІВ ПРОГРАМУВАННЯ&lt;/h1&gt;<br/>
    <br/>
    &lt;div class="cards"&gt;<br/>
      &lt;div class="card"&gt;<br/>
        &lt;img src="images/js.png" alt="" /&gt;<br/>
        &lt;h3&gt;JAVASCRIPT&lt;/h3&gt;<br/>
        &lt;h4&gt;Комплексний курс&lt;/h4&gt;<br/>
        <br/>
        &lt;p&gt;<br/>
          Стартовий рівень: початківець&lt;br /&gt;Тривалість: 5-11 місяців&lt;br /&gt;Ціна<br/>
          від 14500 грн.<br/>
        &lt;/p&gt;<br/>
        <br/>
        &lt;h5&gt;Залишилось 3 місця&lt;/h5&gt;<br/>
        <br/>
        &lt;a href="#"&gt;Детальніше<br/>
        &lt;/a&gt;<br/>
        &lt;/div&gt;<br/>
        &lt;div class="card"&gt;<br/>
          &lt;img src="images/java.png" alt="" /&gt;<br/>
          &lt;h3&gt;JAVA&lt;/h3&gt;<br/>
          &lt;h4&gt;Комплексний курс&lt;/h4&gt;<br/>
          <br/>
          &lt;p&gt;<br/>
            Стартовий рівень: початківець&lt;br /&gt;Тривалість: 6-11 місяців&lt;br /&gt;Ціна<br/>
            від 14500 грн.<br/>
          &lt;/p&gt;<br/>
          <br/>
          &lt;h5&gt;Залишилось 6 місць&lt;/h5&gt;<br/>
          <br/>
          &lt;a href="#"&gt;Детальніше&lt;/a&gt;<br/>
        &lt;/div&gt;<br/>
        &lt;div class="card"&gt;<br/>
          &lt;img src="images/python.png" alt="" /&gt;<br/>
          &lt;h3&gt;PYTHON&lt;/h3&gt;<br/>
          &lt;h4&gt;Комплексний курс&lt;/h4&gt;<br/>
          <br/>
          &lt;p&gt;<br/>
            Стартовий рівень: початківець&lt;br /&gt;Тривалість: 6-11 місяців&lt;br /&gt;Ціна<br/>
            від 14500 грн.<br/>
          &lt;/p&gt;<br/>
          <br/>
          &lt;h5&gt;Залишилось 4 місця&lt;/h5&gt;<br/>
          <br/>
          &lt;a href="#"&gt;Детальніше&lt;/a&gt;<br/>
        &lt;/div&gt;<br/>
      &lt;/div&gt;<br/>
    &lt;/div&gt;<br/>
    </main>
  `,
  CSS: `
  nav ul {<br/>
    display: flex;<br/>
    justify-content: space-evenly;<br/>
  }<br/>
  <br/>
  nav ul li {<br/>
    background-color: black;<br/>
    font-size: 1.5rem;<br/>
    list-style: none;<br/>
    padding: 15px;<br/>
  }<br/>
  nav ul li a {<br/>
    color: white;<br/>
    text-decoration: none;<br/>
  }<br/>
  <br/>
  nav ul li select {<br/>
    color: white;<br/>
    background-color: black;<br/>
    border: none;<br/>
    font-size: 1.5rem;<br/>
    margin: auto 50px;<br/>
  }<br/>
  .courses {<br/>
    display: flex;<br/>
    justify-content: space-between;<br/>
    margin: 50px;<br/>
  }<br/>
  <br/>
  .guarantee span {<br/>
    color: rgb(33, 59, 206);<br/>
  }<br/>
  <br/>
  .guarantee p {<br/>
    width: 400px;<br/>
  }<br/>
  <br/>
  section {<br/>
    background-color: rgb(234, 242, 245);<br/>
  }<br/>
  <br/>
  section h1 {<br/>
    color: orange;<br/>
  }<br/>
  <br/>
  section h1,<br/>
  section h2 {<br/>
    text-align: center;<br/>
  }<br/>
  <br/>
  section &gt; p:first-of-type {<br/>
    width: 500px;<br/>
    margin: 0 auto 20px;<br/>
  }<br/>
  <br/>
  section &gt; p:last-of-type {<br/>
    margin: 20px;<br/>
  }<br/>
  <br/>
  .work-feedbacks {<br/>
    display: flex;<br/>
    justify-content: space-around;<br/>
  }<br/>
  <br/>
  .work-feedbacks * {<br/>
    margin: 0 20px;<br/>
  }<br/>
  .programming h2 {<br/>
    color: white;<br/>
  }<br/>
  <br/>
  .programming h1,<br/>
  .programming h2 {<br/>
    text-align: center;<br/>
  }<br/>
  <br/>
  .programming h1 {<br/>
    color: orange;<br/>
  }<br/>
  <br/>
  .programming {<br/>
    background-color: rgb(27, 27, 27);<br/>
  }<br/>
  <br/>
  .cards {<br/>
    display: flex;<br/>
    justify-content: space-around;<br/>
  }<br/>
  <br/>
  .card {<br/>
    width: 350px;<br/>
    height: 400px;<br/>
    border: 1px solid rgb(72, 72, 72);<br/>
    border-radius: 20px;<br/>
    display: flex;<br/>
    flex-direction: column;<br/>
    align-items: center;<br/>
  }<br/>
  <br/>
  .card img {<br/>
    margin: 10px auto;<br/>
  }<br/>
  <br/>
  .card h3 {<br/>
    color: white;<br/>
  }<br/>
  <br/>
  .card h4 {<br/>
    color: orange;<br/>
  }<br/>
  <br/>
  .card h5 {<br/>
    color: rgb(112, 133, 153);<br/>
  }<br/>
  <br/>
  .card p {<br/>
    color: white;<br/>
  }<br/>
  <br/>
  .card a {<br/>
    margin: auto 0;<br/>
    height: 100%;<br/>
    border: 1px solid rgb(72, 72, 72);<br/>
    width: 100%;<br/>
    text-align: center;<br/>
    color: white;<br/>
    border-radius: 0 0 20px 20px;<br/>
    display: flex;<br/>
    justify-content: center;<br/>
    align-items: center;<br/>
    font-size: 1rem;<br/>
    text-decoration: none;<br/>
  }<br/>
  `,
  Conclusion: `
  У ході виконання лабораторної роботи ми отримали практичні навички роботи 
  з версткою сторінок засобами HTML та CSS.<br/> Під час розробки макету власного сайту,
  ми використовували блокову верстку, пояснили вибір цього типу макету та базову 
  концепцію верстки сторінок. Робота з таблицями та блоками (плаваючими елементами)
  надала нам можливість порівняти фіксовану та гумову верстку, оцінити переваги та
  недоліки кожного підходу.<br/>
  <br/>
Використання технології Flexbox дозволило нам легко організувати розмітку 
елементів на сторінці, забезпечивши гнучкість та ефективне управління їх 
розташуванням. Ми виконали завдання засобами Flexbox, згідно з власними номерами
варіантів, і висвітлили особливості макету кожного студента.<br/>
<br/>
У висновках ми зазначили переваги та недоліки використання таблиць та блоків 
(плаваючих блоків) для створення веб-додатків. Використання таблиць може бути 
зручним для створення рівномірної розмітки, але може виникнути проблема з адаптивністю 
на різних пристроях. Блокова верстка надає більшу гнучкість у керуванні розташуванням 
елементів та працює краще для адаптивного дизайну.<br/>
<br/>
У цілому, виконання лабораторної роботи дозволило нам поглибити знання та навички
з верстки веб-сторінок, ознайомитися з різними типами макетів та вивчити основи
Flexbox, що буде корисним у подальшій роботі з веб-розробкою.<br/>
`
}

let lab4 = {
  Theme: `<div style="text-align: center">
  <h1>Тема:</h1>
  <p>
    АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE
    FIRST.
  </p>
  <h1 style="margin-top: 20px">Мета:</h1>
  <p>
    Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег
    viewport. Інструменти розробника. Стратегія Mobile First
  </p>
  <h1 style="margin-top: 20px">Посилання на репозиторій:</h1>
  <p>https://github.com/Mar4ik10/WebCoworking</p>
</div>`,

  ExplanationAdaptive: `<style>
  div h1 {
    margin: 20px 0 10px;
  }
</style>
<div style="margin: 20px">
  <h1>Адаптивна верстка та медіа-запити</h1>

  <ul>
    <li>
      Адаптивна верстка - це підхід до розробки веб-сайтів, що дозволяє
      сторінці гнучко змінюватися залежно від розміру екрану пристрою.
      Це забезпечує оптимальне відображення контенту як на десктопах,
      так і на мобільних пристроях.
    </li>
    <li>
      Медіа-запити - це спосіб, за допомогою якого можна змінювати стилі
      CSS в залежності від характеристик пристрою, таких як ширина
      екрану, роздільна здатність та орієнтація. Це дозволяє створювати
      адаптивні сайти, які оптимально відображаються на будь-яких
      пристроях.
    </li>
  </ul>

  <h1>Медіа-типи та медіа-функції</h1>

  <ul>
    <li>
      Медіа-типи - це типи пристроїв, на яких відображається
      веб-сторінка. До них можуть відноситися екрани, принтери або
      мультимедійні пристрої. Використання медіа-типів дозволяє
      змінювати відображення сторінки в залежності від пристрою.
    </li>
    <li>
      Медіа-функції - це спеціальні функції CSS, які дозволяють
      використовувати медіа-запити для визначення характеристик
      пристроїв. Наприклад, функція 'min-width' вказує, які стилі будуть
      застосовані, коли ширина екрану буде не менше вказаного значення.
    </li>
  </ul>

  <h1>Метатег viewport та стратегія Mobile First</h1>

  <ul>
    <li>
      Метатег viewport - це HTML-тег, який дозволяє контролювати
      масштабування та розміри відображення веб-сторінки на мобільних
      пристроях. Використання цього тегу допомагає забезпечити
      оптимальне відображення контенту на різних пристроях.
    </li>
    <li>
      Стратегія Mobile First - це підхід до розробки веб-сторінок, коли
      спочатку розробляється мобільна версія сайту, а потім за потреби
      додаються стилі для відображення на більших екранах. Цей підхід
      дозволяє забезпечити оптимальне відображення контенту на мобільних
      пристроях, які дедалі більш популярні.
    </li>
  </ul>
</div>`,

AdaptiveExample:`<div class="nav">
  <h2>Navbar десктопна версія</h2>
  <img src="images/adaptive/navbardesktop.png" alt="" />

  <br />
  <h2>Navbar планшетна версія</h2>
  <img src="images/adaptive/navbartablet.png" alt="" />
  <br />
  <h2>Navbar мобільна версія</h2>
  <img src="images/adaptive/navbarmobile.png" alt="" />
  <br />

  <pre>
    <code>
      @media screen and (max-width: 730px) {
        /* Перша зміна: показати іконку меню */
        .nav-buttons .icon {
            display: block;
        }
    
        /* Друга зміна: змінити відображення елементів навігації */
        .nav-buttons.responsive {
            position: relative;
        }
        .nav-buttons.responsive.nav-buttons ul {
            display: flex;
            flex-direction: column;
        }
        .nav-buttons.responsive li {
            flex-direction: column;
            display: block;
            text-align: right;
        }
        /* Третя зміна: зміна порядку відображення кнопки */
        .target {
            order: -1;
        }
        /* Четверта зміна: змінити розміри іконки меню */
        .icon {
            width: 20px;
            float: right;
        }
    }
    
    @media screen and (max-width: 670px) {
        /* П'ята зміна: зміна розмірів і позиціонування елементів навбару */
        .nav-buttons.responsive.nav-buttons ul {
            display: flex;
            flex-direction: column;
        }
        .nav-buttons.responsive li {
            flex-direction: column;
            display: block;
            text-align: right;
        }
    }
  </code>
  </pre>
  </div>
  <br />
  <br />
  <div class="circles">
  <h1>Circles</h1>
  <img src="images/adaptive/circledesktop.png" alt="" />
  <img src="images/adaptive/circletabletmobile.png" alt="" />

  <pre>
    <code>
      @media screen and (max-width: 900px) {
        /* Зміни для класу .circle */
        .circle {
            width: 100px;
            height: 100px;
            font-size: 0.6rem;
        }
      }

      @media screen and (max-width: 730px) {
          /* Зміни для класу .circles */
          .circles {
              flex-direction: row;
          }
      }
    </code>
  </pre>
  </div>
  <br />
  <br />
  <div class="footer">
  <h1>Footer</h1>
  <img src="images/adaptive/footerdesktop.png" alt="" />
  <img src="images/adaptive/footertabletmobile.png" alt="" />
  <pre>
    <code>
      @media screen and (max-width: 1000px) {
        /* Зміни для .footer-upper-row */
        .footer-upper-row h1 {
            font-size: 1.6rem;
        }
    
        /* Зміни для .footer-butons */
        .footer-upper-row .footer-butons a {
            font-size: 1.1rem;
        }
    
        /* Зміни для .footer-icons img */
        .footer-upper-row .footer-icons img {
            height: 30px;
            width: auto;
        }
      }
      
      @media screen and (max-width: 900px) {
          /* Зміни для .contact-place */
          .contact-place {
              margin-bottom: 30px;
          }
      
          /* Зміни для .circle */
          .circle {
              width: 100px;
              height: 100px;
              font-size: 0.6rem;
          }
      }
    </code>
  </pre>
  </div>`,
  Conclusion: `<div style="margin: 20px"><h1>Висновок</h1>

  <ul>
    <li>
      Адаптивна верстка та медіа-запити дозволяють створювати веб-сайти,
      які автоматично пристосовуються до різних розмірів екрану
      користувачів.
    </li>
    <li>
      Використання медіа-типів та медіа-функцій допомагає визначати
      характеристики пристроїв та застосовувати відповідні стилі.
    </li>
    <li>
      Метатег viewport встановлює параметри відображення сторінки на
      мобільних пристроях, забезпечуючи правильне масштабування та
      розміщення елементів.
    </li>
    <li>
      Стратегія Mobile First рекомендує спочатку розробляти версію сайту
      для мобільних пристроїв, що дозволяє забезпечити оптимальний досвід
      для користувачів на всіх пристроях.
    </li>
  </ul></div>`
}

let lab5 = {
  Theme: `<style>
  .center {
    text-align: center;
  }
  </style>
  <div class="center">
    <h1>Тема</h1>
    <p>
      ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. ВИКОРИСТАННЯ
      МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT
    </p>
    <h1 style="margin-top: 15px">Мета</h1>
    <p>
      придбати практичні навички роботи з масивами у js-сценаріях.
      Реалізація програм засовами мови JAVASCRIPT
    </p>
    <h1 style="margin-top: 20px">Посилання на репозиторій:</h1>
    <p>https://github.com/Mar4ik10/WebCoworking</p>
  </div>`,

  ConnectJS: `<div style="margin: 20px">
  <h1>Застосування JavaScript в HTML</h1>

  <ol>
    <li>
      Схема URL:
      <ul>
        <li>
          Вбудований JavaScript у URL для створення закладок з
          попередньо заповненими полями форми:

          <pre>
&lt;a href=&quot;javascript:void(prompt(&#39;Enter your name:&#39;, &#39;John Doe&#39;));&quot;&gt;Click to enter your name&lt;/a&gt;
          </pre>
        </li>

        <li>Виклик функції JavaScript за допомогою URL:</li>
        <pre>
javascript:alert('Hello, World!');
        </pre>
      </ul>
    </li>
    <li>
      Обробник подій:
      <ul>
        <li>
          Обробка події натискання кнопки
          <pre>
&lt;button onclick=&quot;alert(&#39;Button clicked!&#39;)&quot;&gt;Click me&lt;/button&gt;
          </pre>
        </li>
        <li>
          Обробка події наведення миші на елемент:
          <pre>
&lt;img src=&quot;image.jpg&quot; onmouseover=&quot;alert(&#39;Mouse over image!&#39;)&quot; /&gt;
</pre
          >
        </li>
      </ul>
    </li>
    <li>
      Підстановка (enitty):
      <ul>
        <li>
          Виведення динамічної інформації на сторінці за допомогою
          JavaScript:
          <pre>
&lt;p id=&quot;dynamicContent&quot;&gt;&lt;/p&gt;
&lt;script&gt;
document.getElementById(&quot;dynamicContent&quot;).innerText = &quot;Current date: &quot; + new Date();
&lt;/script&gt;
            </pre
          >
        </li>
      </ul>
    </li>
    <li>
      Вставка (тег SCRIPT):
      <ul>
        <li>
          Вбудований JavaScript:
          <pre>
&lt;script&gt;
console.log(&quot;Hello, World!&quot;);
&lt;/script&gt;
        </pre
          >
        </li>
        <li>
          Підключення зовнішнього JavaScript-файлу:
          <pre>
&lt;script src=&quot;script.js&quot;&gt;&lt;/script&gt;
          </pre>
        </li>
      </ul>
    </li>
  </ol>
</div>`,

  TaskOne: `
  <h1>Code</h1>
  <pre>
  console.log("Завдання 1");
  const inputArray = [10, 2, 6, 2, 8, 12, 25, 32];
  
  function buildArray(array) {
      const arrayA = [];
      const arrayB = [];
      const arrayC = [];
  
      array.forEach(num => {
          if (num % 2 == 0 && num % 3) {
              arrayB.push(num);
          }
  
          else if (num % 2 == 0) {
              arrayA.push(num);
          }
  
          else if (num % 3 == 0) {
              arrayC.push(num)
          }
      });
  
      return [...arrayA, ...arrayB, ...arrayC]
  }
  
  const newArray = buildArray(inputArray);
  console.log('Початковий масив - $(inputArray)');
  console.log('Новий масив - $(newArray)');
  
  console.log("Завдання 2");
  
  
  function quickSort(array, start, end) {
      if (start >= end) {
          return;
      }
  
      let pivot = partition(array, start, end);
      quickSort(array, start, pivot - 1);
      quickSort(array, pivot + 1, end);
  }
  
  function partition(array, start, end) {
      let pivot = array[end];
  
      let i = start - 1
  
      for (var j = start; j <= end - 1; j++) {
          if (array[j] < pivot) {
              i++;
              [array[i], array[j]] = [array[j], array[i]];
          }
      }
      i++;
      [array[i], array[j]] = [array[j], array[i]];
      return i;
  }
  console.log('Перед сортуванням -  $(newArray)');
  quickSort(newArray, 0, newArray.length - 1)
  console.log('Після сортування - $(newArray)');
  </pre>`,
  TaskTwo: `<h1>Autocomplete Example</h1>
  <input type="text" id="inputField" placeholder="Enter text..." />
  <div id="autocompleteContainer" class="autocomplete-container"></div>
  <br/>
  <br/>
  <h1>Код</h1>
  <pre>
  <code>
  const inputField = document.getElementById(&quot;inputField&quot;);
  const autocompleteContainer = document.getElementById(&quot;autocompleteContainer&quot;);
  
  // List of autocomplete words
  const autocompleteWords = [
      &quot;apple&quot;,
      &quot;banana&quot;,
      &quot;cherry&quot;,
      &quot;grape&quot;,
      &quot;kiwi&quot;,
      &quot;orange&quot;,
      &quot;pear&quot;,
      &quot;arrange&quot;,
  ];
  
  inputField.addEventListener(&quot;input&quot;, function () {
  const inputText = this.value.toLowerCase();
  console.log(this);
  let suggestions = [];
  
  if (inputText) {
      suggestions = autocompleteWords.filter((word) =&gt;
      word.startsWith(inputText)
      );
  }
  
  displaySuggestions(suggestions);
  });
  
  function displaySuggestions(suggestions) {
  if (suggestions.length === 0) {
      autocompleteContainer.innerHTML = &quot;&quot;;
      return;
  }
  
  const html = suggestions
      .map(
      (suggestion) =&gt;
          '&lt;div class=&quot;autocomplete-item&quot;&gt;$(suggestion)&lt;/div&gt;'
      )
      .join(&quot;&quot;);
  autocompleteContainer.innerHTML = html;
  
  const autocompleteItems =
      document.querySelectorAll(&quot;.autocomplete-item&quot;);
  autocompleteItems.forEach((item) =&gt; {
      item.addEventListener(&quot;click&quot;, function () {
      inputField.value = this.textContent;
      autocompleteContainer.innerHTML = &quot;&quot;;
      });
  });
  }
  </code>
  </pre>`,

  Conclusion: `
  <div style="margin:20px;">
  <h1>Висновок</h1>

  <ul style="margin-top: 20px">
      <li>Підключення JavaScript до HTML можна здійснити за допомогою тегу <code>&lt;script&gt;</code> для вбудовування скрипту безпосередньо у HTML-документ.</li>
      <li>Також можна зберігати JavaScript у окремих файлах та підключати їх за допомогою атрибуту <code>src</code>, що сприяє збереженню структури проекту та підвищує його читабельність.</li>
      <li>Використання вбудованих скриптів дозволяє просто та швидко розробляти сторінки, тоді як зовнішні файли сприяють кращій організації коду та підтримці проекту.</li>
  </ul></div>`
};

let lab6 = {
  Theme: `<style>
  .center {
    text-align: center;
  }
  </style>
  <div class="center">
    <h1>Тема</h1>
    <p>
      ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. ВИКОРИСТАННЯ
      МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT
    </p>
    <h1 style="margin-top: 15px">Мета</h1>
    <p>
      придбати практичні навички роботи з масивами у js-сценаріях.
      Реалізація програм засовами мови JAVASCRIPT
    </p>
    <h1 style="margin-top: 20px">Посилання на репозиторій:</h1>
    <p>https://github.com/Mar4ik10/WebCoworking</p>
  </div>`,

  TaskOne: `
  <pre>
  function createProduct(obj, callback) {
    const productId = generateProductId();
    const product = { ...obj, id: productId };
    callback(product);
  }
  
  function logProduct(product) {
    console.log(&quot;Product:&quot;, product);
  }
  
  function logTotalPrice(product) {
    const totalPrice = calculateTotalPrice(product);
    console.log(&quot;Total Price:&quot;, totalPrice);
  }
  
  function generateProductId() {
    return Math.random().toString(36).substring(2, 10); 
  }
  
  function calculateTotalPrice(product) {
    return product.price * product.quantity;
  }
  
  const productData = {
    name: &quot;Товар 1&quot;,
    price: 10,
    quantity: 2
  };
  
  createProduct(productData, logProduct);
  
  createProduct(productData, logTotalPrice);
  </pre>
  `,
  TaskThree: `
  <pre>
  const medicines = {
    "Агалгін": new Date("2022-05-01"),
    "Ношпа": new Date("2025-07-02"),
    "Альфахолін": new Date("2024-12-21"),
    "Аспірин": new Date("2022-08-15"),
    "Аспаркам": new Date("2024-04-18"),
};

const medicineNames = Object.keys(medicines);

const currentDate = new Date();
const sortedMedicines = medicineNames
    .filter(medicine => medicines[medicine] > currentDate)
    .sort((a, b) => medicines[a] - medicines[b]);

console.log(sortedMedicines);

  </pre>`,
  TaskFive: `
  <pre>const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
  ];
  
  function applyDiscountAndAddId(products) {
    const generateId = () => Math.random().toString(36).substring(2, 10);
  
    const discountedProducts = products.map((product, index) => ({
      ...product,
      id: generateId(),
      price: product.price * 0.8,
    }));
  
    return discountedProducts;
  }
  
  const discountedFruits = applyDiscountAndAddId(fruits);
  console.log(discountedFruits);
  </pre>
  `,
  TaskSeven: `
  <pre>class Client {
    #login;
    #email;
  
    constructor(login, email) {
      this.#login = login;
      this.#email = email;
    }
  
    get login() {
      return this.#login;
    }
  
    set login(newLogin) {
      this.#login = newLogin;
    }
  
    get email() {
      return this.#email;
    }
  
    set email(newEmail) {
      this.#email = newEmail;
    }
  }
  
  const client = new Client("user123", "user123@example.com");
  
  console.log(client.login);
  console.log(client.email);
  
  client.login = "newUser";
  client.email = "newuser@example.com";
  
  console.log(client.login);
  console.log(client.email);
  </pre>`,

  TaskNine : `
  <pre>const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
  ];
  
  const tagCounts = tweets.reduce((acc, tweet) => {
    tweet.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});
  
  console.log(tagCounts);
  </pre>`,
  
  TaskTen: `<pre>
  function checkBrackets(str) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
  
    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpeningBracket = stack.pop();
            if (lastOpeningBracket !== bracketPairs[char]) {
                return false;
            }
        }
    }
  
    return stack.length === 0;
  }
  
  const sometext = '';
  
  console.log(checkBrackets(someFn));
  </pre>
  `,
  Conclusion: `
  <div style="margin:20px;">
  <h1>Висновок</h1>
    <p>У розробці веб-додатків іноді виникає необхідність працювати з масивами у JavaScript-сценаріях. Масиви є потужним інструментом для зберігання та обробки даних в програмах.</p>
    <p>Використання масивів у JavaScript дозволяє ефективно керувати великою кількістю даних, проводити їх сортування, фільтрацію, трансформацію та інші операції.</p>
    <p>Реалізація програм за допомогою мови JavaScript включає в себе використання масивів для зберігання та обробки даних. Наприклад, створення списку завдань у додатку для управління проектами, відображення списку користувачів у соціальній мережі або фільтрація товарів у інтернет-магазині.</p>
    <p>Застосування функціонального програмування у JavaScript також відображається у роботі з масивами. Функції вищих порядків, такі як <code>map()</code>, <code>filter()</code>, <code>reduce()</code> дозволяють лаконічно та ефективно опрацьовувати масиви даних.</p>
    <ul>
        <li>Створення списку завдань у додатку для управління проектами.</li>
        <li>Відображення списку користувачів у соціальній мережі.</li>
        <li>Фільтрація товарів у інтернет-магазині.</li>
    </ul>
    <p>Таким чином, вміння працювати з масивами у JavaScript є важливою навичкою для розробників веб-додатків, яка допомагає створювати потужні та функціональні програми.</p></div>
  `
}

let currentelement;
let lastelement;

let containing = document.getElementsByTagName("section")[0];

function insertScript(srcPath) {
  const script = document.createElement(`script`);
  script.src = srcPath;

  containing.appendChild(script);
}


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

    case "aside-button-lab4":
      if (classelementName == "aside-button1") {
        containing.innerHTML = lab4.Theme;
      }

      else if (classelementName == "aside-button2") {
        containing.innerHTML = lab4.ExplanationAdaptive;
      }

      else if (classelementName == "aside-button3") {
        containing.innerHTML = lab4.AdaptiveExample;
      }
      
      else if (classelementName == "aside-button4"){
        containing.innerHTML = lab4.Conclusion;
      }
      break;

    case "aside-button-lab5":
      if (classelementName == "aside-button1") {
        containing.innerHTML = lab5.Theme;
      }

      else if (classelementName == "aside-button2") {
        containing.innerHTML = lab5.ConnectJS;
      }

      else if (classelementName == "aside-button3") {
        containing.innerHTML = lab5.TaskOne;
        insertScript("scripts/lab5task1.js");
      }
      
      else if (classelementName == "aside-button4"){
        containing.innerHTML = lab5.TaskTwo;
        insertScript("scripts/lab5Task2.js")
      }
      else if (classelementName == "aside-button5"){
        containing.innerHTML = lab5.Conclusion;
      }
      break;


    case "aside-button-lab6":
      if (classelementName == "aside-button1") {
        containing.innerHTML = lab6.Theme;
      }

      else if (classelementName == "aside-button2") {
        containing.innerHTML = lab6.TaskOne;
        insertScript("scripts/lab5.1task1.js");
      }

      else if (classelementName == "aside-button3") {
        containing.innerHTML = lab6.TaskThree;
        insertScript("scripts/lab5.1task3.js");
      }
      
      else if (classelementName == "aside-button4"){
        containing.innerHTML = lab6.TaskFive;
        insertScript("scripts/lab5.1Task5.js")
      }

      else if (classelementName == "aside-button5"){
        containing.innerHTML = lab6.TaskSeven;
        insertScript("scripts/lab5.1Task7.js")
      }

      else if (classelementName == "aside-button6"){
        containing.innerHTML = lab6.TaskNine;
        insertScript("scripts/lab5.1Task9.js")
      }

      else if (classelementName == "aside-button7"){
        containing.innerHTML = lab6.TaskTen;
        insertScript("scripts/lab5.1Task10.js")
      }

      else if (classelementName == "aside-button8"){
        containing.innerHTML = lab6.Conclusion;
      }
    }
}