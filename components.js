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

class AccordionItem extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		var normalizedID = this.getAttribute("data-id")
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replaceAll(" ", "_");
		fetch("templates/accordionitem.html", {
			headers: {
				Accept: "text/html",
			},
		})
			.then((response) => response.text())
			.then((text) => {
				this.innerHTML = text
					.replaceAll("{{id}}", normalizedID)
					.replaceAll("{{title}}", this.getAttribute("data-id"));
				var contenturl = "arak/" + normalizedID + ".html";

				this.getHTMLtext(contenturl).then((text) => {
					this.innerHTML = this.innerHTML.replace("{{table}}", text);
				});
			});
	}

	async getHTMLtext(url) {
		var res = await fetch(url, {
			headers: {
				Accept: "text/html",
			},
		});
		return res.text();
	}
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);
customElements.define("accordion-item-component", AccordionItem);
