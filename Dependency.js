class Dependency extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <div></div>
      `;

        this.reasonElem = this.shadowRoot.querySelector('div');

        this.reasonElem.addEventListener('click', () => this.getPrint());

        this.setupEvents = () => {
            console.log("inside setupEvents")
            // document.addEventListener('click', this.pressed.bind(this), false);
            document.addEventListener('click', () => this.getPrint());
            console.log("After setupEvents")
        }
        this.getPrint = () => {
            console.log("printing a click functions");
            this.pressed()
        }


        this.pressed = () => {
            console.log("inside the pressed")
            // Called when keypress event is fired
        }
    }


}
window.customElements.define('dependency-element', Dependency);
module.exports = Dependency;