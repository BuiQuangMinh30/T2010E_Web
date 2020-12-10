//render cho phan html header session11
function header(){
    return "<div class=\"container\">\n" +
        "        <div class=\"logo\">\n" +
        "            <a>Genesis Framework </a>\n" +
        "        </div>\n" +
        "        <div class=\"top-links\">\n" +
        "            <ul>\n" +
        "                <li><a href=\"#\">Sample</a> </li>\n" +
        "                <li><a href=\"#\">Layouts</a> </li>\n" +
        "                <li><a href=\"#\">Templates</a> </li>\n" +
        "                <li><a href=\"#\">Contact</a> </li>\n" +
        "                <li><a href=\"#\">Contact</a> </li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "    </div>";
}
document.getElementById("header").innerHTML=header();