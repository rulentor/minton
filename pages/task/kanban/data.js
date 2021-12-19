const tasks = [
  {
    id: 1,
    status: "Постановка задачи",
    items: [
      {
        id: 1,
        title: "Разработка мобильного приложения",
        description:
          "Можно взять концепт с Яндекс картинок.",
        date: "Янв 16, 2022",
        task: "Medium",
        user: [
          require("~/assets/images/users/avatar-1.jpg"),
          require("~/assets/images/users/avatar-3.jpg")
        ],
        groupId: 1
      }
    ]
  },
  {
    id: 2,
    status: "Выполнение",
    items: [
      {
        id: 5,
        title: "Привязка модуля аналитики",
        description:
          "Модуль аналитики давно готов и ждёт привязки.",
        date: "Фев 12, 2021",
        task: "Low",
        user: [require("~/assets/images/users/avatar-6.jpg")],
        groupId: 2
      }

    ]
  },
  {
    id: 3,
    status: "Выполнено",
    items: [
      {
        id: 8,
        title: "Связь клиента с сервером",
        description:
          "Наконец программист сделал что обещал. Половина работы сделана.",
        date: "Мар 27, 2021",
        task: "Low",
        user: [require("~/assets/images/users/avatar-2.jpg")],
        groupId: 3
      }
    ]
  }
];

export { tasks };
