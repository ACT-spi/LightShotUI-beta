
class LsIntrotext extends HTMLElement {
    constructor() {
        super();
    }

    style = ".out-container {\n" +
        "    padding: 10px;\n" +
        "    border: 2px solid white;\n" +
        "    box-shadow: 0px 0px 10px #7e7e7e;\n" +
        "    border-radius: 15px;\n" +
        "    display: inline-block;\n" +
        "    transition: border-color 0.4s ease-in-out;\n" +
        "}\n" +
        "\n" +
        ".img {\n" +
        `    width: ${this.getAttribute('img-width')}\n;
` +
        `    height: ${this.getAttribute('img-height')}\n;
` +
        "}\n" +
        "\n" +
        "h4 {\n" +
        "    font-weight: 800;\n" +
        "    color: #303133;\n" +
        "    margin: 0;\n" +
        "}\n" +
        "\n" +
        ".content {\n" +
        "    font-size: 15px;\n" +
        "}\n" +
        "\n" +
        ".out-container:hover {\n" +
        "    border: 2px solid #97ceff;\n" +
        "}\n" +
        "\n" +
        ".intro-text {\n" +
        "    font-size: 12px;\n" +
        "    color: #80c6ff;\n" +
        "    margin-left: 9px;\n" +
        "}"
     out_container = document.createElement("div");
     in_container = document.createElement("div");
     img = document.createElement("div");
     title = document.createElement("h4");
    intro_text = document.createElement("p");
    content = document.createElement("p");
    _style = document.createElement("style");

    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        //创建所有元素

        //绑定类关系
        this.out_container.setAttribute("class","out-container");
        this.in_container.setAttribute("class","in-container");
        this.img.setAttribute("class","img");
        this.title.setAttribute("class","title");
        this.intro_text.setAttribute("class","intro-text");
        this.content.setAttribute("class","content");
        //添加父子关系
        this.out_container.appendChild(this.in_container);
        this.in_container.appendChild(this.img);
        this.in_container.appendChild(this.title);
        this.in_container.appendChild(this.intro_text);
        this.in_container.appendChild(this.content);
        shadow.appendChild(this.out_container);
        shadow.appendChild(this._style);
        //杂项处理
        this._style.textContent = this.style;
        this.content.innerHTML = this.textContent;
        this.img.style.backgroundImage = `url('${this.getAttribute("url")}')`;
        this.img.style.backgroundRepeat = "no-repeat";
        this.img.style.backgroundSize = "cover";
        this.title.innerHTML = this.getAttribute("title");
        this.intro_text.innerHTML = this.getAttribute("intro-text");
    }

    static get observedAttributes() {
        return ["img-width","img-height","url","title","intro-text"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "img-width") {
            this.img.style.width = newValue;
        } else if (name === "img-height") {
            this.img.style.height = newValue;
        } else if (name === "url") {
            this.img.style.backgroundImage = `url('${newValue}')`;
        } else if (name === "title") {
            this.title.innerHTML = newValue;
        } else if (name === "intro-text") {
            this.intro_text.innerHTML = newValue;
        }
    }
}

customElements.define('ls-introtext', LsIntrotext);