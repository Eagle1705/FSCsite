import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {

  ngOnInit(): void {
    console.log("Script caricato correttamente.");

    // 1. Schermata di caricamento
    setTimeout(() => {
      const loadingScreen = document.getElementById("loading-screen");
      const mainContent = document.getElementById("main-content");
      if (loadingScreen) loadingScreen.style.display = "none";
      if (mainContent) mainContent.style.display = "block";
    }, 2800);

    // 2. Navbar dinamica
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    });

    // 3. Attiva container nelle sezioni visibili
    const sections = document.querySelectorAll('.section');
    const activateVisibleSections = () => {
      sections.forEach((section) => {
        const container = section.querySelector('.container');
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (container) {
          container.classList.toggle('active', isVisible);
        }
      });
    };
    window.addEventListener('scroll', activateVisibleSections);

    // 4. Animazione paragrafi `.content`
    const paragraphs = document.querySelectorAll('.content');
    const animateParagraphs = () => {
      const windowHeight = window.innerHeight;
      paragraphs.forEach((p) => {
        const rect = p.getBoundingClientRect();
        const triggerPoint = windowHeight * 0.75;
        if (rect.top <= triggerPoint) {
          (p as HTMLElement).style.opacity = "1";
          (p as HTMLElement).style.transform = "translateY(0)";
        } else {
          (p as HTMLElement).style.opacity = "0";
          (p as HTMLElement).style.transform = "translateY(50px)";
        }
      });
    };
    window.addEventListener('scroll', animateParagraphs);

    // 5. Gestione banner
    const banners = document.querySelectorAll('.banner');
    const section = document.getElementById('Navigazione');
    const handleBannerVisibility = () => {
      const threshold = window.innerHeight * 0.75;
      banners.forEach((banner) => {
        const rect = banner.getBoundingClientRect();
        const isVisible = rect.top < threshold && rect.bottom > 0;
        banner.classList.toggle('visible', isVisible);
      });
    };
    window.addEventListener('scroll', handleBannerVisibility);
    handleBannerVisibility(); // chiamata iniziale

    banners.forEach((banner) => {
      banner.addEventListener('mouseenter', () => {
        const hoverBg = banner.getAttribute('data-hover-bg');
        if (section && hoverBg) {
          section.style.setProperty('--bg-color', `${hoverBg}80`);
        }
      });

      banner.addEventListener('mouseleave', () => {
        section?.style.setProperty('--bg-color', 'rgba(0, 0, 0, 0.5)');
      });
    });

    // 6. Linee animate
    const lineContainers = document.querySelectorAll(".line-container");
    lineContainers.forEach((container) => container.classList.add("active"));

    window.addEventListener("scroll", () => {
      const threshold = 10;
      lineContainers.forEach((container) => {
        if (window.scrollY > threshold) {
          container.classList.remove("active");
          container.classList.add("hidden");
        } else {
          container.classList.remove("hidden");
          container.classList.add("active");
        }
      });
    });

    // 7. Tema chiaro/scuro
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle?.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      themeToggle.textContent = document.body.classList.contains("light-mode")
        ? "Modalità Scuro"
        : "Modalità Chiaro";
    });
  }

}
