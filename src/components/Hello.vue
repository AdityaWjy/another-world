<template>
  <div class="container">
    <div class="main">
      <main class="fade-in-image">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.opiTUI8mn175r-vradRtOwHaJQ&pid=Api&P=0"
          class="logo"
          alt="Logo"
          width="300"
          height="300"
        />
        <br />
      </main>
    </div>
    <div class="typewriter" style="color:white">
      <typewriter
        :replace="replace"
        :type-interval="100"
        :replace-interval="1000"
      >
        <div class="welcome">Welcome to Our Religion.</div>
      </typewriter>
    </div>

    <!-- Animasi text Html -->
    <div class="container">
      <h1 style="color:white=" class="satan">
        ⛧
      </h1>
    </div>

    <!-- Button Html -->
    <div class="middle">
      <router-link to="/HomeView" custom v-slot="{ navigate }">
        <button
          style="cursor:pointer"
          class="button-49"
          role="button"
          @click="navigate"
        >
          The Truth.
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Typewriter from 'typewriter-vue'
export default {
  components: {
    Typewriter
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #000000;
}

main {
  text-align: center;
  position: relative;
  top: 30px;
}

/* animasi image */

.fade-in-image {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.welcome {
  font-family: 'lucida Typewriter';
  color: white;
  font-size: 20px;
  padding-top: 70px;
  text-align: center;
  margin-left: 10px;
}

/* animation text */
h1 {
  font-size: 80px;
  color: white;
  cursor: pointer;
  opacity: 0;
  animation: fadeInOutAnimation 1.5s infinite;
  animation-direction: alternate-reverse;
  animation-timing-function: ease-in-out;
  text-align: center;
}

@keyframes fadeInOutAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.satan {
  cursor: pointer;
  opacity: 0;
  animation: fadeInOutAnimation 1.5s infinite;
  animation-direction: alternate-reverse;
  animation-timing-function: ease-in-out;
}

/* ini css button */
.middle {
  position: absolute;
  top: 81%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.button-49,
.button-49:after {
  width: 150px;
  height: 76px;
  line-height: 78px;
  font-size: 20px;
  font-family: 'Bebas Neue', sans-serif;
  background: linear-gradient(45deg, transparent 5%, black 5%);
  border: 0;
  color: white;
  letter-spacing: 3px;
  outline: transparent;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-49:after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);

  content: 'SATAN';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 3%,
    #00e6f6 3%,
    #00e6f6 5%,
    #ff013c 5%
  );
  text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
  clip-path: var(--slice-0);
}

.button-49:hover:after {
  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}

@media (min-width: 768px) {
  .button-49,
  .button-49:after {
    width: 250px;
    height: 86px;
    line-height: 88px;
  }
}
</style>
