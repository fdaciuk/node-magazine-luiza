# Tracking

Primeiro é necessário instanciar o objeto `MagazineLuizaAPI`, passando o seu ID:

```js
const magazineLuiza = new MagazineLuizaAPI('000');
```

Após isso, use o método `tracking()` em `postSale`, passando o CPF e o Número do Pedido em um objeto, para ver as informações dos pedidos feitos para esse CPF:

```js
magazineLuiza.postSale.tracking({
	cpf: '11111111111',
	orderNumber: '12345'
});
```

Esse método retorna uma Promise. O resultado da Promise é um objeto, no formato:

```json
{
    "cpf": "11111111111",
    "deliveryAddress": {
        "cep": "111111111",
        "city": "Cidade",
        "complement": "Complemento",
        "district": "Bairro",
        "number": "123",
        "state": "SP",
        "street": "Rua"
    },
    "deliveryForecast": "00/00/2014",
    "deliveryList": [
        {
            "deliveryForecast": "00/00/2014",
            "historyList": [
                {
                    "date": "00/00/2014 15:54:52",
                    "description": "Recebemos a confirma\u00e7\u00e3o do pagamento de seu pedido e vamos dar continuidade ao processo de envio."
                },
                {
                    "date": "00/00/2014 15:59:22",
                    "description": "O pedido j\u00e1 est\u00e1 com a transportadora e ser\u00e1 entregue dentro do prazo informado na compra."
                },
                {
                    "date": "00/00/2014 17:30:07",
                    "description": "A nota fiscal de seu pedido j\u00e1 foi emitida, estamos encaminhando para a transportadora respons\u00e1vel pela entrega."
                },
                {
                    "date": "00/00/2014 12:50:00",
                    "description": "Seu pedido foi entregue com sucesso"
                }
            ],
            "invoiceKey": "11111111111111111111111111111111111111111111",
            "invoiceNumber": "12344",
            "productsList": [
                {
                    "description": "Batedeira Philips Walita Viva Collection Mixer",
                    "id": "0212228"
                }
            ],
            "statusList": [
                {
                    "date": "00/00/2014 15:54:52",
                    "description": "Pedido Realizado - Aguardando",
                    "id": "1"
                },
                {
                    "date": "00/00/2014 15:54:52",
                    "description": "Pagamento - Recebemos a confirma\u00e7\u00e3o do pagamento de seu pedido e vamos dar continuidade ao processo de envio.",
                    "id": "2"
                }
            ],
            "trackingUrl": "http://websro.correios.com.br/sro_bin/txect01$.QueryList?P_LINGUA=001&P_TIPO=001&P_COD_UNI=1111111111111"
        },
        {
            "deliveryForecast": "00/00/2014",
            "historyList": [
                {
                    "date": "00/00/2014 15:54:54",
                    "description": "Recebemos a confirma\u00e7\u00e3o do pagamento de seu pedido e vamos dar continuidade ao processo de envio."
                },
                {
                    "date": "00/00/2014 22:28:37",
                    "description": "O pedido j\u00e1 est\u00e1 com a transportadora e ser\u00e1 entregue dentro do prazo informado na compra."
                },
                {
                    "date": "00/00/2014 23:30:03",
                    "description": "A nota fiscal de seu pedido j\u00e1 foi emitida, estamos encaminhando para a transportadora respons\u00e1vel pela entrega."
                },
                {
                    "date": "00/00/2014 13:27:00",
                    "description": "Seu pedido foi entregue com sucesso"
                }
            ],
            "invoiceKey": "11111111111111111111111111111111111111111111",
            "invoiceNumber": "12345",
            "productsList": [
                {
                    "description": "Toalha de Rosto Santista Royal Knut",
                    "id": "2101870"
                },
                {
                    "description": "Toalha de Rosto Total Mix Retr\u00f4",
                    "id": "0811921"
                },
                {
                    "description": "Cobre-Leito Casal Santista Unique Karina",
                    "id": "0843469"
                },
                {
                    "description": "Travesseiro em Percal 180 Fios Macio",
                    "id": "0843131"
                },
                {
                    "description": "Travesseiro Viscoel\u00e1stico",
                    "id": "2031234"
                }
            ],
            "statusList": [
                {
                    "date": "00/00/2014 15:54:54",
                    "description": "Pedido Realizado - Aguardando",
                    "id": "1"
                },
                {
                    "date": "00/00/2014 15:54:54",
                    "description": "Pagamento - Recebemos a confirma\u00e7\u00e3o do pagamento de seu pedido e vamos dar continuidade ao processo de envio.",
                    "id": "2"
                },
                {
                    "date": "00/00/2014 23:30:03",
                    "description": "Separa\u00e7\u00e3o em Estoque - Sucesso",
                    "id": "3"
                },
                {
                    "date": "00/00/2014 22:28:37",
                    "description": "Produto em Transporte - Sucesso",
                    "id": "4"
                },
                {
                    "date": "00/00/2014 13:27:00",
                    "description": "Entrega - SUCESSO",
                    "id": "5"
                }
            ],
            "trackingUrl": ""
        }
    ],
    "message": "Opera\u00e7\u00e3o realizada com sucesso",
    "orderDate": "00/00/2014 15:44:28",
    "orderNumber": "11111111",
    "orderStatusDescription": "Entregue",
    "orderStatusId": "39",
    "partnerId": "123",
    "partnerOrderNumber": "123",
    "status": 0
}
```

## Tipos e referências de valores do objeto retornado com a API

```js
{
	cpf: <String> CPF,
	partnerId: <String> IdResgateCampanha,
	orderNumber: <String> Pedido,
	partnerOrderNumber: <String> PedidoParceiro,
	orderDate: <String> DataPedido,
	deliveryForecast: <String> EntregaPrevista,
	orderStatusId: <String> PedidoStatusId,
	orderStatusDescription: <String> PedidoStatusDesc,
	deliveryAddress: {
		street: <String> EnderecoEntrega.Endereco,
		number: <String> EnderecoEntrega.Numero,
		complement: <String> EnderecoEntrega.Complemento,
		district: <String> EnderecoEntrega.Bairro,
		city: <String> EnderecoEntrega.Cidade,
		state: <String> EnderecoEntrega.Estado,
		cep: <String> EnderecoEntrega.CEP
	},
	status: <Number> idStatus,
	message: <String> Mensagem,
	deliveryList: <Array> ListaEntrega.Entrega [
		{
			invoiceNumber: <String> NotaFiscalNumero,
			invoiceKey: <String> NotaFiscalChave,
			deliveryForecast: <String> EntregaPrevista,
			trackingUrl: <String> UrlRastreamento,
			statusList: <Array> ListaStatus.Status [
				return {
					id: <String> StatusId,
					date: <String> DataStatus,
					description: <String> DescStatus
				};
			],
			historyList: <Array> delivery.ListaHistorico.Historico [
				return {
					date: <String> DataHistorico,
					description: <String> DescHistorico
				};
			],
			productsList: <Array> delivery.ListaProdutos.Produto [
				return {
					id: <String> ProdutoId,
					description: <String> DescProduto
				};
			]
		};
	]
}
```
