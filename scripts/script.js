
function load_and_add(html_file, id_name) {
  fetch(html_file)
      .then(res => res.text())
      .then(text => {
        let oldelem = document.querySelector(id_name);
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
      })
}

load_and_add('header.html', "#header");
load_and_add('footer.html', "#footer");
load_and_add('nav.html', "#nav");

