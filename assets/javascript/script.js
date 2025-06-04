// Navigation Toggle Menu
function showMenu() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
        navLinks.style.right = "0";
    }
}

function hideMenu() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
        navLinks.style.right = "-200px";
    }
}

// Admin Navigation Toggle
function initAdminNav() {
    let menuicn = document.querySelector(".admin-menuicn");
    let nav = document.querySelector(".admin-navcontainer");
    
    if (menuicn && nav) {
        menuicn.addEventListener("click", () => {
            nav.classList.toggle("navclose");
        });
    }
}

// Login form handling
function handleFormSubmit(event, formType) {
    event.preventDefault();
    
    if (formType === 'login') {
   
        const form = event.target;
        const email = form.querySelector('#loginFields input[name="email"]').value;
        const password = form.querySelector('#loginFields input[name="psw"]').value;
        
        console.log("Login attempt with:", email, password);
        

        if (email === "admin@louieli.com" && password === "admin123") {
            console.log("Login successful, redirecting...");
            window.location.href = "admin.html";
            return true;
        } else {
            alert("Invalid credentials. Please try again with:\nEmail: admin@louieli.com\nPassword: admin123");
            return false;
        }
    }
    
    return false;
}

// Registration handling 
function handleRegister() {
    const name = document.querySelector('#registerFields input[name="name"]').value;
    const email = document.querySelector('#registerFields input[name="reg-email"]').value;
    const password = document.querySelector('#registerFields input[name="reg-psw"]').value;
    const confirmPassword = document.querySelector('#registerFields input[name="confirm-psw"]').value;
    
    console.log("Registration attempt:", name, email);

    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }

    alert("Registration successful! You can now log in with your credentials.");
    toggleForm('login'); 
}
// Form popup control
function openForm() {
    const form1 = document.getElementById("myForm");
    const form2 = document.getElementById("myForm2");
    const form3 = document.getElementById("myForm3");
    if (form1) form1.style.display = "block";
    if (form2) form2.style.display = "block";
    if (form3) form3.style.display = "block";
}

function closeForm() {
    const form1 = document.getElementById("myForm");
    const form2 = document.getElementById("myForm2");
    const form3 = document.getElementById("myForm3");
    if (form1) form1.style.display = "none";
    if (form2) form2.style.display = "none";
    if (form3) form3.style.display = "none";
}

// Direct login handling 
function attemptLogin() {

    const emailInput = document.querySelector('#loginFields input[name="email"]');
    const passwordInput = document.querySelector('#loginFields input[name="psw"]');
    
    if (!emailInput || !passwordInput) {
        console.error("Login form inputs not found");
        return;
    }
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    console.log("Login attempt with:", email, password);
    
    if (!email || !password) {
        alert("Please enter both email and password");
        return;
    }
    
    if (email === "admin@louieli.com" && password === "admin123") {
        console.log("Login successful, redirecting to admin page");
        window.location.href = "admin.html";
    } else {
        alert("Invalid credentials. Please use:\nEmail: admin@louieli.com\nPassword: admin123");
    }
}

// Registration handling
function handleRegister() {

    const nameInput = document.querySelector('#registerFields input[name="name"]');
    const emailInput = document.querySelector('#registerFields input[name="reg-email"]');
    const passwordInput = document.querySelector('#registerFields input[name="reg-psw"]');
    const confirmInput = document.querySelector('#registerFields input[name="confirm-psw"]');
    
    if (!nameInput || !emailInput || !passwordInput || !confirmInput) {
        console.error("Registration form inputs not found");
        return;
    }
    
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;
    
    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill out all registration fields");
        return;
    }
    
    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }
    if (email === "user@louieli.com" && password === "user123") {
        console.log("Register successful, redirecting to user page");
        window.location.href = "home.html";
    } else {
        alert("Invalid input.");
    }
    
    alert("Registration successful!");
    toggleForm('login'); 
}

// Toggle between login and registration forms
function toggleForm(formType) {
    const loginFields = document.getElementById("loginFields");
    const registerFields = document.getElementById("registerFields");
    const loginLink = document.getElementById("loginLink");
    const registerLink = document.getElementById("registerLink");
    const formTitle = document.getElementById("formTitle");
    
    if (formType === 'register') {
        loginFields.style.display = "none";
        registerFields.style.display = "block";
        loginLink.style.display = "block";
        registerLink.style.display = "none";
        formTitle.textContent = "REGISTER";
    } else {
        loginFields.style.display = "block";
        registerFields.style.display = "none";
        loginLink.style.display = "none";
        registerLink.style.display = "block";
        formTitle.textContent = "LOGIN";
    }
}
// Packages/Tabs functionality
function openPackage(evt, PackageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(PackageName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Overlay functionality
function initOverlay() {
    const overlay = document.getElementById("overlay");
    const mainContent = document.getElementById("contents");
    const video = document.getElementById("myVideo");
    
    if (overlay && mainContent && video) {
        document.addEventListener("click", function() {
            overlay.style.display = "none";
            mainContent.style.display = "block";
            video.muted = false;
            video.play();
        }, {once: true});
    }
}

// Portfolio slideshow functionality
let pslideIndex = 1;
function initPortfolioSlides() {
    showSlides(pslideIndex);
}

function pplusSlides(n) {
    showSlides(pslideIndex += n);
}

function pcurrentSlide(n) {
    showSlides(pslideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("pSlides");
    const dots = document.getElementsByClassName("pdot");
    
    if (!slides.length) return;
    
    if (n > slides.length) {pslideIndex = 1}    
    if (n < 1) {pslideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[pslideIndex-1].style.display = "block";  
    dots[pslideIndex-1].className += " active";
}

// Blog slideshow functionality
let bslideIndex = 1;
function initBlogSlides() {
    showBlogSlides(bslideIndex);
}

function bplusSlides(n) {
    showBlogSlides(bslideIndex += n);
}

function bcurrentSlide(n) {
    showBlogSlides(bslideIndex = n);
}

function showBlogSlides(n) {
    let i;
    const slides = document.getElementsByClassName("bSlides");
    const dots = document.getElementsByClassName("bdot");
    
    if (!slides.length) return;
    
    if (n > slides.length) {bslideIndex = 1}    
    if (n < 1) {bslideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[bslideIndex-1].style.display = "block";  
    dots[bslideIndex-1].className += " active";
}
function toggleAdminMenu() {
    const navContainer = document.querySelector('.admin-navcontainer');
    const mainContent = document.querySelector('.admin-main');
    
    if (navContainer) {
        if (navContainer.classList.contains('admin-navopen')) {
            navContainer.classList.remove('admin-navopen');
        } else {
            navContainer.classList.add('admin-navopen');
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded"); 
    
    initAdminNav();
    
    initOverlay();
    
    if (document.getElementsByClassName("pSlides").length > 0) {
        initPortfolioSlides();
    }
    
    if (document.getElementsByClassName("bSlides").length > 0) {
        initBlogSlides();
    }

    const tabcontent = document.getElementsByClassName("tabcontent");
    if (tabcontent.length > 0) {
        tabcontent[0].style.display = "block";
        const tablinks = document.getElementsByClassName("tablinks");
        if (tablinks.length > 0) {
            tablinks[0].className += " active";
        }
    }
});