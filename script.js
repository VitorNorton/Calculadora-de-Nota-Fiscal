
document.getElementById('calcularBtn').addEventListener('click', function () {

    const valorVenda = parseFloat(document.getElementById('valorVenda').value) || 0;

    const itensVenda = document.getElementById('itensVenda').value ;
    const data = document.getElementById('data').value 
    
    const irpf = parseFloat(document.getElementById('irpf').value) || 0;
    const pis = parseFloat(document.getElementById('pis').value) || 0; 
    const cofins = parseFloat(document.getElementById('cofins').value) || 0;
    const inss = parseFloat(document.getElementById('inss').value) || 0;
    const issqn = parseFloat(document.getElementById('issqn').value) || 0;

    if (!valorVenda || !itensVenda || !irpf || !pis || !cofins || !inss || !issqn) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    const totalImpostos =
    (valorVenda * irpf) / 100 +
    (valorVenda * pis) / 100 +
    (valorVenda * cofins) / 100 +
    (valorVenda * inss) / 100 +
    (valorVenda * issqn) / 100;

    const valorLiquido = valorVenda - totalImpostos;

    const nfsOutput = document.getElementById('nfsOutput');
    

    nfsOutput.innerHTML =
     ` 
        <h3>Nota Fiscal de Serviço (NFS-e)</h3>
        <p><strong>Data De Emissão:</strong> ${data}</p>
        <p><strong>Itens Vendidos:</strong> ${itensVenda}</p>
        <p><strong>Valor Bruto da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
        
    `;
      

    nfsOutput.style.display = 'block';



document.getElementById('imprimirBtn').style.display = 'inline-block';
});

document.getElementById('imprimirBtn').addEventListener('click', function () {
    
  const nfsOutput = document.getElementById('nfsOutput').innerHTML;
  
  const printWindow = window.open('', '', 'height=600,width=800');
  

    printWindow.document.write('<html><head><title>Impressão da NFS-e</title>');
    printWindow.document.write('<style>body { font-family: Arial, sans-serif; #nfsOutput { margin-top: 20px; padding: 10px;background: #f9f9f9;border: 1px solid #ddd;border-radius: 8px; }</style></head><body><div id="nfsOutput">');
    printWindow.document.write(nfsOutput ); 
    printWindow.document.write('</div></body></html>');
    printWindow.print();    
});
