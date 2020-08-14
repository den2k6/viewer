"use strict";

{
  const bdy = document.getElementById("bdy");
  const inputfile = document.getElementById("inputfile");
  const btn = document.getElementById("btn");
  const container = document.getElementById("container");

  inputfile.addEventListener(
    "change",
    function (e) {
      const file = e.target.files;
      console.log(file);
      while (container.firstChild) {
        container.firstChild.remove();
      }

      for (let i = 0; i < e.target.files.length; i++) {
        const reader = new FileReader();
        const ps = document.createElement("p");
        const imgs = document.createElement("img");
        imgs.classList.add("imgc");
        reader.readAsDataURL(file[i]);
        reader.onload = function () {
          ps.textContent = file[i].name;
          imgs.src = reader.result;
          container.appendChild(ps);
          container.appendChild(imgs);
        };
      }
    },
    false
  );

  const colors = [
    "#ffe",
    "#fef",
    "#eff",
    "#fee",
    "#efe",
    "#eef",
    "#eee",
    "#fff",
    "#888",
  ];

  btn.addEventListener(
    "click",
    () => {
      // alert("clicked");
      bdy.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    },
    false
  );
}
