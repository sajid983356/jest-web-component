(() => {

    class UserCard extends HTMLElement {

        constructor() {
            super();

            this.attachShadow({ mode: 'open' });

            this.shadowRoot.innerHTML = `

                <div class="user-card">
                    <img />
                    <div>
                        <h3></h3>
                    </div>
                </div>
                <div id="reason">
                click here
                </div>
          `;
            this._title = "good work sajid 2";
            this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
            this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
            this.reasonElem = this.shadowRoot.getElementById('reason');

            this.reasonElem.addEventListener('click', this.clickFunction, false);

            this.clickFunction = () => {
                console.log("inside of clickFunctions")
            };

            this.setupEvents = () => {
                document.addEventListener('keypress', this.pressed.bind(this), false);
            };

            this.pressed = () => {
                // Called when keypress event is fired
                console.log("inside of pressed");
            }

        }
    }

    window.customElements.define('user-card', UserCard);
    module.exports = UserCard
})();