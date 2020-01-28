sap.ui.controller("Manage_Exlcusions.ext.controller.ObjectPageExt", {

	onInit: function () {

		var adminDataUiElementIdList = [
			"Manage_Exlcusions::sap.suite.ui.generic.template.ObjectPage.view.Details::ZZC_ProdSubstnExclsn--headerEditable::com.sap.vocabularies.UI.v1.FieldGroup::Admin::Form",
			"Manage_Exlcusions::sap.suite.ui.generic.template.ObjectPage.view.Details::ZZC_ProdSubstnExclsn--headerEditable::com.sap.vocabularies.UI.v1.FieldGroup::User::Form"
		];
		for (var i = 0; i < adminDataUiElementIdList.length; i++) {
			sap.ui.getCore().byId(adminDataUiElementIdList[i]).setVisible(false);
		}

		this.extensionAPI.attachPageDataLoaded(function (o) {

			if (o.context.getObject().Plant) {

				var productHide = new Promise(function (resolve, reject) {
					var poops = setInterval(function () {
						if (sap.ui.getCore().byId(
								"Manage_Exlcusions::sap.suite.ui.generic.template.ObjectPage.view.Details::ZZC_ProdSubstnExclsn--headerEditable::com.sap.vocabularies.UI.v1.HeaderInfo::Form"
							)) {
							clearInterval(poops);
							resolve();
						}
					}, 100);
				});

				productHide.then(function () {
					sap.ui.getCore().byId(
						"Manage_Exlcusions::sap.suite.ui.generic.template.ObjectPage.view.Details::ZZC_ProdSubstnExclsn--headerEditable::com.sap.vocabularies.UI.v1.HeaderInfo::Form"
					).setVisible(false);
				});

			} else {
				
				
				var productShow = new Promise(function (resolve, reject) {
					var poops = setInterval(function () {
						if (sap.ui.getCore().byId(
								"Manage_Exlcusions::sap.suite.ui.generic.template.ObjectPage.view.Details::ZZC_ProdSubstnExclsn--headerEditable::com.sap.vocabularies.UI.v1.HeaderInfo::Form"
							)) {
							clearInterval(poops);
							resolve();
						}
					}, 100);
				});

				productShow.then(function () {
					sap.ui.getCore().byId(
						"Manage_Exlcusions::sap.suite.ui.generic.template.ObjectPage.view.Details::ZZC_ProdSubstnExclsn--headerEditable::com.sap.vocabularies.UI.v1.HeaderInfo::Form"
					).setVisible(true);
				});

			}

		});

	}

});