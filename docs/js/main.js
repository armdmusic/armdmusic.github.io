main();

function main() {
  loadStuff();
}

function loadStuff() {
  $("nav").load("/docs/html/nav.html")
}

function toggleNav() {
  if (jQuery("#sidenav").hasClass("close")) {
    jQuery("#sidenav").attr("class", "open");
    jQuery("#menu-button").attr("class", "close");
  } else {
    jQuery("#sidenav").attr("class", "close");
    jQuery("#menu-button").attr("class", "open");
  }
}
