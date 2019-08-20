// Create class for component, this is an autonomous custom element
// Autonomous custom elements are standalone, don´t inherit from standard HTML elements
// Customized built-in elements inherit from basic HTML elements
class MyComponent extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();

		// Create a shadow root
		const shadow = this.attachShadow({mode: 'open'});

		// Create content
		const info = document.createElement('span');
		info.setAttribute('class', 'some');

		// Get attribute = props
		const title = this.getAttribute('data-text');
		info.textContent = title;

		// Create some CSS to apply to the shadow dom
		const style = document.createElement('style');
		style.textContent = `
			.some {
				font-size: 0.8rem;
				width: 200px;
				display: inline-block;
				border: 1px solid black;
				padding: 5px;
				background: red;
				border-radius: 3px;
			}
		`;

		// Attach the created elements to the shadow dow
		shadow.appendChild(style);
		shadow.appendChild(info);
	}
}

// Define the new element to be used in HTML
customElements.define('my-component', MyComponent);

