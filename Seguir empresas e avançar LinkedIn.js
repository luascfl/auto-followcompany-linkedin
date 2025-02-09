(async function followCompanies() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    async function scrollToBottom() {
        console.log('Descendo até o final da página...');
        window.scrollTo(0, document.body.scrollHeight);
        await delay(3000); // Aguarda 3 segundos para garantir que todos os elementos sejam carregados
    }

    async function clickFollowButtons() {
        // Seleciona todos os botões com o texto "Seguir"
        const followButtons = Array.from(document.querySelectorAll('button'))
            .filter(button => button.innerText.trim() === 'Seguir');
        
        if (followButtons.length > 0) {
            console.log(`Encontrados ${followButtons.length} botões de seguir.`);
            for (const button of followButtons) {
                button.click();
                console.log('Botão "Seguir" clicado.');
                await delay(1000); // Aguardar 1 segundo entre cliques para evitar problemas
            }
        } else {
            console.log('Nenhum botão "Seguir" encontrado nesta página.');
        }
    }

    async function goToNextPage() {
        // Selecionar o botão "Avançar" de forma genérica usando atributos consistentes
        const nextButton = document.querySelector(
            'button[aria-label="Avançar"].artdeco-pagination__button--next'
        );

        if (nextButton) {
            console.log('Botão "Avançar" encontrado. Clicando...');
            nextButton.click();
            await delay(5000); // Aguarde 5 segundos para a próxima página carregar completamente
            return true; // Indica que avançou para a próxima página
        } else {
            console.log('Botão "Avançar" não foi encontrado. Verifique se há mais páginas.');
            return false; // Indica que não há mais páginas
        }
    }

    async function processPage() {
        await scrollToBottom(); // Desce até o final da página
        await clickFollowButtons(); // Tenta seguir contas
        const hasNextPage = await goToNextPage(); // Sempre tenta avançar
        if (hasNextPage) {
            await processPage(); // Repete o processo na próxima página
        }
    }

    // Inicia o processo
    await processPage();
})();
