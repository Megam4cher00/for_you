body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #ffb6c1, #ff69b4, #ff1493, #ff69b4);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  text-align: center;
  color: white;
  overflow-x: hidden;
}

@keyframes gradientBG {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}

.container {
  padding: 50px;
  position: relative;
  z-index: 2;
}

/* Animierter Name */
#juliana {
  font-size: 4em;
  font-weight: bold;
  letter-spacing: 5px;
  display: inline-block;
}

#juliana span {
  display: inline-block;
  animation: glow 2s infinite alternate, bounce 3s infinite ease-in-out;
}

/* Jeder Buchstabe zeitversetzt */
#juliana span:nth-child(1) { animation-delay: 0s; }
#juliana span:nth-child(2) { animation-delay: 0.2s; }
#juliana span:nth-child(3) { animation-delay: 0.4s; }
#juliana span:nth-child(4) { animation-delay: 0.6s; }
#juliana span:nth-child(5) { animation-delay: 0.8s; }
#juliana span:nth-child(6) { animation-delay: 1s; }
#juliana span:nth-child(7) { animation-delay: 1.2s; }

@keyframes glow {
  from { text-shadow: 0 0 10px #ff66cc, 0 0 20px #ff3399, 0 0 30px #ff0066; }
  to   { text-shadow: 0 0 20px #fff, 0 0 40px #ff66cc, 0 0 60px #ff3399; }
}

/* Hüpfen */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.love-message {
  font-size: 1.5em;
  margin: 30px auto;
  max-width: 800px;
  line-height: 1.6;
}

.timer {
  margin: 30px 0;
  font-size: 1.3em;
}

#timeTogether {
  font-size: 2em;
  font-weight: bold;
}

/* Floating hearts */
.hearts::before, .hearts::after {
  content: "❤️";
  position: absolute;
  font-size: 2em;
  animation: float 8s linear infinite;
}

@keyframes float {
  0% {transform: translateY(100vh);}
  100% {transform: translateY(-100vh);}
}

.hearts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}
