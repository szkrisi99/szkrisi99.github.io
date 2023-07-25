class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		fetch("templates/header.html", {
			headers: {
				Accept: "text/html",
			},
		})
			.then((response) => response.text())
			.then((text) => {
				this.innerHTML = text;
			});
	}
}

class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		fetch("templates/footer.html", {
			headers: {
				Accept: "text/html",
			},
		})
			.then((response) => response.text())
			.then((text) => {
				this.innerHTML = text;
			});
	}
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);
