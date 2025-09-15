/**
 * Cria e retorna o HTML de uma tabela a partir de um array de objetos.
 * @param {Array<Object>} dados - O array de objetos para exibir na tabela.
 * @param {Array<string>} colunas - Um array com os nomes das chaves que devem virar colunas.
 * @returns {string} - O HTML completo da tabela.
 */
function criarTabela(dados, colunas) {
    // Se não houver dados, retorna uma mensagem simples
    if (!dados || dados.length === 0) {
        return "<p>Nenhum dado para exibir.</p>";
    }

    // Cria o cabeçalho da tabela dinamicamente a partir do array 'colunas'
    const cabecalho = `
        <thead>
            <tr>
                ${colunas.map(coluna => `<th>${coluna}</th>`).join("")}
            </tr>
        </thead>
    `;

    // Cria as linhas do corpo da tabela
    const corpo = `
        <tbody>
            ${dados.map(item => `
                <tr>
                    ${colunas.map(coluna => `<td>${item[coluna] || ''}</td>`).join("")}
                </tr>
            `).join("")}
        </tbody>
    `;

    // Monta e retorna a tabela completa
    return `
        <table>
            ${cabecalho}
            ${corpo}
        </table>
    `;
}

// Exporta a função para que ela possa ser importada em outros arquivos
export default criarTabela;

// RECEITA 08 COMPLETA