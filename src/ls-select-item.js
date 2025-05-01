class LsSelectItem extends HTMLElement {
    constructor() {
        super();
    }
    //控件创建
    select_item = document.createElement("div");
    select_text = document.createElement("p");
    style_text = ".select-text {\n" +
        "    user-select: none;\n" +
        "    margin: 0;\n" +
        "    font-family: Inter, Helvetica, 'PingFang SC', 'Helvetica Neue' ,'Microsoft YaHei UI','微软雅黑', 'Arial',sans-serif;\n" +
        "}\n" +
        "\n" +
        ".select-item {\n" +
        "    cursor: pointer;\n" +
        "    margin: 7px;\n" +
        "    padding: 12px;\n" +
        "    border-radius: 10px;\n" +
        "}\n" +
        "\n" +
        ".select-item:hover {\n" +
        "    background-color: lightgray;\n" +
        "}";
    _style = document.createElement("style");
    connectedCallback() {
        //属性设置
        const shadow = this.attachShadow({ mode: 'open' });
        this.select_item.setAttribute("class", "select-item");
        this.select_text.setAttribute("class","select-text");
        this._style.textContent = this.style_text;
        this.select_text.innerHTML = this.textContent;
        //父子关系
        this.select_item.appendChild(this.select_text);
        shadow.appendChild(this.select_item);
        shadow.appendChild(this._style);
    }
}

customElements.define("ls-select-item", LsSelectItem);