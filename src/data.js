import images from "./img"
let data = [
  {
    name: "Sasaki Mirai",
    heroName: "Sir Nighteye",
    birthYear: 1982,
    birthMonth: 1,
    birthDay: 2,
    img: images[0],
  },
  {
    name: "Aiba Manami",
    heroName: "La Brava",
    birthYear: 2020 - 22,
    birthMonth: 2,
    birthDay: 14,
    img: images[1],
  },
  {
    name: "Shoji Mezo",
    heroName: "Tentacole",
    birthYear: 2020 - 16,
    birthMonth: 2,
    birthDay: 15,
    img:
      "https://64.media.tumblr.com/12949983a75ed694b90d4137c561ab79/tumblr_inline_pdyczjzkrC1ronqw5_1280.png",
  },
  {
    name: "Amajiki Tamaki",
    heroName: "Suneater",
    birthYear: 2020 - 18,
    birthMonth: 3,
    birthDay: 4,
    img:
      "https://pbs.twimg.com/profile_images/867854961836785665/Q_oPytMm_400x400.jpg",
  },
  {
    name: "Kayama Nemuri",
    heroName: "Midnight",
    birthYear: 2020 - 32,
    birthMonth: 3,
    birthDay: 9,
    img:
      "https://pbs.twimg.com/profile_images/901402596853796865/GAhwjsXo_400x400.jpg",
  },
  {
    name: "Ishiyama Ken",
    heroName: "Cementoss",
    birthYear: 2020 - 29,
    birthMonth: 3,
    birthDay: 22,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/6/65/Ken_Ishiyama_Hero_Costume.png/revision/latest/scale-to-width-down/186?cb=20180717161117",
  },
  {
    name: "Shigaraki Tomura",
    heroName: "none",
    birthYear: 2020 - 20,
    birthMonth: 4,
    birthDay: 4,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/f/f0/Tomura_Shigaraki_liberated.png/revision/latest/scale-to-width-down/135?cb=20190827200334",
  },
  {
    name: "Bakugo Katsuki",
    heroName: "Kacchan",
    birthYear: 2020 - 16,
    birthMonth: 4,
    birthDay: 20,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/6/6c/Katsuki_Bakugo_JTB_Portrait.png/revision/latest/scale-to-width-down/135?cb=20181210020801",
  },
  {
    name: "Buabaigawara Jin",
    heroName: "Twice",
    birthYear: 2020 - 31,
    birthMonth: 5,
    birthDay: 10,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/d/d3/Twice_Manga_Profile.png/revision/latest/scale-to-width-down/135?cb=20181119194558",
  },
  {
    name: "Takagi Ken",
    heroName: "Rock Lock",
    birthYear: 2020 - 32,
    birthMonth: 6,
    birthDay: 9,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/e/e0/Rock_Lock_Portrait.png/revision/latest/scale-to-width-down/135?cb=20190102030755",
  },
  {
    name: "Yagi Toshinori",
    heroName: "All Might",
    birthYear: 65,
    birthMonth: 6,
    birthMonth: 10,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/5/5f/All_Might_headshot_manga.png/revision/latest/scale-to-width-down/135?cb=20180815232819",
  },
  {
    name: " Midorya Izuku",
    heroName: "Deku",
    birthYear: 2020 - 16,
    birthMonth: 7,
    birthDay: 15,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/0/03/Izuku_Midoriya_Manga_Portrait.png/revision/latest/scale-to-width-down/135?cb=20181211153958",
  },
  {
    name: "Togata Mirio",
    heroName: "Lemillion",
    birthYear: 2020 - 20,
    birthMonth: 7,
    birthDay: 15,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/2/29/Lemillion_Manga_Portrait_2.png/revision/latest/scale-to-width-down/135?cb=20190209183816",
  },
  {
    name: "Yamada Hizashi",
    heroName: "Present Mic",
    birthYear: 2020 - 31,
    birthMonth: 7,
    birthDay: 7,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/b/b9/Present_Mic_takes_the_mic.png/revision/latest/scale-to-width-down/135?cb=20181110044332",
  },
  {
    name: "Sero Hanta",
    heroName: "Cellophabe",
    birthYear: 2020 - 16,
    birthMonth: 7,
    birthDay: 28,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/d/d5/Hanta_Sero_JTB_Portrait.png/revision/latest/scale-to-width-down/140?cb=20200811120536",
  },
  {
    name: "Sato Rikido",
    heroName: "Sugarman",
    birthYear: 2020 - 16,
    birthMonth: 6,
    birthDay: 19,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/9/93/Rikido_Sato_JTB_Portrait.png/revision/latest/scale-to-width-down/137?cb=20181210020801",
  },
  {
    name: "Kaminari Denki",
    heroName: "Charge Bolt",
    birthYear: 2020 - 16,
    birthMonth: 6,
    birthDay: 29,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/6/6b/Denki_Kaminari_JTB_Profile.png/revision/latest/scale-to-width-down/135?cb=20181206041531",
  },
  {
    name: "Hagakure Toru",
    heroName: "Invisible Girl",
    birthYear: 2020 - 16,
    birthMonth: 6,
    birthDay: 19,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/a/ab/Toru_Hagakure_Winter_Gloves.png/revision/latest/scale-to-width-down/135?cb=20181206185543",
  },
  {
    name: "Todoroki Enji",
    heroName: "Endeavor",
    birthYear: 2020 - 46,
    birthMonth: 8,
    birthDay: 8,
    img:
      "https://64.media.tumblr.com/6b85707637659df1c3303a725e1c2caa/tumblr_p9v4wlJO7N1sn9gkvo2_500.png",
  },
  {
    name: "Jiro Kyoka",
    heroName: "Earphone Jack",
    birthYear: 2020 - 16,
    birthMonth: 8,
    birthDay: 1,
    img:
      "https://i.pinimg.com/originals/96/90/99/969099c881125336862ca6de39612dce.png",
  },
  {
    name: "Nicolas Anthony",
    heroName: "NKFT",
    birthYear: 2000,
    birthMonth: 11,
    birthDay: 24,
    img:
      "https://pbs.twimg.com/profile_images/1316958760930299904/PWaGc7-h_400x400.jpg",
  },
  {
    name: "Mineta Minoru",
    heroName: "Grape Juice",
    birthYear: 2020 - 16,
    birthMonth: 10,
    birthDay: 8,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/d/d6/Minoru_Mineta_JTB_Portrait.png/revision/latest/scale-to-width-down/135?cb=20190205053314",
  },
  {
    name: "Kirishima Eijiro",
    heroName: "Red Riot",
    birthYear: 2020 - 16,
    birthMonth: 10,
    birthDay: 16,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/b/bb/Eijiro_Kirishima_JTB_Profile.png/revision/latest/scale-to-width-down/135?cb=20181206041530",
  },
  {
    name: "Hakamada Tsunagu",
    heroName: "Best Jeanist",
    birthYear: 2020 - 36,
    birthMonth: 10,
    birthDay: 5,
    img:
      "https://static.wikia.nocookie.net/bokunoheroacademia/images/b/b4/Best_Jeanist_manga_headshot.png/revision/latest/scale-to-width-down/135?cb=20170904230735",
  },
];

export default data;
