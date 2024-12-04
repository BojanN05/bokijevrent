$(document).ready(function(){
    setTimeout(function(){
        $("#ocitvanje").fadeOut(500,function(){
            $("#glavnikontent").fadeIn(500);
        });
    },1500);
}); 

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




 let vozila = [
    {
        src: 'slike/golf8.jpg',
        alt: 'VW Golf 8 DSG 2023',
        h: 'VW Golf 8 DSG 2023',
        depozit: '600€',
        vrata: '5',
        menjac: 'Automatski',
        sedista: '5',
        klima: true,
        cena: '36€',
        informacijeE:{
            Potrosnja:'4.2l/100km',
            maxspeed:'250km/h'
        }
            
        
        
    },
    {
        src: 'slike/2021bmw.jpg',
        alt: 'BMW 320 M Sport 2023',
        h: 'BMW 320 M Sport Automatik 2023',
        depozit: '1200€',
        vrata: '5',
        menjac: 'Automatski',
        sedista: '5',
        klima: true,
        cena: '70€',
        informacijeE:{
            Potrosnja:'4.9l/100km',
            maxspeed:'235 km/h'
        }
    },
    {
        src: 'slike/2023Kia.jpg',
        alt: 'Kia Sportage Automatik 2023',
        h: 'Kia Sportage Automatik 2023',
        depozit: '700€',
        vrata: '5',
        menjac: 'Automatski',
        sedista: '5',
        klima: true,
        cena: '44€',
        informacijeE:{
            Potrosnja:'5.7l/100km',
            maxspeed:'210km/h'
        }
    },
    {
        src: 'slike/Audi-A5.jpg',
        alt: 'Audi A5 2019',
        h: 'Audi A5 2019',
        depozit: '500€',
        vrata: '5',
        menjac: 'Automatski',
        sedista: '5',
        klima: true,
        cena: '55€',
        informacijeE:{
            Potrosnja:'4.5l/100km',
            maxspeed:'240km/h'
        }
    },
    {
        src: 'slike/porsekajen.jpg',
        alt: 'Porsche Cayenne',
        h: 'Porsche Cayenne 2021',
        depozit: '700€',
        vrata: '5',
        menjac: 'Automatski',
        sedista: '5',
        klima: true,
        cena: '200€',
        informacijeE:{
            Potrosnja:'3.2l/100km',
            maxspeed:'253km/h'
        }
    },
    {
        src: 'slike/Porsche-Panamera-Turbo-S.jpg',
        alt: 'Porsche Cayenne',
        h: 'Porsche Panamera 2022',
        depozit: '750€',
        vrata: '5',
        menjac: 'Automatski',
        sedista: '5',
        klima: true,
        cena: '250€',
        informacijeE:{
            Potrosnja:'11.5l/100km',
            maxspeed:'306km/h'
        }
    },
    {
        src: 'slike/mercedes_sclass.jpg',
        alt: 'Mercedes S Class',
        h: 'Mercedes S Class 2023',
        depozit: '1000€',
        vrata: '5',
        menjac: 'Automatski',
        sedista: '5',
        klima: true,
        cena: '650€',
        informacijeE:{
            Potrosnja:'14.1l/100km',
            maxspeed:'250km/h'
        }
    },

    {
        src: 'slike/mercedes_gklasa.jpg',
        alt: 'Mercedes G Class',
        h: 'Mercedes G Class 2023',
        depozit: '750€',
        vrata: '5',
        menjac: 'Automatski',
        sedista: '5',
        klima: true,
        cena: '550€',
        informacijeE:{
            Potrosnja:'15.3l/100km',
            maxspeed:'240km/h'
        }
    },
    {
        src: 'slike/mercedes_cklasa.jpg',
        alt: 'Mercedes C Class',
        h: 'Mercedes C Class 2018',
        depozit: '450€',
        vrata: '5',
        menjac: 'Automatski',
        sedista: '5',
        klima: true,
        cena: '300€',
        informacijeE:{
            Potrosnja:'5.0l/100km',
            maxspeed:'233km/h'
        }
    },

    {
        src: 'slike/golf7.5.jpg',
        alt: 'Golf 7.5',
        h: 'Golf 7.5 2019',
        depozit: '450€',
        vrata: '5',
        menjac: 'Automatski',
        sedista: '5',
        klima: true,
        cena: '30€',
        informacijeE:{
            Potrosnja:'6.6l/100km',
            maxspeed:'264km/h'
        }
    },
    {
        src: 'slike/audirs7.jpg',
        alt: 'audi rs7',
        h: 'Audi RS7 2021',
        depozit: '1000€',
        vrata: '5',
        menjac: 'Automatski',
        sedista: '5',
        klima: true,
        cena: '700€',
        informacijeE:{
            Potrosnja:'12.0l/100km',
            maxspeed:'305km/h'
        }
    },
    {
        src: 'slike/BMW-M8-2020.jpg',
        alt: 'BMW M8',
        h: 'BMW M8 2020',
        depozit: '900€',
        vrata: '3',
        menjac: 'Automatski',
        sedista: '4',
        klima: true,
        cena: '800€',
        informacijeE:{
            Potrosnja:'10.7l/100km',
            maxspeed:'305km/h'
        }
    },
    
];

