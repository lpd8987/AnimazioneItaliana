const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />

<style>
/*
#19535f - dark blue
#0B7175 - dark turquoise/green
#D7C9AA - tan
#7B2D26 - dark red
#F0F3F5 - off-white
*/

/*Desktop*/
@media only screen and (min-width: 1024px) {
    /*Nav Styling*/
    #nav-links{
        padding: 0px;
        background-color: black;
    }

    /*Navbar Dropdown*/
    .active-top-nav-item, .active-middle-nav-item, .active-bottom-nav-item{
        font-weight: bold;
        background-color: #0E402D;
        border: 1px solid #9FCC2E;
        border-width: 0px 1px 0px 1px;
        pointer-events: none;
    }

    /*Dropdown Items*/
    .active-top-dropdown-item, .top-dropdown-item{
        color: #9FCC2E;
        border: 3px solid #9FCC2E;
        border-radius: 5px 5px 0px 0px;
    }

    .active-middle-dropdown-item, .active-hoverable-middle-dropdown-item, .middle-dropdown-item{
        color: #9FCC2E;
        border: 3px solid #9FCC2E;
    }

    .active-bottom-dropdown-item, .bottom-dropdown-item{
        color: #9FCC2E;
        border: 3px solid #9FCC2E;
    }

    /*Active*/
    .active-top-dropdown-item, .active-middle-dropdown-item, .active-bottom-dropdown-item{
        font-weight: bold;
        background-color: black;
        pointer-events: none;
    }

    .active-hoverable-middle-dropdown-item{
        font-weight: bold;
        background-color: black;
    }

    .active-bottom-dropdown-item{
        border-radius: 0px 0px 5px 5px;
        border-width: 0px 3px 3px 3px;
    }

    /*inactive*/
    .top-dropdown-item, .middle-dropdown-item, .bottom-dropdown-item{
        background-color: #0E402D;
    }

    .top-dropdown-item:hover, .middle-dropdown-item:hover, .bottom-dropdown-item:hover{
        background-color: #9FCC2E;
        color: #0E402D;
    }

    .top-dropdown-item{
        border-width: 3px 3px 0px 3px;
    }

    .middle-dropdown-item{
        border-width: 0px 3px 0px 3px;
    }

    .bottom-dropdown-item{
        border-radius: 0px 0px 5px 5px;
        border-width: 0px 3px 3px 3px;
    }

    .navbar-dropdown{
        padding: 0px;
        margin-top: 0px;
    }

    .dropdown-menu{
        margin-left: 100%;
        top: -8px;
    }
}

