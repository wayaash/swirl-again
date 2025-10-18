function toastMessage() {
  const msg = document.createElement("div");
  msg.className = "toast";
  const facts = [
    "🍦 Ice cream cones were invented in 1904!",
    "🍨 Ancient China used snow mixed with milk and rice to make the first ice cream!",
    "🍧 The world’s largest ice cream sundae weighed over 24 tons!",
    "🍦 Vanilla is still the #1 flavour worldwide!",
    "🍨 July is National Ice Cream Month!"
  ];
  msg.innerText = facts[Math.floor(Math.random() * facts.length)];
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}

window.onload = () => {
  const scoops = document.querySelector('.scoops');
  for (let i = 0; i < 15; i++) {
    const s = document.createElement('div');
    const size = Math.random() * 30 + 10 + 'px';
    s.style.width = s.style.height = size;
    s.style.left = Math.random() * window.innerWidth + 'px';
    s.style.background = `hsl(${Math.random()*360}, 70%, 80%)`;
    s.style.animationDuration = Math.random() * 5 + 5 + 's';
    scoops.appendChild(s);
  }
}
