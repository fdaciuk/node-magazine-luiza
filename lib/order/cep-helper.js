'use strict';

var core = require('../core'),
	soap = require('../core/soap'),

CepHelper = {
	makeRequest(cep) {
		return soap.init({
			xmlBody: CepHelper.getXmlBody(cep),
			endpoint: 'ConsultaCEP',
			callback: CepHelper.parseObject
		});
	},

	getXmlBody(cep) {
		return {
			IdResgateCampanha: core.partnerId,
			cep
		};
	},

	parseObject(response) {
		return {
			cep: response.CEP,
			parnterId: response.IdResgateCampanha,
			status: response.idStatus,
			message: response.Mensagem
		};
	}
};

module.exports = Object.create(CepHelper);