/*Mobile*/
@media only screen and (max-width: 1024px) {
    /*Nav Styling*/
    #nav-links{
        padding: 0px;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    #nav-links::-webkit-scrollbar{
        display: none;
    }

    /**/
    .active-top-nav-item, .top-nav-item{
        color: #9FCC2E;
        border: 3px solid #9FCC2E;
        border-radius: 5px 5px 0px 0px;
    }

    .active-middle-nav-item, .middle-nav-item{
        color: #9FCC2E;
        border: 3px solid #9FCC2E;
    }

    .active-bottom-nav-item, .bottom-nav-item{
        color: #9FCC2E;
        border: 3px solid #9FCC2E;
    }

    /*Active*/
    .active-top-nav-item, .active-middle-nav-item, .active-bottom-nav-item{
        font-weight: bold;
        background-color: Black;
        pointer-events: none;
    }

    .active-bottom-nav-item{
        border-radius: 0px 0px 5px 5px;
        border-width: 0px 3px 3px 3px;
    }

    /*inactive*/
    .top-nav-item, .middle-nav-item, .bottom-nav-item{
        background-color: #0E402D;
    }

    .top-nav-item{
        border-width: 3px 3px 0px 3px;
    }

    .middle-nav-item{
        border-width: 0px 3px 0px 3px;
    }

    .bottom-nav-item{
        border-radius: 0px 0px 5px 5px;
        border-width: 0px 3px 3px 3px;
    }

    
    /*Dropdown Items*/
    .active-top-dropdown-item, .top-dropdown-item{
        color: #9FCC2E;
        border: 3px solid #9FCC2E;
        border-radius: 5px 5px 0px 0px;
        margin: 0px;
    }

    .active-middle-dropdown-item, .middle-dropdown-item, .active-hoverable-middle-dropdown-item{
        color: #9FCC2E;
        border: 3px solid #9FCC2E;
    }

    .active-bottom-dropdown-item, .bottom-dropdown-item{
        color: #9FCC2E;
        border: 3px solid #9FCC2E;
    }

    /*Active*/
    .active-top-dropdown-item, .active-middle-dropdown-item, .active-bottom-dropdown-item{
        font-weight: bold;
        background-color: black;
        pointer-events: none;
    }

    .active-hoverable-middle-dropdown-item{
        font-weight: bold;
        background-color: black;
    }

    .active-bottom-dropdown-item{
        border-radius: 0px 0px 5px 5px;
        border-width: 0px 3px 3px 3px;
    }

    /*inactive*/
    .top-dropdown-item, .middle-dropdown-item, .bottom-dropdown-item{
        background-color: #0E402D;
        margin: 0px;
    }

    .top-dropdown-item:hover, .middle-dropdown-item:hover, .bottom-dropdown-item:hover{
        background-color: #9FCC2E;
        color: #0E402D;
    }

    .top-dropdown-item{
        border-width: 3px 3px 0px 3px;
    }

    .middle-dropdown-item{
        border-width: 0px 3px 0px 3px;
    }

    .bottom-dropdown-item{
        border-radius: 0px 0px 5px 5px;
        border-width: 0px 3px 3px 3px;
    }

    .dropdown-menu{
        width: 99vw;
    }

    #genres:hover{
        background-color: #9FCC2E;
        color: #0E402D;
    }
}


/*Universal Styles*/
/*Style Navbar brand section*/
.navbar-brand{
    background-color: black;
}

.navbar-item{
    color: #9FCC2E;
}

#die-icon:hover, .navbar-item.top-nav-item:hover, .navbar-item.middle-nav-item:hover, .navbar-item.bottom-nav-item:hover{
    background-color: #9FCC2E;
    color: #0E402D;
}

#die-icon:active, .navbar-item.top-nav-item:active, .navbar-item.middle-nav-item:active, .navbar-item.bottom-nav-item:active{
    background-color: white;
    color: #9FCC2E;
}

#burger{
    background-color: #0E402D;
    color: #9FCC2E;
    border: 1px solid #9FCC2E;
    border-width: 0px 0px 0px 1px;
}
/*End Navbar style*/
</style>

<!--Navbar-->
<nav class="navbar is-fixed-top">
    <div class= "navbar-brand">
        <a class="navbar-item" id="die-icon" href="index.html">
            <i class="fas fa-clapperboard fa-lg"></i>
        </a>
        <a class="navbar-burger" id="burger">
            <span></span>
            <span></span>
            <span></span>
        </a>
    </div>

    <div class="navbar-menu" id="nav-links">
        <div class="navbar-start">
            <a class="navbar-item" href="index.html">
                Home
            </a>
      
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-item">
                    Content
                    &nbsp;
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </a>

                <div class="navbar-dropdown p-0">
                    <a class="navbar-item" href="overview.html">
                        Overview
                    </a>

                    <a class="navbar-item" href="context.html">
                        Historical Context
                    </a>

                    <div class="navbar-item dropdown is-hoverable" id="genres">
                        Film Analysis
                        &nbsp;
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                        <div class="dropdown-menu">
                            <div class="dropdown-content p-0">
                                <a class="navbar-item" href="neorealism.html">
                                    Neorealism
                                </a>
                                <a class="navbar-item" href="western.html">
                                    The Western
                                </a>
                                <a class="navbar-item" href="comedy.html">
                                    Comedy
                                </a>
                            </div>
                        </div>
                    </div>

                    <a class="navbar-item" href="conclusion.html">
                        Conclusion
                    </a>
                </div>
            </div>

            <a class="navbar-item" href="community.html">
                Community
            </a>

            <a class="navbar-item" href="documentation.html">
                Documentation
            </a>
            
        </div>
    </div>
