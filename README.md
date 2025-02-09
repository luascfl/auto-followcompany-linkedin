# Bot de Seguir Empresas no LinkedIn
Este projeto é um script simples de automação de navegador projetado para seguir empresas no LinkedIn. Ele usa JavaScript para automatizar o processo de rolar pelas páginas, encontrar botões "Seguir" e clicar neles.

## Recursos Principais
* Rola automaticamente até o final das páginas de empresas no LinkedIn.
* Identifica e clica nos botões "Seguir" das empresas.
* Navega automaticamente para as páginas subsequentes usando o botão "Próximo" (quando disponível).
* Fornece registros no console para feedback sobre as ações realizadas.

## Tecnologias Utilizadas e Pré-requisitos
* JavaScript

## Instalação
1. **Nenhuma instalação é necessária** Este script foi projetado para ser executado diretamente no console do navegador em uma página do LinkedIn.
2. **Copie o script:** Copie o conteúdo de `Seguir empresas e avançar LinkedIn.js` encontrado neste repositório.
3. **Abra o console do desenvolvedor do navegador:** Na maioria dos navegadores, isso pode ser feito pressionando F12.
4. **Cole e execute:** Cole o código JavaScript copiado no console e pressione Enter.

## Uso
1. **Faça uma pesquisa de empresas do LinkedIn**. Certifique-se de estar logado na sua conta do LinkedIn.
2. **Abra o console do desenvolvedor do navegador** (F12).
3. **Cole e execute** o script. O script começará a rolar pelas páginas, clicando nos botões "Seguir" onde estiverem disponíveis. Ele registrará suas ações no console.

**Nota Importante:** A estrutura do LinkedIn pode mudar ao longo do tempo. Este script foi projetado para funcionar com a estrutura atual, mas pode exigir ajustes se a interface do LinkedIn mudar. O uso excessivo deste script pode levar à suspensão temporária ou permanente da sua conta. Use-o de forma responsável e moderada.

## Tratamento de Erros e Solução de Problemas
O script inclui tratamento básico de erros. No entanto, se a estrutura do site mudar, os seletores usados pelo script podem se tornar inválidos. Você pode ver mensagens de erro no console do navegador relacionadas a `document.querySelectorAll` ou `document.querySelector` se os elementos que o script está tentando acessar não existirem mais.

Em caso de erros:
* Verifique o console do navegador para mensagens de erro específicas.
* Certifique-se de que você está logado na sua conta do LinkedIn e que a página que você está visualizando exibe empresas que você pode seguir.
* Atualize os seletores no script para corresponder à estrutura atual da página do LinkedIn, se necessário.

## Estrutura do Projeto
O projeto consiste em apenas dois arquivos:
* `LICENSE`: Contém as informações da licença MIT.
* `Seguir empresas e avançar LinkedIn.js`: Contém o código JavaScript para o bot de seguir empresas no LinkedIn.

## Contribuição
Contribuições para este projeto são bem-vindas. Por favor, abra uma issue ou envie um pull request com suas alterações.

## Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo `LICENSE` para obter detalhes.

## Isenção de Responsabilidade
Este script é fornecido "no estado em que se encontra", sem garantia de qualquer tipo. Use por sua conta e risco. O autor não se responsabiliza por quaisquer consequências decorrentes do uso deste script, incluindo, entre outras, a suspensão ou encerramento da conta pelo LinkedIn. Sempre respeite os Termos de Serviço do LinkedIn.
