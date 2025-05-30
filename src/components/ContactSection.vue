<template>
  <div class="bg-gray-900 py-16 px-4">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-poppins">Vamos Trabalhar Juntos</h1>
      <p class="text-center text-gray-400 mb-12 font-poppins">Estou sempre aberto a novos projetos e desafios interessantes.</p>
      
      <form class="space-y-6 bg-gray-800 p-8 rounded-xl border border-gray-700">
        <div class="relative">
          <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
          <input type="text" id="name" name="name" 
            class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Digite seu nome">
        </div>
        
        <div class="relative">
          <label for="email" class="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
          <input type="email" id="email" name="email" 
            class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="seu@email.com">
        </div>
        
        <div class="relative">
          <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Assunto</label>
          <input type="text" id="subject" name="subject" 
            class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Qual o assunto?">
        </div>
        
        <div class="relative">
          <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
          <textarea id="message" name="message" rows="6" 
            class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Descreva seu projeto ou ideia..."></textarea>
        </div>
        
        <div class="relative">
          <button type="submit" 
            class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800">
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
</style> 