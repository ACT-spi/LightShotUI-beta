class LsInputNormal extends HTMLElement {
    constructor() {
        super();
    }
    style_text = ".input-text {\n" +
        "    padding: 10px;\n" +
        "    border: #97ceff solid 1px;\n" +
        "    width: 500px;\n" +
        "    border-radius: 15px;\n" +
        "    position: relative;\n" +
        "    font-family: Inter, Helvetica, 'PingFang SC', 'Helvetica Neue' ,'Microsoft YaHei UI','微软雅黑', 'Arial',sans-serif;\n" +
        "}\n" +
        "\n" +
        ".input-text:hover {\n" +
        "    border-color: #80c6ff;\n" +
        "}\n" +
        "\n" +
        ".input-text:focus {\n" +
        "    outline: none;\n" +
        "    border: #5eb6ff solid 2px;\n" +
        "    border-radius: 15px;\n" +
        "}\n" +
        "\n" +
        ".input-parent {\n" +
        "    display: inline-block;\n" +
        "    position: relative;\n" +
        "}\n" +
        "\n" +
        ".labels {\n" +
        "    position: absolute;\n" +
        "    top: 8px;\n" +
        "    font-size: 15px;\n" +
        "    left: 19px;\n" +
        "    background-color: rgba(255,255,255,1);\n" +
        "    z-index: 1;\n" +
        "    margin: 0;\n" +
        "    color: #7e7e7e;\n" +
        "    border: rgba(256,256,256,1) solid 1px;\n" +
        "    transition: all 0.2s ease;\n" +
        "}\n" +
        "\n" +
        ".input-text:focus + .labels,\n" +
        ".input-text:not(:placeholder-shown) + .labels {\n" +
        "    top: -8px;\n" +
        "    font-size: 10px;\n" +
        "}";
    input_parent = document.createElement("div");
    input_text = document.createElement("input");
    labels = document.createElement("p");
    _style = document.createElement("style");
    connectedCallback() {
        //内部组件创建
        const shadow = this.attachShadow({ mode: 'open' });
        //类设置
        this.input_parent.setAttribute("class","input-parent");
        this.input_text.setAttribute("class","input-text");
        this.labels.setAttribute("class","labels");
        this._style.textContent = this.style_text;
        //其它属性设置
        this.input_text.setAttribute("placeholder"," ");
        this.input_text.setAttribute("type","text");
        this.labels.innerHTML = this.getAttribute("placeholder");
        this.input_text.style.width = this.getAttribute("width");
        //添加父子关系
        this.input_parent.appendChild(this.input_text);
        this.input_parent.appendChild(this.labels);
        shadow.appendChild(this.input_parent);
        shadow.appendChild(this._style);
    }

    static get observedAttributes() {
        return ["width","placeholder"];
    }

    AttributeChangedCallback(name, oldValue, newValue) {
        if (name === "width") {
            this.input_text.style.width = newValue;
        } else if (name === "placeholder") {
            this.labels.innerHTML = newValue;
        }
    }
}

customElements.define("ls-input-normal", LsInputNormal);