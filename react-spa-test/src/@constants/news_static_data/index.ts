import { NewsItem } from 'reducers/news/models';

const staticData: NewsItem[] = [
  {
    author: 'football24.ua',
    content: null,
    description:
      'Наставник біло-синіх Мірча Луческу прокоментував ймовірність підсилення команди у міжсезоння.',
    publishedAt: '2020-12-12T20:04:34Z',
    source: { id: null, name: 'Football24.ua' },
    title:
      'Луческу неоднозначно висловився щодо зимових трансферів Динамо — Футбол 24 - Футбол 24',
    url:
      'https://football24.ua/luchesku_neodnoznachno_vislovivsya_shhodo_zimovih_transferiv_dinamo_n637481/',
    urlToImage:
      'https://football24.ua/resources/photos/news/600x315_DIR/202012/637481.jpg',
  },
  {
    author: 'Анна Кисельова',
    content: null,
    description:
      'Єдине в цьому році повне сонячне затемнення пройде через Південну Америку в понеділок (14 грудня). Де його можна буде подивитися - читайте в нашій статті',
    publishedAt: '2020-12-12T19:56:49Z',
    source: { id: null, name: 'Www.rbc.ua' },
    title:
      'Єдине в 2020 році повне сонячне затемнення: де дивитися онлайн - РБК-Україна',
    url:
      'https://www.rbc.ua/ukr/styler/edinstvennoe-2020-godu-polnoe-solnechnoe-1607783822.html',
    urlToImage:
      'https://www.rbc.ua/static/img/_/_/___2020_12_12t163222_279_1300x820.jpg',
  },
  {
    author: null,
    content: null,
    description:
      "Рух приймав Дніпро-1 у рамках 13 туру української Прем'єр-ліги.",
    publishedAt: '2020-12-12T19:21:26Z',
    source: { id: null, name: 'Champion.com.ua' },
    title:
      'Рух розгромив Дніпро-1 і здобув першу перемогу в УПЛ - Champion.com.ua',
    url:
      'https://champion.com.ua/football/2020/12/12/860182/ruh-rozgromiv-dnipro-1-i-zdobuv-pershu-peremogu-v-upl',
    urlToImage:
      'https://champion.com.ua/storage/news/main/regular/fd9810b9b633d19c690956dd57b29bdf.jpg',
  },
  {
    author: 'https://www.facebook.com/pasha.skarbyk',
    content: null,
    description:
      'Неанонсовані OnePlus 9 показали на фото.Останні новини Смартфони на сайті - iTechua. Свіжа стрічка новин сьогодні.',
    publishedAt: '2020-12-12T18:52:00Z',
    source: { id: null, name: 'Itechua.com' },
    title:
      'Неанонсовані OnePlus 9 показали на фото – Смартфони - iTechua - новини IT технологій',
    url: 'https://itechua.com/smartphones/126507',
    urlToImage:
      'https://itechua.com/wp-content/uploads/2020/12/8b5349bddae50246ee4487f5d3b5a2d7.jpg',
  },
  {
    author: 'Анастасія Мигидюк',
    content: "' . .",
    description:
      "Генеральний секретар Організації Об'єднаних Націй Антоніу Гутерреш назвав кліматичну ситуацію у світі драматичною. Він закликав країни вжити рішучих заходів.",
    publishedAt: '2020-12-12T18:03:00Z',
    source: { id: null, name: '24tv.ua' },
    title:
      'Ситуація драматична, – ООН закликала світових лідерів оголосити надзвичайний кліматичний стан - 24 Канал',
    url:
      'https://news.24tv.ua/oon-zaklikala-krayini-ogolositi-nadzvichayniy-klimatichniy-novini-svitu_n1484645',
    urlToImage:
      'https://24tv.ua/resources/photos/news/202012/1484645.jpg?1607797629000',
  },
  {
    author: 'Українська правда',
    content: null,
    description:
      'Міноборони Азербайджану у суботу ввечері заявило, що вірменська сторона вчинила провокаційні дії, що супроводжувалися порушенням режиму припинення вогню.',
    publishedAt: '2020-12-12T17:57:34Z',
    source: { id: null, name: 'Pravda.com.ua' },
    title: 'Азербайджан звинуватив Вірменію у провокації - Українська правда',
    url: 'https://www.pravda.com.ua/news/2020/12/12/7276778/',
    urlToImage: 'https://img.pravda.com/images/doc/b/7/b73f260-azerb.jpg',
  },
  {
    author: 'Українська правда',
    content: null,
    description:
      'Президент Володимир Зеленський підписав указ про нагородження старшого сержанта Національної гвардії Віталія Марківа орденом “За мужність” ІІІ ступеня.',
    publishedAt: '2020-12-12T16:47:12Z',
    source: { id: null, name: 'Pravda.com.ua' },
    title:
      'Зеленський нагородив виправданого в Італії нацгвардійця Марківа - Українська правда',
    url: 'https://www.pravda.com.ua/news/2020/12/12/7276775/',
    urlToImage: 'https://img.pravda.com/images/doc/c/a/ca19d24-markiv-op.jpg',
  },
  {
    author: 'Корреспондент.net',
    content: null,
    description:
      'Глава держави відвідав навчальний центр Десна Сухопутних військ, де ознайомився з роботою тренажера для підготовки фахівців ППО. На сьогодні це єдиний тренажер такого рівня в ЗСУ.',
    publishedAt: '2020-12-12T16:14:22Z',
    source: { id: null, name: 'Korrespondent.net' },
    title:
      'Зеленському показали унікальний військовий тренажер | Korrespondent.net - Корреспондент.net',
    url:
      'https://ua.korrespondent.net/ukraine/4305699-zelenskomu-pokazaly-unikalnyi-viiskovyi-trenazher',
    urlToImage: 'https://kor.ill.in.ua/m/190x120/2572315.jpeg',
  },
  {
    author: 'Економічна правда',
    content: null,
    description:
      'У майбутньому кросовери займуть 75% в продажах шведської компанії Volvo.',
    publishedAt: '2020-12-12T16:00:11Z',
    source: { id: null, name: 'Epravda.com.ua' },
    title:
      'У майбутньому 75% автомобілів Volvo будуть кросоверами - Економічна правда',
    url: 'https://www.epravda.com.ua/news/2020/12/12/669111/',
    urlToImage:
      'https://eimg.pravda.com/images/doc/6/6/669111_fb_image_ukr_2020_12_12_18_07_20.png',
  },
  {
    author: 'Радіо Свобода',
    content: null,
    description:
      'У правозахисній організації «Amnesty International в Україні» привітали висновок Міжнародного кримінального суду у справі щодо ситуації в Україні, за яким МКС має юрисдикцію розслідувати і розглядати справу по суті. «Це рішення дає проблиск надії постраждал…',
    publishedAt: '2020-12-12T15:03:00Z',
    source: { id: null, name: 'Radiosvoboda.org' },
    title:
      'В Amnesty International привітали висновок Міжнародного кримінального суду у справі щодо ситуації в Україні - Радіо Свобода',
    url:
      'https://www.radiosvoboda.org/a/news-mks-rishennia-amnesty/30997484.html',
    urlToImage:
      'https://gdb.rferl.org/db6b4abe-fd41-49b1-b7b7-d2bac0fcd54d_cx0_cy5_cw0_w1200_r1.jpg',
  },
  {
    author: 'https://www.facebook.com/espreso.tv',
    content: null,
    description:
      'В Ірані стратили опозиційного журналіста Рухоллі Зама, засудженого за звинуваченням у співпраці з іноземними розвідками',
    publishedAt: '2020-12-12T14:12:00Z',
    source: { id: null, name: 'Espreso.tv' },
    title:
      'В Ірані за "шпигунство" повісили опозиційного журналіста - новини Еспресо TV | Україна - espreso.tv',
    url:
      'https://espreso.tv/news/2020/12/12/v_irani_za_quotshpygunstvoquot_povisyly_opozyciynogo_zhurnalista',
    urlToImage:
      'https://static.espreso.tv/uploads/article/2816465/images/im610x343-46434737.JPG',
  },
  {
    author: 'УНІАН редакція',
    content: null,
    description:
      'Зодіака" підозрюють у п\'яти вбивствах в районі затоки Сан-Франциско, двом іншим його жертвам вдалося втекти. Сам маніяк стверджував, що на його рахунку 37 жертв.',
    publishedAt: '2020-12-12T12:50:00Z',
    source: { id: null, name: 'Unian.ua' },
    title:
      'Через півстоліття: експерти розгадали шифр відомого маніяка "Зодіака" - УНІАН',
    url:
      'https://www.unian.ua/world/shifr-zodiaka-eksperti-rozgadali-shifr-vidomogo-maniyaka-novini-svitu-11253245.html',
    urlToImage:
      'https://images.unian.net/photos/2020_12/thumb_files/1000_545_1607776995-9222.jpg?1',
  },
  {
    author: 'Ольга Кузьменко',
    content: null,
    description:
      "Співачка Джамала поділилася в блогу новими кадрами з сонячного Єгипту, де відпочиває з сім'єю",
    publishedAt: '2020-12-12T12:45:00Z',
    source: { id: null, name: 'Tsn.ua' },
    title:
      'На екскурсію з дітьми: Джамала поділилася новими знімками з відпустки - TSN UA',
    url:
      'https://tsn.ua/lady/news/show-biznes/na-ekskursiyu-z-ditmi-dzhamala-podililasya-novimi-znimkami-z-vidpustki-1686616.html',
    urlToImage:
      'https://img.tsn.ua/cached/1607776312/tsn-2d42605a5d3a686abfa749ad9c360aad/thumbs/1200x630/ef/f4/79a3ce60277e71a203a2a1f8baa6f4ef.jpeg',
  },
  {
    author: 'https://www.facebook.com/espreso.tv',
    content: null,
    description:
      'Букмекери вважають британця Ентоні Джошуа фаворитом бою проти болгарина Кубрата Пулєва',
    publishedAt: '2020-12-12T11:55:00Z',
    source: { id: null, name: 'Espreso.tv' },
    title: 'Джошуа – Пулєв: букмекери дали прогноз на бій - espreso.tv',
    url:
      'https://espreso.tv/news/2020/12/12/dzhoshua_pulyev_bukmekery_daly_prognoz_na_biy',
    urlToImage:
      'https://static.espreso.tv/uploads/article/2816449/images/im610x343-44634364743.jpg',
  },
  {
    author: 'Тоня Туманова',
    content: null,
    description:
      'КИЇВ. 12 грудня. УНН. Уже завтра в Україні очікується незначне, але все ж потепління. Про це УНН повідомили в Укргідрометцентрі.',
    publishedAt: '2020-12-12T09:39:00Z',
    source: { id: null, name: 'Unn.com.ua' },
    title:
      'Завтра в Україні потеплішає - синоптики – новини на УНН | 12 грудня 2020, 11:39 - УНН',
    url:
      'https://www.unn.com.ua/uk/exclusive/1907513-zavtra-v-ukrayini-poteplishaye-sinoptiki',
    urlToImage:
      'https://www.unn.com.ua/uploads/news/2020/12/12/33ba5bfb6d11a97f8a6a68454f5430a43d510f4b.jpg?v=5fd52e9957fb2',
  },
  {
    author: 'УНІАН редакція',
    content: null,
    description:
      'У серпні 2019 року Гафт був госпіталізований з інсультом, потім його перевели у реабілітаційний центр.',
    publishedAt: '2020-12-12T09:06:00Z',
    source: { id: null, name: 'Unian.ua' },
    title: 'Помер російський актор, який називав себе "путіністом" - УНІАН',
    url:
      'https://www.unian.ua/lite/stars/valentin-gaft-pomer-vidomiy-putinist-11253143.html',
    urlToImage:
      'https://images.unian.net/photos/2020_12/thumb_files/1000_545_1607763715-9498.jpg?1',
  },
  {
    author: 'Українська правда',
    content: null,
    description:
      'У п’ятницю Верховний суд США відхилив позов прокурора Техасу, підтримуваний президентом Дональдом Трампом, який прагнув скасування результатів голосування в чотирьох штатах.',
    publishedAt: '2020-12-12T08:48:00Z',
    source: { id: null, name: 'Pravda.com.ua' },
    title:
      'Верховний суд США відмовився переглядати вибори в чотирьох ключових штатах - Українська правда',
    url: 'http://www.pravda.com.ua/news/2020/12/12/7276731/',
    urlToImage:
      'https://img.pravda.com/images/doc/7/2/7276731_fb_image_ukr_2020_12_12_10_49_08.png',
  },
  {
    author: 'ТаблоID',
    content: null,
    description: '',
    publishedAt: '2020-12-12T08:14:55Z',
    source: { id: null, name: 'Pravda.com.ua' },
    title:
      'Сімейний вихід: принц Вільям, Кейт та діти засвітилися на червоній доріжці - ТаблоID',
    url: 'https://tabloid.pravda.com.ua/lounge/5fd474f7a6cad/',
    urlToImage: 'https://tabimg.pravda.com/images/doc/e/3/e3127a2-kate-fb.jpg',
  },
  {
    author: 'Анастасія Сімсек',
    content: '. (FDA) COVID-19, Pfizer BioNTech.',
    description:
      'Вакцинація американців розпочнеться вже найближчими днями. Управління з санітарного нагляду за якістю харчових продуктів і медикаментів (FDA) США дозволило використання вакцини від COVID-19, розробленої американською компанією Pfizer в співпраці з німецькою B…',
    publishedAt: '2020-12-12T07:05:00Z',
    source: { id: null, name: '24tv.ua' },
    title: 'США схвалили використання вакцини Pfizer - 24 Канал',
    url:
      'https://healthnews.24tv.ua/ssha-shvalili-vikoristannya-vaktsini-pfizer-novini-svitu_n1484253',
    urlToImage:
      'https://24tv.ua/resources/photos/news/202012/1484253.jpg?1607780622000',
  },
];

export default staticData;
