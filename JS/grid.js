
function grid(arr) {
    var grid_html = "<div class=\"col-md-4 \">\n" +
        "                 <ul class=\"item\">\n";
    for (var i = 0; i < arr.length; i++) {
        grid_html += " <li> <a href=\"#\">" + arr[i].id + " </a> </li> \n";
        grid_html += " <li> <a href=\"#\">" + arr[i].name + " </a> </li> \n";
        grid_html += "  <img  src=\""+arr[i].image+"\"/> \n";
        grid_html += " <li> <a href=\"#\">" + arr[i].price + " </a> </li> \n" +
            "        </ul>\n" +
            "    </div>";

    }
    return grid_html;
}


function Menu(){
    var x= new XMLHttpRequest();
    x.onreadystatechange =function (){
        if(this.readyState==4 && this.status==200) {
            var rs = this.responseText;
            rs = JSON.parse(rs);
            var menu = rs.data;
            console.log(menu);
            document.getElementById("grid").innerHTML = grid(menu);
        }
    }
    x.open("GET","https://foodgroup.herokuapp.com/api/today-special");
    x.send();
}
Menu();