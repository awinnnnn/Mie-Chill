// Toggle clas active
const navbarNav = document.querySelector('.navbar-nav');

// When menu clicked
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// When outside menu clicked
const menulist = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

// Validation
function validateForm(event) {
    event.preventDefault();
  
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const preferencesInput = document.getElementById('preferences');
    const newsletterCheckbox = document.getElementById('newsletter');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    const preferencesError = document.getElementById('preferences-error');
    const newsletterError = document.getElementById('newsletter-error');
  
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const preferences = preferencesInput.value;
    const message = messageInput.value.trim();
    const newsletter = newsletterCheckbox.checked;  
  
    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    preferencesError.textContent = '';
    messageError.textContent = '';
  
    // Validate Full Name
    if (fullName.length < 5 || !/^[a-zA-Z]+$/.test(fullName)) {
        fullNameInput.classList.add('error');
        nameError.textContent = 'Nama Lengkap harus terdiri dari minimal 5 karakter dan hanya terdiri dari karakter alfabet.';
    } else {
        fullNameInput.classList.remove('error');
    }
  
    // Validate Email Address
    if (!email.endsWith('@gmail.com')) {
        emailInput.classList.add('error');
        emailError.textContent = 'Alamat email harus diakhiri dengan “@gmail.com”.';
    } else {
        emailInput.classList.remove('error');
    }
  
    // Validate Phone Number
    if (phone.length < 11 || !/^\d+$/.test(phone)) {
        phoneInput.classList.add('error');
        phoneError.textContent = 'Nomor Telepon harus terdiri dari 11 karakter dan hanya berisi karakter angka.';
    } else {
        phoneInput.classList.remove('error');
    }

    // Validate Preferences
    if (preferences === '') {
        preferencesInput.classList.add('error');
        preferencesError.textContent = 'Silahkan pilih topik.';
    } else {
        preferencesInput.classList.remove('error');
    }

    if (message.length < 10) {
        messageInput.classList.add('error');
        messageError.textContent = 'Pesan harus terdiri dari minimal 10 karakter.';
    } else {
        messageInput.classList.remove('error');
    }

    // Validate Newsletter Checkbox
    // if (!newsletterCheckbox.checked) {
    //     newsletterError.textContent = 'You must agree to receive the newsletter.';
    // } else {
    //     newsletterError.textContent = '';
    // }
}
  
function displaySuccessMessage() {
    const form = document.getElementById('contact-form');
  
    form.style.display = 'none';
    successMessage.style.display = 'block';
}