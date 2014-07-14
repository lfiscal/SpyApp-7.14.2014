var SpyApp = {};
SpyApp.spys = [];

SpyApp.spy = function (name, number, drink, weapon) {
    this.name = name;
    this.number = number;
    this.drink = drink;
    this.weapon = weapon;
}

SpyApp.drawTable = function () {
    document.getElementById('spyList').innerHTML = "";
    var holder = "<table id='spytable' class ='table table-hover'>";
    for (var i in SpyApp.spys) {
        if (SpyApp.spys[i].isAlive) {
        holder += "<tr>";

        }
        else {
            holder += "<tr id='dead'>"
        }
        holder += "<td>" + "<button class='fa fa-crosshairs' onclick='SpyApp.killSpy("+ i + ");'>" + "</td>";
        holder += "<td>" + SpyApp.spys[i].name + "</td>";
        holder += "<td>" + SpyApp.spys[i].number+ "</td>";
        holder += "<td>" + SpyApp.spys[i].drink+ "</td>";
        holder += "<td>" + SpyApp.spys[i].weapon + "</td>";
        holder += "<td>" + "<button class='fa fa-search' onclick='SpyApp.noCover("+ i +")'>" + "</button>" + "</td>"
        holder += "</tr>";
    }
    holder += "</table>";
    document.getElementById("spyList").innerHTML = holder;
}

SpyApp.noCover = function (index) {
    SpyApp.spys[index].isUndercover = false;
    SpyApp.drawTable();
    
}

SpyApp.killSpy = function (index) {
    SpyApp.spys[index].isAlive = false;
    SpyApp.drawTable();
}
SpyApp.spy.prototype.isUndercover = true;
SpyApp.spy.prototype.isAlive = true;

var addSpy = function () {
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var drink = document.getElementById('drink').value;
    var weapon = document.getElementById('weapon').value;

    SpyApp.spys.push(new SpyApp.spy(name, number, drink, weapon));
    document.getElementById('name').value = "";
    document.getElementById('number').value = "";
    document.getElementById('drink').value = "";
    document.getElementById('weapon').value = "";
    SpyApp.drawTable();
}