function praviVozilo(vozilo) {
    let praviljenje = `<div class="col-md-4">
                <div class="card h-100 text-center ">
                  <img src="${vozilo.src}" class="card-img-top" alt="${vozilo.alt}">
                  <div class="card-body">
                      <h5 class="card-title">${vozilo.h}.</h5>
                      <p class="card-text">${vozilo.depozit}</p>
                      <div class="d-flex justify-content-around mb-3">
                          <div><i class="fa-solid fa-door-open"></i> ${vozilo.vrata}</div>
                          <div><i class="fa-solid fa-gears"></i> ${vozilo.menjac}</div>
                          <div><i class="fa-solid fa-users"></i>${vozilo.sedista}</div>
                          <div><i class="fa-solid fa-snowflake"></i> ${vozilo.klima ? "klima" : "nema klima"}</div>
                      </div>
                      <p class="fw-bold">od <span class="text-warning">${vozilo.cena}</span> / dan</p>
                      <button class="dugme_voznipark">Informacije o vozilu</button>
                  </div>
                </div>
            </div>
            <div id="modalVozilo" class="modal modul" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content kontent">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitle">Informacije o vozilu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modalBody">
       
      </div>
    </div>
  </div>
</div>     `;
    return praviljenje;
}

let cuvanjeVozila = "";

vozila.forEach(function (vozilo) {
    cuvanjeVozila += praviVozilo(vozilo);
});

let dohavatiVozila = document.querySelector('.vozilo');
if (dohavatiVozila) {
    dohavatiVozila.innerHTML = cuvanjeVozila;
} 





// Selektovanje forme i grešaka
const rezervacijaForm = document.getElementById("rezervacijaForm");
const errorsDiv = document.getElementById("errorsDiv");

rezervacijaForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Sprečava ponovno učitavanje stranice

    // Brisanje prethodnih grešaka
    errorsDiv.innerHTML = '';
    errorsDiv.classList.add('d-none');

    // Inicijalizacija grešaka
    const errors = [];

    // Validacija polja
    const ime = document.getElementById("ime").value.trim();
    const prezime = document.getElementById("Prezime").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const tipRezervacije = document.querySelector('input[name="tipRezervacije"]:checked');
    const usloviKoriscenja = document.getElementById("usloviKoriscenja").checked;

    const imeregex = /^[A-Z][a-z]{1,14}$/;
    const prezimeregex = /^[A-Z][a-z]{1,14}$/;
    const emajlregex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|ict\.edu\.rs)$/;
    const brojregex = /^[0-9]{10}$/; 


    // Validacija za ime
    if (!imeregex.test(ime)) {
        errors.push("Ime mora početi velikim slovom i sadržavati do 15 slova.");
    }
    // Validacija za prezime
    if (!prezimeregex.test(prezime)) {
        errors.push("Prezime mora početi velikim slovom i sadržavati do 15 slova.");
    }
    // Validacija za email
    if (!emajlregex.test(email)) {
        errors.push("Email mora biti validan i iz dozvoljenog domena.");
    }
    // Validacija za broj telefona
    if (!brojregex.test(telefon)) {
        errors.push("Broj mora da bude validan i sadržavati tačno 10 cifara.");
    }
    if (!usloviKoriscenja) {
        errors.push("Morate prihvatiti uslove korišćenja.");
    }
    if (!tipRezervacije) {
        errors.push("Morate odabrati tip rezervacije.");
    }

    // Provera rezultata validacije
    if (errors.length > 0) {
        // Prikazivanje grešaka
        errorsDiv.innerHTML = errors.join("<br>");
        errorsDiv.classList.remove('d-none');
        errorsDiv.style.color = "black";
    } else {
        // Ako je validacija uspešna, obaveštavamo korisnika
        errorsDiv.innerHTML = "Forma je uspešno validirana!";
        errorsDiv.classList.remove('d-none');
        errorsDiv.style.color = "black";

        // Prikazivanje uspešnog obaveštenja
        setTimeout(() => {
            errorsDiv.classList.add('d-none');
        }, 5000);  // Sakrij obaveštenje nakon 5 sekundi
    }
});






document.addEventListener("click", function (event) {
    if (event.target.classList.contains("dugme_voznipark")) {
        // Pronađi karticu vozila
        let card = event.target.closest(".card");
        let vozilo = vozila.find(v => card.querySelector("h5").textContent.includes(v.h));

        // Prikaži informacije u modalu
        if (vozilo) {
            let modalTitle = document.getElementById("modalTitle");
            let modalBody = document.getElementById("modalBody");

            modalTitle.textContent = vozilo.h;
            modalBody.innerHTML = `
                <img src="${vozilo.src}" alt="${vozilo.alt}" class="img-fluid mb-3">
                <p><strong>Depozit:</strong> ${vozilo.depozit}</p>
                <p><strong>Broj vrata:</strong> ${vozilo.vrata}</p>
                <p><strong>Menjač:</strong> ${vozilo.menjac}</p>
                <p><strong>Broj sedišta:</strong> ${vozilo.sedista}</p>
                <p><strong>Klima:</strong> ${vozilo.klima ? "Ima klimu" : "Nema klimu"}</p>
                <p><strong>Cena:</strong> ${vozilo.cena} / dan</p>
                <p><strong>Potrosnja:</strong>${vozilo.informacijeE.Potrosnja}</p>
    <p><strong>Maksimalna brzina:</strong>${vozilo.informacijeE.maxspeed}</p>
            `;

            // Otvori modal
            let modal = new bootstrap.Modal(document.getElementById("modalVozilo"));
            modal.show();
        }
    }
});

