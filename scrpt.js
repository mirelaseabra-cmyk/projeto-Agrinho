const canvas = document.getElementById('ecosystemCanvas');
const ctx = canvas.getContext('2d');
const slider = document.getElementById('balanceSlider');
const foodFill = document.querySelector('#foodMetric .fill');
const natureFill = document.querySelector('#natureMetric .fill');
const successMsg = document.getElementById('successMsg');

// Redimensionar Canvas
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Sistema de Partículas
class Particle {
  constructor(type) {
    this.type = type;
    this.reset();
  }
  
  reset() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2 + 100;
    this.speedX = (Math.random() - 0.5) * 4;
    this.speedY = -Math.random() * 5 - 2;
    this.size = Math.random() * 4 + 1;
    this.life = 100;
  }

  update(balance) {
    // Altera o comportamento com base no slider
    if (this.type === 'tech') {
      this.speedX += (100 - balance) * 0.005 * (Math.random() - 0.5);
    } else {
      this.speedX += balance * 0.005 * (Math.random() - 0.5);
    }
    
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= 1;
    if (this.life <= 0) this.reset();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.type === 'tech' ? 'rgba(255, 159, 67, 0.6)' : 'rgba(29, 209, 161, 0.6)';
    ctx.fill();
  }
}

// Inicializar partículas
const particles = [];
for(let i=0; i<60; i++) particles.push(new Particle('tech'));
for(let i=0; i<60; i++) particles.push(new Particle('nature'));

// Loop de Animação
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const balance = parseInt(slider.value);
  
  // Atualizar HUD com lógica inversa
  foodFill.style.width = `${balance}%`;
  natureFill.style.width = `${100 - balance}%`;
  
  // Checar Equilíbrio Perfeito (Margem entre 45 e 55)
  if (balance >= 45 && balance <= 55) {
    successMsg.classList.add('show');
    slider.style.accentColor = '#fff';
  } else {
    successMsg.classList.remove('show');
    slider.style.accentColor = 'var(--nature-color)';
  }

  // Renderizar Partículas limitadas pelo balanço
  particles.forEach((p, index) => {
    if (p.type === 'tech' && index > balance * 1.2) return;
    if (p.type === 'nature' && index > (100 - balance) * 1.2) return;
    
    p.update(balance);
    p.draw();
  });

  // Desenhar o "NÚCLEO" (Árvore/Fábrica central)
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2 + 100, 30, 0, Math.PI*2);
  ctx.fillStyle = `rgb(${255 - balance * 2}, ${balance * 2}, 100)`;
  ctx.shadowBlur = 30;
  ctx.shadowColor = ctx.fillStyle;
  ctx.fill();
  ctx.shadowBlur = 0; // reset

  requestAnimationFrame(animate);
}

slider.addEventListener('input', animate);
animate();
