window.onload = () => {
    let gh = document.getElementById("link_gh");
    let blog = document.getElementById("link_blog");
    gh.onclick = openGh;
    blog.onclick = openBlog;
};

function openGh() {
    window.open("https://github.com/junsang-mun", "_blank").focus();
}

function openBlog() {
    window.open("https://barobaro.icu", "_blank").focus();
}
