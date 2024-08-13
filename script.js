let mobileNav = document.getElementById("nav");
    let navBtn = document.getElementById("nav-btn");
    function navToggle() {
      mobileNav.classList.toggle("open");
    }
    navBtn.onclick = navToggle;
    /////////////// NAV ////////////
    let cardConatiner = document.querySelector(".cards");
    let cards = [
      {
        img: "https://preview.colorlib.com/theme/depot/images/depot_img_1.jpg",
        head: "TRUCK INSURANCE",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio laudantium nulla eos numquam incidunt!",
      },
      {
        img: "https://preview.colorlib.com/theme/depot/images/depot_img_2.jpg",
        head: "TRUCK INSURANCE",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio laudantium nulla eos numquam incidunt!",
      },
      {
        img: "https://preview.colorlib.com/theme/depot/images/depot_img_3.jpg",
        head: "TRUCK INSURANCE",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio laudantium nulla eos numquam incidunt!",
      },
    ];

    for (let i = 0; i < cards.length; i++) {
      cardConatiner.innerHTML += 
      `<div class="card flex-grow">
        <img src="${cards[i].img}" alt="">
        <div class="content text-center py-5 ">
        <h1 class="text-2xl text-blue-600 mb-2">${cards[i].head}</h1>
        <p class="text-[1.2rem] text-gray-900">${cards[i].desc}</p>
        </div></div>`;}