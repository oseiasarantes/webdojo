export function dataHojeFormatada() {
    const dataHoje = new Date();
    const dataFormatada = dataHoje.toLocaleDateString('en-GB');

    return dataFormatada;
};