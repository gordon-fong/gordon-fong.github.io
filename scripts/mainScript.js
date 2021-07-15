document.addEventListener('DOMContentLoaded', start);

function start () {
    getActiveTheme();
}

function getActiveTheme () {
    var storedTheme = localStorage.getItem ("activeTheme");
    if (storedTheme === null) {
        var i = Math.floor(Math.random() * 6);
        switch(i){
            case 0:
                localStorage.setItem ("activeTheme", "theme-electric-blueberry");
                break;
            case 1:
                localStorage.setItem ("activeTheme", "theme-fresh-mint");
                break;
            case 2:
                localStorage.setItem ("activeTheme", "theme-raspberry-jam");
                break;
            case 3:
                localStorage.setItem ("activeTheme", "theme-wildberry-yoghurt");
                break;
            case 4:
                localStorage.setItem ("activeTheme", "theme-marmalade-tang");
                break;
            case 5:
                localStorage.setItem ("activeTheme", "theme-honey-nut");
                break;
        }
        setTheme (localStorage.getItem("activeTheme"));
    } else {
        setTheme (storedTheme);
    }
}

function setTheme (themeName) {
    var body = document.getElementById("body");
    body.className = themeName;
    localStorage.setItem ("activeTheme", themeName);

    var themeButtons = document.getElementsByClassName("theme-buttons");
    if (themeButtons.length = 1){
        var themeButtonArr = Array.from(themeButtons[0].children);

        themeButtonArr.forEach(item => item.classList.remove("active"));
        var activeTheme = localStorage.getItem("activeTheme");
        switch(activeTheme){
            case ("theme-electric-blueberry"):
                themeButtonArr[0].classList.add("active");
                break;
            case ("theme-fresh-mint"):
                themeButtonArr[1].classList.add("active");
                break;
            case ("theme-raspberry-jam"):
                themeButtonArr[2].classList.add("active");
                break;
            case ("theme-wildberry-yoghurt"):
                themeButtonArr[3].classList.add("active");
                break;
            case ("theme-marmalade-tang"):
                themeButtonArr[4].classList.add("active");
                break;
            case ("theme-honey-nut"):
                themeButtonArr[5].classList.add("active");
                break;
        }
    }
    

}
function previewTheme(themeName) {
    var body = document.getElementById("body");
    body.className = themeName;
    // console.log("preview themeName: " + themeName);
}
function unpreviewTheme(themeName) {
    var body = document.getElementById("body");
    body.className = themeName;
    // console.log("unpreview themeName: " + themeName);
}