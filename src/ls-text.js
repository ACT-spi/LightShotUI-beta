const style = '.text {\n' +
    '    font-family: Verdana, Geneva, Tahoma, sans-serif;\n' +
    '    font-size: 15px;\n' +
    '    margin: 5px;\n' +
    '    color: #000000;\n' +
    '}\n' +
    '\n' +
    '.shadow {\n' +
    '    padding: 5px;\n' +
    '}'

//组件以类的形式注册
class lsText extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        const text = document.createElement("p");
        text.setAttribute("id", "text");
        text.setAttribute("class", "text");
        text.innerHTML = this.textContent;

        const textStyle = document.createElement("style");
        textStyle.textContent = style;

        shadow.appendChild(textStyle);
        shadow.appendChild(text);
    }
}

customElements.define('ls-text', lsText);