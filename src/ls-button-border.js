class LsButtonBorder extends HTMLElement {
    constructor() {
        super();
    }
    W = this.getAttribute("width");
    H = this.getAttribute("height");
    button = document.createElement("div");
    text = document.createElement("p");
    style = ".button {\n" +
        "    border-radius: 7px;\n" +
        "    display: grid;\n" +
        "    place-items: center;\n" +
        "    border: 1px solid #aad5ff;\n" +
        "    width: " + this.W + ";" + "\n" +
        "    height: " + this.H + ";" + "\n" +
        "    transition: border 0.1s ease-in-out;\n" +
        "}\n" +
        "\n" +
        ".p {\n" +
        "    font-family: Verdana, Geneva, Tahoma, sans-serif;\n" +
        "    font-size: 15px;\n" +
        "    position: absolute;\n" +
        "}\n" +
        "\n" +
        ".button:hover {\n" +
        "    border: 2px solid #97ceff;\n" +
        "}"
    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        this.button.setAttribute("id", "button");
        this.button.setAttribute("class", "button");

        //按钮中的text部分
        this.text.setAttribute("id", "p");
        this.text.setAttribute("class", "p");
        this.text.innerHTML = this.textContent;

        //增加子组件
        this.button.appendChild(this.text);

        //设置CSS
        const ButtonStyle = document.createElement("style");
        ButtonStyle.textContent = this.style;

        //添加两个组件到根组件
        shadow.appendChild(ButtonStyle);
        shadow.appendChild(this.button);

        console.log("ls-button-border created");
    }

    //返回两个属性标签
    static get observedAttributes() {
        return ["width", "height"];
    }
    //这里可以直接获取属性值，所以不写get方法

    attributeChangedCallback(name, oldValue, newValue) {
        //这里没有单位，请在更改属性时加上单位，一切都和HTML操作是一样的
        if (name === "width") {
            this.button.style.width = newValue;
        } else if (name === "height") {
            this.button.style.height = newValue;
        }
    }
}

//定义组件
customElements.define('ls-button-border', LsButtonBorder);