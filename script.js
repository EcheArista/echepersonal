'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const commands = {
help: 'Comandos: whoami · educacion · negocio · redes · clear',
whoami: 'Eche Arista. Curioso, analítico, autodidacta y apasionado por la tecnología.',
educacion: 'Hacker de mi propia vida.',
negocio: 'Hago 10k mensuales.',
redes: '@echearista en todos lados.'
};
document.getElementById('terminal-form').addEventListener('submit', function(event) {
event.preventDefault();
const input = document.getElementById('command');
const command = input.value.trim().toLowerCase();
const output = document.getElementById('terminal-output');
if (!command) return;
if (command === 'clear') { output.replaceChildren(); }
else {
const line = document.createElement('p');
line.className = 'output';
line.textContent = '> ' + command + '\n' + (commands[command] || 'Comando no disponible. Escribe help para explorar el perfil.');
output.replaceChildren(line);
}
input.value = '';
});
document.getElementById('copy').addEventListener('click', async function() {
const status = document.getElementById('copy-status');
try { await navigator.clipboard.writeText('echearista'); status.textContent = 'Usuario copiado: echearista'; }
catch { status.textContent = 'Copia este usuario: echearista'; }
});