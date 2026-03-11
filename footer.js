// script.js mein ye code rakhein
document.addEventListener("DOMContentLoaded", () => {
    // Footer load karne ka logic
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;

            const currentPath = window.location.pathname.split("/").pop() || "index.html";
            const footerLinks = document.querySelectorAll('.link-btn');

            footerLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                if (linkHref === currentPath) {
                    link.classList.add('active');
                    if (currentPath === "Certificate.html") {
                        link.style.boxShadow = "0 0 15px #00ccff";
                        link.style.backgroundColor = "#00ccff";
                        link.style.borderColor = "#00ccff";
                    }
                } else {
                    link.classList.remove('active');
                }
            });
        });

    // Navbar Toggle logic
    const btn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-links');
    if (btn && nav) {
        btn.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    // Window resize logic
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && nav) {
            nav.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });

    // Image Animation logic
    const profileImg = document.querySelector('.my-img img');
    if (profileImg) {
        profileImg.animate([
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-20px)' },
            { transform: 'translateY(0px)' }
        ], {
            duration: 3000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    }
});