import '@fontsource-variable/cormorant-garamond/wght.css';
import '@fontsource-variable/cormorant-garamond/wght-italic.css';
import '@fontsource-variable/rubik';
import './style.css';
import 'swiper/swiper-bundle.css';
import Macy from 'macy';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Aos from 'aos';
import "aos/dist/aos.css";



class Page {
  constructor() {
    this.init();
  }

  init = () => {
    document.addEventListener("DOMContentLoaded", (event) => {
      this.initMenu();
      this.initScrollToTop();
      this.initAOS();
      this.initMasonryGallery();
      this.initTestimonialsSlider();
    });
  }

  initMenu = () => {
    const nav = document.getElementById('nav');
    const links = nav.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const linkUrl = new URL(link.href);
        const linkTarget = document.querySelector(linkUrl.hash);

        linkTarget.scrollIntoView({ behavior: "smooth" });

      });
    });
  }

  initScrollToTop = () => {
    const button = document.getElementById('scrollToTop');
    const buttonShowClasses = "pointer-events-all opacity-100";

    button.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(123);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    window.addEventListener('scroll', () => {
      const scrollLevelToShow = document.body.getBoundingClientRect().height / 3;
      
      button.classList.toggle('opacity-100', scrollLevelToShow < window.pageYOffset)
      button.classList.toggle('pointer-events-auto', scrollLevelToShow < window.pageYOffset)

      button.classList.toggle('opacity-0', scrollLevelToShow > window.pageYOffset)
      button.classList.toggle('pointer-events-none', scrollLevelToShow > window.pageYOffset)
    });
  };

  initMasonryGallery = () => {
    Macy({
      container: '#masonry',
      margin: 20,
      columns: 4,
      breakAt: {
        300: { columns: 1, margin: 5 },
        768: { columns: 2, margin: 10 },
        1200: { columns: 2, margin: 20 },
        1680: { columns: 3, margin: 20 }
      }
    })
  };

  initTestimonialsSlider = () => {
    const swiper = new Swiper('#testimonials-slider',
      {
        modules: [Pagination],
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    );
  };

  initAOS = () => {
    Aos.init();
  };

}

new Page();