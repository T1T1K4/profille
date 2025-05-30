<template>
  <div class="bg-gray-900 text-white">
    <div class="max-w-5xl mx-auto px-4 py-20">
      <div class="flex flex-col md:flex-row items-center md:items-start justify-between">
        <div class="md:max-w-xl">
          <h1 class="font-poppins font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text" style="font-size: 46px;">
            Desenvolvedor Full Stack
          </h1>
          <h2 class="font-poppins font-bold mb-8 text-gray-300" style="font-size: 42px;">
            Transformando ideias em código
          </h2>
          <p class="font-poppins text-gray-400 mb-8 leading-relaxed" style="font-size: 18px;">
            Especializado em criar experiências digitais únicas e inovadoras. Com domínio em tecnologias modernas e foco em performance, desenvolvo soluções que fazem a diferença.
          </p>
          <div class="flex gap-4">
            <router-link to="/contato" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Vamos Conversar
            </router-link>
            <router-link to="/trabalhos" class="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              Ver Projetos
            </router-link>
          </div>
        </div>
        <div class="mt-12 md:mt-0 relative">
          <div class="w-64 h-64 md:w-80 md:h-80 rounded-full relative overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500 p-1">
            <div class="w-full h-full rounded-full overflow-hidden bg-gray-900 relative z-10">
              <img src="/src/img/CarlosEduardo.jpg" alt="Profile" class="w-full h-full object-cover">
            </div>
          </div>
          <div class="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur opacity-30 -z-10"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
</style> 