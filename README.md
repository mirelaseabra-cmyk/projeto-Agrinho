# AgroForte 🌾✨

O **AgroForte** é uma simulação interativa baseada em web que desafia o usuário a encontrar o equilíbrio perfeito entre a **Produção Agrícola** e a **Preservação Ambiental**. Com uma interface minimalista inspirada em telas de ficção científica (Sci-Fi/Hacker), o projeto utiliza interações em tempo real e renderização de partículas em um elemento HTML5 Canvas.

---

## 🚀 Funcionalidades

* **Painel Interativo Dinâmico:** Um controle deslizante (*slider*) que altera o peso entre produção tecnológica e conservação da natureza.
* **Sistema de Partículas em Canvas:** Um motor visual centralizado que gera partículas estilizadas que reagem e mudam de comportamento dependendo das escolhas do usuário.
* **HUD de Métricas (Estilo Videogame):** Barras indicadoras de "Alimento Gerado" e "Saúde do Planeta" atualizadas instantaneamente.
* **Condição de Vitória (Gatilho de Equilíbrio):** O sistema detecta uma margem sustentável (entre 45% e 55%) e ativa um estado visual de "Equilíbrio Perfeito Atingido! 🌱".
* **Design Responsivo:** Redimensionamento automático da tela e do canvas (`window.resize`).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando desenvolvimento web nativo (Vanilla):

* **HTML5:** Estrutura semântica dos componentes da interface, HUD e elemento `<canvas>`.
* **CSS3:** Estilização com estética escura (*cyberpunk/sci-fi*), variáveis CSS (`:root`), filtros de desfoque (`backdrop-filter`) e transições fluidas.
* **JavaScript (ES6+):** Lógica de animação utilizando `requestAnimationFrame`, programação baseada em classes para o sistema de partículas e manipulação do DOM.

---

## 📂 Estrutura de Arquivos

Para rodar o projeto, organize os arquivos da seguinte forma:

```bash
├── index.html       # Estrutura do painel e container do simulador
├── style.css        # Estilização visual, cores e efeitos neon/blur
└── script.js        # Mecânica do Canvas, física das partículas e lógica do HUD
