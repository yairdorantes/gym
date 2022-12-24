const experiences = [
  {
    name: "Marisa caleche",
    text: "Buen servicio solo voy a tomarme fotitos jijija",
    img: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/12/halo-infinite-scaled.jpg?fit=2560%2C1637&quality=50&strip=all&ssl=1",
  },
  {
    name: "larry cañonga",
    text: "excelente, adelgace 500kg OMG",
    img: "https://sm.ign.com/ign_es/screenshot/default/analisis-halo-infinite_cjdd.jpg",
  },
  {
    name: "TEST ONE",
    text: "Buen servicio solo voy a tomarme fotitos jijija",
    img: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/12/halo-infinite-scaled.jpg?fit=2560%2C1637&quality=50&strip=all&ssl=1",
  },
  {
    name: "TEST TWO",
    text: "excelente, adelgace 500kg OMG",
    img: "https://sm.ign.com/ign_es/screenshot/default/analisis-halo-infinite_cjdd.jpg",
  },
];
const d = document;

const boxExps = d.querySelector(".swiper-wrapper");
export default function createExperience() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    ///per view
    slidesPerView: 2,
    spaceBetween: 50,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  experiences.map((exp, index) => {
    const templateExp = d.getElementById("experince").content.cloneNode(true);
    templateExp.querySelector(".user-name").textContent = exp.name;
    templateExp.querySelector(".text-experience").textContent = exp.text;
    templateExp.querySelector(
      ".container-img-exp"
    ).style.backgroundImage = `url('${exp.img}')`;

    boxExps.appendChild(templateExp);

    // templateExp.querySelector(".img-experiencia").src = exp.img;
  });
}
createExperience();

// createExperience();
