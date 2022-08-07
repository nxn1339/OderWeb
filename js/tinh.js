	const list = [];
	const monney = [];
	var text = "<ol>";
	for (let i = 0; i < list.length; i++) {
  		text += "<li>" + list[i] + "</li>";
	}
	text += "</ol>";
	document.getElementById("giohang").innerHTML = text;
function item1() {
	list.push("Trà Sữa Đường Đen" + "<br>");
	monney.push(40000);
	var text = "<ol>";
	for (let i = 0; i < list.length; i++) {
  		text += "<li>" + list[i] + "</li>";
	}
	text += "</ol>";
	document.getElementById("giohang").innerHTML = text;
}
function item2() {
	list.push("Sữa Tươi Trâu Châu Đường Đen" + "<br>");
	monney.push(50000);
	var text = "<ol>";
	for (let i = 0; i < list.length; i++) {
  		text += "<li>" + list[i] + "</li>";
	}
	text += "</ol>";
	document.getElementById("giohang").innerHTML = text;
}
function item3() {
	list.push("Trà Sữa Trân Châu FullTopping" + "<br>");
	monney.push(60000);
	var text = "<ol>";
	for (let i = 0; i < list.length; i++) {
  		text += "<li>" + list[i] + "</li>";
	}
	text += "</ol>";
	document.getElementById("giohang").innerHTML = text;
}
function item4() {
	list.push("Coffee Capuchino" + "<br>");
	monney.push(80000);
	var text = "<ol>";
	for (let i = 0; i < list.length; i++) {
  		text += "<li>" + list[i] + "</li>";
	}
	text += "</ol>";
	document.getElementById("giohang").innerHTML = text;
}
function item5() {
	list.push("Coffee Chồn" + "<br>");
	monney.push(100000);
	var text = "<ol>";
	for (let i = 0; i < list.length; i++) {
  		text += "<li>" + list[i] + "</li>";
	}
	text += "</ol>";
	document.getElementById("giohang").innerHTML = text;
}
function item6() {
	list.push("Coffee Sữa" + "<br>");
	monney.push(60000);
	var text = "<ol>";
	for (let i = 0; i < list.length; i++) {
  		text += "<li>" + list[i] + "</li>";
	}
	text += "</ol>";
	document.getElementById("giohang").innerHTML = text;
}
function xoa() {
	list.pop(list[0]);
	monney.pop(list[0]);
	var text = "<ol>";
	for (let i = 0; i < list.length; i++) {
  		text += "<li>" + list[i] + "</li>";
	}
	text += "</ol>";
	document.getElementById("giohang").innerHTML = text;
}

function oder(){
	const tien = monney;
	var tong = 0;
	for (var i = 0; i <monney.length; i++) {
		tong +=tien[i];
	}
	document.getElementById("tong").innerHTML =tong + "Đ";
}
