//ocitavanje strane jquery
  $(document).ready(function(){
    setTimeout(function(){
        $("#ocitvanje").fadeOut(500,function(){
            $("#glavnikontent").fadeIn(500);
        });
    },1500);
});  



// NAVIGACIJA//
let linkovi = [
    {
        link:"index.html",
        text:"Početna"
    },
    {
        link:"o_nama.html",
        text:"O nama"
    },
    {
        link:"dodaci.html",
        text:"Dodaci"
    },
    {
        link: "voznipark.html",
        text: "Vozni Park"
    },
    {
        link: "autor.html",
        text: "Autor"
    }

    


];
function pravilink(link){
    let praviljenje = `<li class="nav-item"><a class="nav-link active" aria-current="page" href="${link.link}">${link.text}</a></li>` 
    return praviljenje;
}

let cuvanjelinkova ="";

linkovi.forEach(function(link){
    cuvanjelinkova +=pravilink(link);
})

let dohvatanje= document.querySelector(".lista");
if(dohvatanje){
    dohvatanje.innerHTML=cuvanjelinkova;
}


//KARTICE ZA AUTOMOBILE//

let kartice = [
    {
        src:'slike/golf8.jpg',
        alt:'VW Golf 8 DSG 2023',
        h:'VW Golf 8 DSG 2023',
        depozit:'600€',
        vrata:'5',
        menjac:'Automatski',
        sedista:'5',
        klima:true,
        cena:'36€'
    },
    {
        src:'slike/2021bmw.jpg',
        alt:'BMW 320 M Sport 2023',
        h:'BMW 320 M Sport Automatik 2023',
        depozit:'1200€',
        vrata:'5',
        menjac:'Automatski',
        sedista:'5',
        klima:true,
        cena:'70€'
    },
    {
        src:'slike/2023Kia.jpg',
        alt:'Kia Sportage Automatik 2023',
        h:'Kia Sportage Automatik 2023',
        depozit:'700€',
        vrata:'5',
        menjac:'Automatski',
        sedista:'5',
        klima:true,
        cena:'44€'
    },


]
function praviKarticu(kartica){
    let praviljenje = `<div class="col-md-4">
                <div class="card h-100 text-center ">
                  <img src="${kartica.src}" class="card-img-top" alt="${kartica.alt}">
                  <div class="card-body">
                      <h5 class="card-title">${kartica.h}.</h5>
                      <p class="card-text">${kartica.depozit}</p>
                      <div class="d-flex justify-content-around mb-3">
                          <div><i class="fa-solid fa-door-open"></i> ${kartica.vrata}</div>
                          <div><i class="fa-solid fa-gears"></i> ${kartica.menjac}</div>
                          <div><i class="fa-solid fa-users"></i>${kartica.sedista}</div>
                          <div><i class="fa-solid fa-snowflake"></i> ${kartica.klima ? "klima":"nema klima"}</div>
                      </div>
                      <p class="fw-bold">od <span class="text-warning">${kartica.cena}</span> / dan</p>
                  </div>
                </div>
            </div>
            `;
            return praviljenje
}

let cuvanjeKartica= "";

kartice.forEach(function(kartica){
    cuvanjeKartica+=praviKarticu(kartica);
})

let dohavatiKarticu = document.querySelector('.kartica');
if(dohavatiKarticu){
    dohavatiKarticu.innerHTML=cuvanjeKartica;
}




 //ikonice u futeru//
let ikonice = [
    {
        icon: '<i class="fab fa-facebook-f"></i>',
        href:`https://www.facebook.com/`
    },
    {
        icon: '<i class="fa-brands fa-instagram"></i>',
        href:`https://www.instagram.com/`
    },
    {
        icon: '<i class="fa-solid fa-rss"></i>',
        href: `rss.xml`
    },
    {
        icon: '<i class="fa-solid fa-sitemap"></i>',
        href: `sitemap.xml`
    }
   

]

function praviIkonicu(ikonica){
    let praviljenje=`<a href="" class="me-4 text-reset">${ikonica.icon}</a>`;
     return praviljenje
}

let cuvanjeIkonica="";

ikonice.forEach(function(ikonica){
    cuvanjeIkonica+= praviIkonicu(ikonica);
})

let dohavatiIkonicu = document.querySelector('.ikonicee');
if(dohavatiIkonicu){
    dohavatiIkonicu.innerHTML=cuvanjeIkonica;
}

// Otvori modal kada se klikne na dugme "Rezerviši i regex"
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("closeBtn");
let rezervisiBtn = document.getElementById("rezervisiBtn");
let rezervacijaForm = document.getElementById("rezervacijaForm");
let errorsDiv = document.getElementById("errors");

// Prikaz modala
rezervisiBtn.addEventListener("click", function () {
    modal.style.display = "flex";
    modal.classList.remove("hide");
    modal.classList.add("show");
});

// Zatvaranje modala
closeBtn.addEventListener("click", function () {
    modal.classList.remove("show");
    modal.classList.add("hide");

    modal.addEventListener(
        "animationend",
        function () {
            if (modal.classList.contains("hide")) {
                modal.style.display = "none";
            }
        },
        { once: true }
    );
});

// Validacija forme
rezervacijaForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Sprečava ponovno učitavanje stranice
    const errors = [];

    // Validacija polja
    const ime = document.getElementById("ime").value.trim();
    const prezime = document.getElementById("Prezime").value.trim();
    const email = document.getElementById("email").value.trim();
    const broj= document.getElementById("phone").value.trim();

    const imeregex = /^[A-Z][a-z]{1,14}$/;
    const prezimeregex = /^[A-Z][a-z]{1,14}$/;
    const emajlregex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|ict\.edu\.rs)$/;
    const brojregex= /^[0-9]{10}$/;

    if (!imeregex.test(ime)) {
        errors.push("Ime mora početi velikim slovom i sadržavati do 15 slova.");
    }
    if (!prezimeregex.test(prezime)) {
        errors.push("Prezime mora početi velikim slovom i sadržavati do 15 slova.");
    }
    if (!emajlregex.test(email)) {
        errors.push("Email mora biti validan i iz dozvoljenog domena.");
    }
    if(!brojregex.test(broj)){
        errors.push("Broj mora da bude u skladu sa propisima i dozvoljenog opsega")
    }

    // Provera rezultata validacije
    if (errors.length > 0) {
        errorsDiv.innerHTML = errors.join("<br>");
        errorsDiv.style.color = "black";
    } else {
        errorsDiv.innerHTML = "Forma je uspešno validirana!";
        errorsDiv.style.color = "green";

        // Zatvori modal ako je validacija uspešna
        closeBtn.click();
    }
});

