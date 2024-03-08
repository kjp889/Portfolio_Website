/*=================toggle icon navbar=========================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*=================scroll section active link=========================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*=================sticky navbar=========================*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*=================remove toggle icon and navbar when click navbar link scroll=========================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==========scroll reveal============*/
ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-image, .skill-container, .portfolio-box", {
  origin: "bottom",
});
ScrollReveal().reveal(".about-image", { origin: "left" });

const typed = new Typed(".multiple_text", {
  strings: ["Software Developer", "Photographer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*========toggle overflow===========*/
function toggle_overflow(id) {
  let btnVisible = document.getElementById(id);
  btnVisible.classList.toggle("btn_hide");

  if (id === "btn_webDev") {
    let infoText = document.getElementById("info_webDev");
    infoText.classList.toggle("expanded");
  } else if (id === "btn_database") {
    let infoText = document.getElementById("info_database");
    infoText.classList.toggle("expanded");
  } else if (id === "btn_photo") {
    let infoText = document.getElementById("info_photo");
    infoText.classList.toggle("expanded");
  } else if (id === "btn_graphic") {
    let infoText = document.getElementById("info_graphic");
    infoText.classList.toggle("expanded");
  } else {
    let infoText = document.getElementById("info_prog");
    infoText.classList.toggle("expanded");
  }
}

/*============About Tabs================*/
let tabLinks = document.getElementsByClassName("tab_links");
let tabContents = document.getElementsByClassName("tab_contents");

function opentab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active");
  }

  event.currentTarget.classList.add("active");
  document.getElementById(tabname).classList.add("active");
}

/*============Contact Form================*/
const form = document.querySelector("form");
const fulname = document.getElementById("full_name");
const email = document.getElementById("email_address");
const phone = document.getElementById("phone_number");
const subject = document.getElementById("email_subject");
const mess = document.getElementById("message");

function sendEmail() {
  const mailBody = `Name: ${fulname.value}<br>
	Phone Number: ${phone.value}<br>
	Email Address: ${email.value}<br><br>
	Message: ${mess.value}`;

  Email.send(console.log("try"), {
    Host: "smtp.elasticemail.com",
    Username: "kjp056@gmail.com",
    Password: "C1294584303FD860A24CAC9495F2081A7C3A",
    To: "kjp056@gmail.com",
    From: "kjp056+website@gmail.com",
    Subject: subject.value,
    Body: mailBody,
  }).then(
    console.log("sent"),
    //message => alert(message)
    (message) => {
      if (message == "OK") {
        Swal.fire({
          title: "Message Sent Successfully",
          text: "Thank you for reaching out",
          icon: "success",
        });
      }
    }
  );
}

function checkInput() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    // Initial check for empty values
    if (item.value === "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    // Keyup event listener
    item.addEventListener("keyup", () => {
      if (item.value !== "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailErrorTxt = document.querySelector(".error_txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      emailErrorTxt.innerText = "Enter a valid email address";
    } else {
      emailErrorTxt.innerText = "Email Address cannot be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();

  if (
    !fulname.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !mess.classList.contains("error")
  ) {
    sendEmail();
    console.log("ok");

    form.reset();
    return false;
  }
});