</nav>
`;

class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.activePage = this.getAttribute("active-page");
        //console.log(this.activePage);

        this.burgerIcon = this.shadowRoot.querySelector("#burger");
        this.navbarMenu = this.shadowRoot.querySelector("#nav-links");

        this.navItems = this.shadowRoot.querySelectorAll(".navbar-item");
    }

    connectedCallback(){
        this.burgerIcon.addEventListener("click", () => {
            this.navbarMenu.classList.toggle("is-active");
        })

        this.render();
    }

    disconnectedCallback(){
        this.burgerIcon.onclick = null;
    }

    render(){
        switch(this.activePage){
            case "Home":
                this.navItems[0].removeAttribute("href");
                this.navItems[1].classList.add("active-top-nav-item");
                this.navItems[1].removeAttribute("href");
                this.navItems[3].classList.add("middle-nav-item");

                this.navItems[4].classList.add("top-dropdown-item");
                this.navItems[5].classList.add("middle-dropdown-item");
                this.navItems[6].classList.add("middle-dropdown-item");

                this.navItems[7].classList.add("top-dropdown-item");
                this.navItems[8].classList.add("middle-dropdown-item");
                this.navItems[9].classList.add("bottom-dropdown-item");

                this.navItems[10].classList.add("bottom-dropdown-item");

                this.navItems[11].classList.add("middle-nav-item");
                this.navItems[12].classList.add("bottom-nav-item");
                break;
            
            case "Overview":
                this.navItems[1].classList.add("top-nav-item");
                this.navItems[3].classList.add("active-middle-nav-item");

                this.navItems[4].classList.add("active-top-dropdown-item");
                this.navItems[4].removeAttribute("href");
                this.navItems[5].classList.add("middle-dropdown-item");
                this.navItems[6].classList.add("middle-dropdown-item");

                this.navItems[7].classList.add("top-dropdown-item");
                this.navItems[8].classList.add("middle-dropdown-item");
                this.navItems[9].classList.add("bottom-dropdown-item");

                this.navItems[10].classList.add("bottom-dropdown-item");

                this.navItems[11].classList.add("middle-nav-item");
                this.navItems[12].classList.add("bottom-nav-item");
                break;

            case "Context":
                this.navItems[1].classList.add("top-nav-item");
                this.navItems[3].classList.add("active-middle-nav-item");

                this.navItems[4].classList.add("top-dropdown-item");
                this.navItems[5].classList.add("active-middle-dropdown-item");
                this.navItems[6].classList.add("middle-dropdown-item");

                this.navItems[7].classList.add("top-dropdown-item");
                this.navItems[8].classList.add("middle-dropdown-item");
                this.navItems[9].classList.add("bottom-dropdown-item");

                this.navItems[10].classList.add("bottom-dropdown-item");

                this.navItems[11].classList.add("middle-nav-item");
                this.navItems[12].classList.add("bottom-nav-item");
                break;

            case "Neorealism":
                this.navItems[1].classList.add("top-nav-item");
                this.navItems[3].classList.add("active-middle-nav-item");

                this.navItems[4].classList.add("top-dropdown-item");
                this.navItems[5].classList.add("middle-dropdown-item");
                this.navItems[6].classList.add("active-hoverable-middle-dropdown-item");

                this.navItems[7].classList.add("active-top-dropdown-item");
                this.navItems[8].classList.add("middle-dropdown-item");
                this.navItems[9].classList.add("bottom-dropdown-item");

                this.navItems[10].classList.add("bottom-dropdown-item");

                this.navItems[11].classList.add("middle-nav-item");
                this.navItems[12].classList.add("bottom-nav-item");
                break;
            case "Western":
                this.navItems[1].classList.add("top-nav-item");
                this.navItems[3].classList.add("active-middle-nav-item");

                this.navItems[4].classList.add("top-dropdown-item");
                this.navItems[5].classList.add("middle-dropdown-item");
                this.navItems[6].classList.add("active-hoverable-middle-dropdown-item");

                this.navItems[7].classList.add("top-dropdown-item");
                this.navItems[8].classList.add("active-middle-dropdown-item");
                this.navItems[9].classList.add("bottom-dropdown-item");

                this.navItems[10].classList.add("bottom-dropdown-item");

                this.navItems[11].classList.add("middle-nav-item");
                this.navItems[12].classList.add("bottom-nav-item");
                break;
            case "Comedy":
                this.navItems[1].classList.add("top-nav-item");
                this.navItems[3].classList.add("active-middle-nav-item");

                this.navItems[4].classList.add("top-dropdown-item");
                this.navItems[5].classList.add("middle-dropdown-item");
                this.navItems[6].classList.add("active-hoverable-middle-dropdown-item");

                this.navItems[7].classList.add("top-dropdown-item");
                this.navItems[8].classList.add("middle-dropdown-item");
                this.navItems[9].classList.add("active-bottom-dropdown-item");

                this.navItems[10].classList.add("bottom-dropdown-item");

                this.navItems[11].classList.add("middle-nav-item");
                this.navItems[12].classList.add("bottom-nav-item");
                break;
            
            case "Conclusion":
                this.navItems[1].classList.add("top-nav-item");
                this.navItems[3].classList.add("active-middle-nav-item");

                this.navItems[4].classList.add("top-dropdown-item");
                this.navItems[5].classList.add("middle-dropdown-item");
                this.navItems[6].classList.add("middle-dropdown-item");

                this.navItems[7].classList.add("top-dropdown-item");
                this.navItems[8].classList.add("middle-dropdown-item");
                this.navItems[9].classList.add("bottom-dropdown-item");

                this.navItems[10].classList.add("active-bottom-dropdown-item");

                this.navItems[11].classList.add("middle-nav-item");
                this.navItems[12].classList.add("bottom-nav-item");
                break;

            case "Community":
                this.navItems[1].classList.add("top-nav-item");
                this.navItems[3].classList.add("middle-nav-item");

                this.navItems[4].classList.add("top-dropdown-item");
                this.navItems[5].classList.add("middle-dropdown-item");
                this.navItems[6].classList.add("middle-dropdown-item");

                this.navItems[7].classList.add("top-dropdown-item");
                this.navItems[8].classList.add("middle-dropdown-item");
                this.navItems[9].classList.add("bottom-dropdown-item");

                this.navItems[10].classList.add("bottom-dropdown-item");

                this.navItems[11].classList.add("active-middle-nav-item");
                this.navItems[12].classList.add("bottom-nav-item");
                break;

            case "Documentation":
                this.navItems[1].classList.add("top-nav-item");
                this.navItems[3].classList.add("middle-nav-item");

                this.navItems[4].classList.add("top-dropdown-item");
                this.navItems[5].classList.add("middle-dropdown-item");
                this.navItems[6].classList.add("middle-dropdown-item");

                this.navItems[7].classList.add("top-dropdown-item");
                this.navItems[8].classList.add("middle-dropdown-item");
                this.navItems[9].classList.add("bottom-dropdown-item");

                this.navItems[10].classList.add("bottom-dropdown-item");

                this.navItems[11].classList.add("middle-nav-item");
                this.navItems[12].classList.add("active-bottom-nav-item");
                break;

            
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);