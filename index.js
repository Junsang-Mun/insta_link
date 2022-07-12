window.onload = () => {
    let gh = document.getElementById("link_gh");
    gh.onclick = openGh;
};

function openGh() {
    window.open("https://github.com", "_blank").focus();
}
