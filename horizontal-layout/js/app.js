/* 
    classe accepte un objet pour quelques parametres 
    (possible evolution du code ) 
    mais a des parametres par defaut 
*/
class SmoothScroller {
    constructor(params = {}){
        this.links = params.links || 'a[href^="#"]'
    }
    init() {
        document.querySelectorAll(this.links).forEach( anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(anchor.getAttribute('href')).scrollIntoView(
                {
                    behavior: 'smooth'
                });
            });
        });
    }
}

class ToggleMenu {
    constructor() {
      this.navbar = document.getElementById("navbar");
      this.burger = document.getElementById("burger");
      this.navlinks = document.querySelectorAll(`#navbar li a`);
      this.screenSize = 800;
    }
  
    init() {
        this.burger.addEventListener("click", () => {
                this.toggleMenu();
            });
        
        this.navlinks.forEach((item) => {
            item.addEventListener("click", () => {
                this.toggleMenu();
            });
        });
        console.log( this.navbar)
      window.addEventListener("resize", () => {
        if (window.innerWidth > this.screenSize) {
          this.removeMenu();
        }
      });
    }
  
    toggleMenu() {

      this.navbar.classList.toggle("open");
    }
    removeMenu() {
      this.navbar.classList.remove("open");
    }
  }
  
  /*utilisation simple*/
new ToggleMenu().init();;
new SmoothScroller().init()