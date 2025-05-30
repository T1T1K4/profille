<template>
    <div class="bg-gray-900 py-16 px-4">
        <div class="max-w-3xl mx-auto">
            <div class="space-y-12">
                <!-- Cabeçalho -->
                <div class="text-center space-y-4">
                    <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Sobre Mim</h1>
                    <p class="text-gray-400 text-lg">Desenvolvedor em formação.</p>
                </div>

                <!-- Bio/Descrição -->
                <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <span class="text-2xl">📝</span>
                        </div>
                        <h2 class="text-2xl font-semibold text-white">Quem Sou Eu</h2>
                    </div>
                    <div class="space-y-4 ml-16">
                        <p class="text-gray-300 leading-relaxed">
                            Sou um estudante de Análise e Desenvolvimento de Sistemas pela UNIMAR-SP, com previsão de conclusão em 2025. Tenho experiência profissional em atendimento ao público, recepção, serviços administrativos e operação de equipamentos industriais, demonstrando versatilidade e comprometimento em diferentes áreas de trabalho.
                        </p>
                        <p class="text-gray-300 leading-relaxed">
                            Atualmente, atuo como Operador de Motobomba na Usina Cocal em Paraguaçu Paulista. Antes disso, trabalhei como recepcionista na Santa Casa de Misericórdia e como escrivão na Funerária Municipal, onde desenvolvi habilidades importantes em organização de documentos, atendimento e suporte a sistemas públicos.
                        </p>

                        <p class="text-gray-300 leading-relaxed">
                            Tenho interesse crescente por tecnologia e desenvolvimento web, com projetos acadêmicos voltados à criação de sistemas com PHP, MySQL, HTML, CSS, JavaScript e Python. Também possuo conhecimento em montagem e manutenção de computadores, além de estar constantemente me aprimorando em linguagens de programação e desenvolvimento de sistemas práticos, como sistemas de controle financeiro e catálogos interativos.
                        </p>
                    </div>
                </div>

                <!-- Formação Acadêmica -->
                <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <span class="text-2xl">🎓</span>
                        </div>
                        <h2 class="text-2xl font-semibold text-white">Formação Acadêmica</h2>
                    </div>
                    <div class="space-y-4 ml-16">
                        <div class="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-4 before:w-2 before:h-2 before:bg-purple-400 before:rounded-full">
                            <p class="text-purple-400 font-medium">2023–Atual</p>
                            <p class="text-white">Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
                            <p class="text-gray-400">UNIMAR-SP</p>
                        </div>
                        <div class="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-4 before:w-2 before:h-2 before:bg-purple-400 before:rounded-full">
                            <p class="text-purple-400 font-medium">2023</p>
                            <p class="text-white">Ensino Médio Completo</p>
                            <p class="text-gray-400">Escola Isidoro Baptista</p>
                        </div>
                    </div>
                </div>

                <!-- Experiência Profissional -->
                <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <span class="text-2xl">💼</span>
                        </div>
                        <h2 class="text-2xl font-semibold text-white">Experiência Profissional</h2>
                    </div>
                    <div class="space-y-6 ml-16">
                        <div class="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-4 before:w-2 before:h-2 before:bg-purple-400 before:rounded-full">
                            <p class="text-purple-400 font-medium">Mai 2025 – Atual</p>
                            <p class="text-white font-medium">Operador de Motobomba</p>
                            <p class="text-gray-400">Usina Cocal, Paraguaçu Paulista</p>
                        </div>
                        <div class="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-4 before:w-2 before:h-2 before:bg-purple-400 before:rounded-full">
                            <p class="text-purple-400 font-medium">Mar 2024 – Dez 2024</p>
                            <p class="text-white font-medium">Recepcionista</p>
                            <p class="text-gray-400">Santa Casa de Misericórdia de Paraguaçu Paulista</p>
                        </div>
                        <div class="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-4 before:w-2 before:h-2 before:bg-purple-400 before:rounded-full">
                            <p class="text-purple-400 font-medium">Jan 2023 – Dez 2023</p>
                            <p class="text-white font-medium">Atendente / Escrivão</p>
                            <p class="text-gray-400">Funerária Municipal de Paraguaçu Paulista</p>
                        </div>
                    </div>
                </div>

                <!-- Skills/Tecnologias (opcional) -->
                <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <span class="text-2xl">⚡</span>
                        </div>
                        <h2 class="text-2xl font-semibold text-white">Tecnologias</h2>
                    </div>
                    <div class="flex flex-wrap gap-3 ml-16">
                        <span class="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">HTML</span>
                        <span class="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">CSS</span>
                        <span class="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">JavaScript</span>
                        <span class="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">Vue.js</span>
                        <span class="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">Tailwind CSS</span>
                        <span class="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">Python</span>
                        <span class="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">C#</span>
                        <span class="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">SQL</span>
                        <span class="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">PHP</span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
</style> 