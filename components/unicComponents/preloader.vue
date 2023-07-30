<template>
  <!-- Aquí puedes diseñar el contenido del preloader -->
  <div class="preloader">
    <div class="spinner"></div>
    <!-- Puedes agregar texto o una animación aquí -->
  </div>
</template>

<style>
/* Estilos para el preloader (esto es solo un ejemplo, personalízalo según tus necesidades) */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #00bfffcf;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
