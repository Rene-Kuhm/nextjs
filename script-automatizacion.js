const simpleGit = require('simple-git');
const moment = require('moment');
const cron = require('node-cron');
const fs = require('fs');

// Configuración
const REPO_PATH = "/Users/tdp/Desktop/nextjs"; // Cambia esto a la ruta de tu repositorio
const COMMIT_PREFIX = "🔄 Actualización: ";
const BRANCH = "main"; // Cambia 'main' por la rama correspondiente

if (!fs.existsSync(REPO_PATH)) {
    console.error(`El directorio ${REPO_PATH} no existe. Por favor, verifica la ruta.`);
    process.exit(1);
}

const git = simpleGit(REPO_PATH);

// Inicializar el repositorio si no está inicializado
async function initializeRepo() {
    if (!await git.checkIsRepo()) {
        await git.init();
        console.log("Repositorio inicializado.");
    }
}

// Detectar cambios en el repositorio
async function detectChanges() {
    const status = await git.status();
    return status.files;
}

// Generar un mensaje de commit detallado
function generateCommitMessage(files) {
    let commitMessage = `${COMMIT_PREFIX}${moment().format('YYYY-MM-DD HH:mm:ss')}\n\n`;
    files.forEach(file => {
        if (file.index === 'M') {
            commitMessage += `✏️ Modificado: ${file.path}\n`;
        } else if (file.index === 'A') {
            commitMessage += `🆕 Añadido: ${file.path}\n`;
        } else if (file.index === 'D') {
            commitMessage += `❌ Eliminado: ${file.path}\n`;
        }
    });
    return commitMessage;
}

// Hacer commit y push
async function commitAndPush(commitMessage) {
    try {
        await git.add('.');
        await git.commit(commitMessage);
        await git.push('origin', BRANCH);
        console.log("Cambios subidos a GitHub.");
    } catch (error) {
        console.error("Error durante el push a GitHub:", error.message);
    }
}

// Automatizar el proceso
async function automateCommit() {
    try {
        await initializeRepo();
        const changes = await detectChanges();
        if (changes.length > 0) {
            const commitMessage = generateCommitMessage(changes);
            await commitAndPush(commitMessage);
        } else {
            console.log("No hay cambios para commitear.");
        }
    } catch (error) {
        console.error("Error en el proceso de automatización:", error.message);
    }
}

// Configurar cron job para ejecutar cada hora
cron.schedule('0 * * * *', () => {
    console.log("Ejecutando tarea programada...");
    automateCommit().catch(err => console.error(err));
});

// Ejecutar la automatización inicialmente
automateCommit().catch(err => console.error(err));
