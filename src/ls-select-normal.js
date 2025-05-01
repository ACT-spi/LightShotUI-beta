 class LsSelectNormal extends HTMLElement {
    constructor() {
        super();
    }
    select_parent = document.createElement("div");
    select_sign = document.createElement("div");
    select_box = document.createElement("div");
    _style = document.createElement("style");
    item_slot = document.createElement("slot");
    style_text = ".select-parent {\n" +
        "    width: 100px;\n" +
        "    height: 35px;\n" +
        "    border-radius: 15px;\n" +
        "    border: 1px solid #80c6ff;\n" +
        "    cursor: pointer;\n" +
        "    position: relative;\n" +
        "}\n" +
        "\n" +
        "#select-sign {\n" +
        "    position: absolute;\n" +
        "    right: 14px;\n" +
        "    top: 5px;\n" +
        "    transition: all 0.2s ease;\n" +
        "    user-select: none;\n" +
        "    transform: rotate(0deg);\n" +
        "}\n" +
        "\n" +
        "#select-box {\n" +
        "    max-height: 300px;\n" +
        "    width: 100px;\n" +
        "    overflow-y: auto;\n" +
        "    margin-top: 10px;\n" +
        "    border: 1px solid #80c6ff;\n" +
        "    border-radius: 15px;\n" +
        "    transition: max-height 0.2s ease;\n" +
        "}"
    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        //
        this.select_parent.setAttribute("class","select-parent");
        this.select_parent.setAttribute("id","select-parent");
        this.select_sign.setAttribute("class","select-sign");
        this.select_sign.setAttribute("id","select-sign");
        this.select_box.setAttribute("class","select-box");
        this.select_box.setAttribute("id","select-box");
        //
        this.select_sign.innerHTML = ">";
        this._style.textContent = this.style_text;
        this.select_box.style.width = this.getAttribute("width");
        this.select_parent.style.width = this.getAttribute("width");
        //
        const styles = window.getComputedStyle(this.select_sign);
        this.select_parent.addEventListener("click", () => {
            if (styles.getPropertyValue("transform") === "matrix(1, 0, 0, 1, 0, 0)") {
                this.select_box.style.display = "none";
                this.select_box.style.maxHeight = "0";
                this.select_sign.style.transform = "rotate(90deg)";
            } else {
                this.select_box.style.display = "inline-block";
                this.select_box.style.maxHeight = "300px";
                this.select_sign.style.transform = "rotate(0deg)";
            }
        })
        //
        this.select_parent.appendChild(this.select_sign);
        this.select_box.appendChild(this.item_slot);
        shadow.appendChild(this.select_parent);
        shadow.appendChild(this.select_box);
        shadow.appendChild(this._style);
    }
    static get observedAttributes() {
        return ["width"];
    }
    AttributeChangedCallback(name, oldValue, newValue) {
        if (name === "width") {
            this.select_parent.style.width = newValue;
            this.select_box.style.width = newValue;
        }
    }
 }

 customElements.define("ls-select-normal", LsSelectNormal);