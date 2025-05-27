
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



 const content = {
      UK: {
        title: "Visa & Immigration Services To UK",
        image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
        services1: ["Visitor Visa", "Student Visa & Admission", "Work Visa – H1B"],
        services2: ["Business Visa", "Student Visa for Canada", "Work permit for Canada"],
      },
      Europe: {
        title: "Visa & Immigration Services To Europe",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
        services1: ["Schengen Visa", "Work Visa", "Family Visa"],
        services2: ["Student Visa", "Business Visa", "Tourist Visa"],
      },
      USA: {
        title: "Visa & Immigration Services To USA",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
        services1: ["B1/B2 Visa", "F1 Visa", "H1B Work Visa"],
        services2: ["L1 Visa", "Business Visa", "Green Card Assistance"],
      },
      Canada: {
        title: "Visa & Immigration Services To Canada",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
        services1: ["Express Entry", "Student Visa", "Work Permit"],
        services2: ["Visitor Visa", "PNP", "Family Sponsorship"],
      },
      Australia: {
        title: "Visa & Immigration Services To Australia",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
        services1: ["Skilled Visa", "Student Visa", "Tourist Visa"],
        services2: ["Family Visa", "Business Visa", "Permanent Residency"],
      }
    };

    function showCountry(country) {
      document.getElementById('active-country').innerText = country;
      document.querySelectorAll('.tabs div').forEach(tab => tab.classList.remove('active'));
      document.querySelector(`.tabs div[onclick*="${country}"]`).classList.add('active');

      const data = content[country];
      document.getElementById('country-info').innerHTML = `
        <h2>${data.title}</h2>
        <p style="color: #0056b3">The Express Entry program is designed for skilled workers...</p>
        <div class="services">
          <ul>${data.services1.map(s => `<li>${s}</li>`).join('')}</ul>
          <ul>${data.services2.map(s => `<li>${s}</li>`).join('')}</ul>
        </div>
        <img class="flag" src="${data.image}" alt="${country} Flag" />
        <button>CONTACT US</button>
      `;
    }
    showCountry('UK');