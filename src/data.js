const questionsType = [
    {
      title: "Gender",
      key: "gender",
      questions: ["Man", "Woman"],
    },
    {
      title: "Hair Color",
      key: "hairColor",
      questions: ["Blonde", "Red", "Pink", "Brown", "White", "Black"],
    },
    {
      title: "Moustache",
      key: "moustache",
      questions: ["Yes", "No"],
    },
    {
      title: "Glasses",
      key: "glasses",
      questions: ["Yes", "No"],
    },
    {
      title: "Hat or Cap",
      key: "hatOrCap",
      questions: ["Yes", "No"],
    },
    {
      title: "Clothes color",
      key: "clothesColor",
      questions: ["Red", "Orange", "Green", "White", "Black", "Pink"],
    },
    {
      title: "Skin color",
      key: "skinColor",
      questions: ["Light", "Dark"],
    },
    {
      title: "Long Hair",
      key: "longHair",
      questions: ["Yes", "No"],
    },
  ];
  
  const persons = [
    {
      img: "/001-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/002-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/003-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/004-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/005-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/006-man.svg",
      gender: "Man",
      hairColor: "Brown",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/007-man.svg",
      gender: "Man",
      hairColor: "Red",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/008-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/009-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/010-woman.svg",
      gender: "Woman",
      hairColor: "Brown",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "/011-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "/012-woman.svg",
      gender: "Woman",
      hairColor: "Red",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "/013-woman.svg",
      gender: "Woman",
      hairColor: "White",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "/014-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "/015-woman.svg",
      gender: "Woman",
      hairColor: "Brown",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "/016-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "/017-woman.svg",
      gender: "Woman",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/018-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "/019-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "/020-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "/021-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "/022-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "/023-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "/024-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "/025-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "/026-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "/027-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "/028-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "/029-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "/030-woman.svg",
      gender: "Woman",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "/031-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "/032-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "/033-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "/034-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "/035-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/036-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/037-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/038-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/039-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/040-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/041-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/042-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/043-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "/044-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "/045-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
  ];

  export {questionsType ,persons};