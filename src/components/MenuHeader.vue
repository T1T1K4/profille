<template>
    <div class="w-full bg-gray-900 shadow-lg">
        <div class="max-w-5xl mx-auto px-4 py-6">
            <div class="flex justify-start">
                <ul class="flex gap-8 font-poppins text-lg"
                    style="font-family: 'Poppins', sans-serif;">
                    <li><router-link to="/" class="text-gray-300 hover:text-purple-400 transition-colors duration-300">Início</router-link></li>
                    <li><router-link to="/sobre" class="text-gray-300 hover:text-purple-400 transition-colors duration-300">Sobre</router-link></li>
                    <li><router-link to="/trabalhos" class="text-gray-300 hover:text-purple-400 transition-colors duration-300">Portfólio</router-link></li>
                    <li><router-link to="/contato" class="text-gray-300 hover:text-purple-400 transition-colors duration-300">Contato</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
</style> 