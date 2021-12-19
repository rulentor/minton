const chatData = [
  {
    id: 1,
    image: require("~/assets/images/users/avatar-2.jpg"),
    name: "Петров И.",
    message: "Доктор, подскажите пожалуйста...",
    time: "16:40",
    status: "away"
  },
  {
    id: 2,
    image: require("~/assets/images/users/avatar-5.jpg"),
    name: "Иванов В.",
    message: "Вячеслав Валерьевич, мне легче, спасибо!",
    time: "17:30",
    status: "online"
  },
  {
    id: 3,
    image: require("~/assets/images/users/avatar-7.jpg"),
    name: "Елецкая А.",
    message: "Вы говорили, что результаты анализов будут...",
    time: "Вт",
    status: "away"
  },
  {
    id: 4,
    image: require("~/assets/images/users/avatar-8.jpg"),
    name: "Крылов И.",
    message: "Подскажите, а как записаться на...",
    time: "Вс",
    status: "warning"
  },
  {
    id: 5,
    image: require("~/assets/images/users/avatar-3.jpg"),
    name: "Курин В.",
    message: "Моё состояние медленно улучшается...",
    time: "Ср",
    status: "do-not-disturb"
  },
  {
    id: 8,
    image: require("~/assets/images/users/avatar-4.jpg"),
    name: "Евгенин В.",
    message: "Доктор, получиться ли мне выписаться послезавтра?",
    time: "Ср",
    status: "online"
  }
];

const chatMessagesData = [
  {
    id: 1,
    image: require("~/assets/images/users/avatar-5.jpg"),
    name: "Пациент",
    message: "Здравствуйте Вячеслав Валерьевич, напомните, пожалуйста, сколько раз в день надо принимать таблетки?",
    time: "10:00"
  },
  {
    id: 2,
    align: "right",
    image: require("~/assets/images/users/avatar-1.jpg"),
    name: "Доктор",
    message: "Добрый день, подождите пару минут. Уточню.",
    time: "10:01"
  },
  {
    id: 4,
    align: "right",
    image: require("~/assets/images/users/avatar-1.jpg"),
    name: "Доктор",
    message: "Ваши таблетки надо пить 2 раза в день. Утром и вечером.",
    time: "10:17"
  },
  {
    id: 5,
    name: "Пациент",
    image: require("~/assets/images/users/avatar-5.jpg"),
    message: "Спасибо!",
    time: "10:21"
  },
  {
    id: 6,
    align: "right",
    image: require("~/assets/images/users/avatar-1.jpg"),
    name: "Доктор",
    message: "Обращайтесь!",
    time: "10:03"
  },
];

export { chatData, chatMessagesData };
