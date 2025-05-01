const select_box = document.getElementById("select-box");
const select_parent = document.getElementById("select-parent");
const select_sign = document.getElementById("select-sign");
const styles = window.getComputedStyle(select_sign);
select_parent.addEventListener("click",() => {
    if (styles.getPropertyValue("transform") === "matrix(1, 0, 0, 1, 0, 0)") {
        select_box.style.display = "none";
        select_box.style.maxHeight = "0";
        select_sign.style.transform = "rotate(90deg)";
    } else {
        select_box.style.display = "inline-block";
        select_box.style.maxHeight = "300px";
        select_sign.style.transform = "rotate(0deg)";
    }
})