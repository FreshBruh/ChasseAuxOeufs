let eggList = Array();

const generateData = function () {
    eggList.push(
        {
            eggId: 1,
            qlikAppId: "43ef811b-9fc6-45af-b00b-3e2a99f5f0fc",
            response: "Date:02-04-2023;Regroupement_Marche:France;Canal_de_Distribution:App;Page:RechercheOD;Date_de_Comparaison:29-03-2023",
            name: "",
            url: "https://qlik.marketing-oui-prod.aws.vsct.fr/sense/app/43ef811b-9fc6-45af-b00b-3e2a99f5f0fc",
            question: "Trouver la  bonne page, le bon canal  et le bon marché pour la date du 02/04/2023 et pour lequel le nombre de visiteurs uniques est de 573,85 k."
        },
        {
            eggId: 2,
            qlikAppId: "62e42d2d-36a4-40a6-88c3-2023fecdd689",
            response: "DatedeCommande:13-03-2023,14-03-2023,15-03-2023,17-03-2023,16-03-2023;lbl_os:IOS;lbl_Agglo_Reseau:Angoulême-RéseauMöbius",
            name: "",
            url: "https://qlik.marketing-oui-prod.aws.vsct.fr/sense/app/62e42d2d-36a4-40a6-88c3-2023fecdd689",
            question: "Sélectionner la bonne semaine calendaire ouvrable (du lundi au vendredi) de mars, et la bonne Agglomération - Réseau , qui a généré un VA de 37,40 euros pour IOS."
        },
        {
            eggId: 3,
            qlikAppId: "32b9a3fe-8a47-486f-8e69-112257f6b491",
            response: "Mois:Janvier;Typedeviceregroupement:Webonly;Transporteur:OUIGO",
            name: "",
            url: "https://qlik.marketing-oui-prod.aws.vsct.fr/sense/app/32b9a3fe-8a47-486f-8e69-112257f6b491",
            question: "Pour quel mois de 2023 et pour quel canal d'achat nous avons 291 360 clients sur le transporteur OUIGO ?"
        },
        {
            eggId: 4,
            qlikAppId: "f1088400-19a9-4efd-bedb-336a41cb8bea",
            response: "DatedeCommande:02/04/2023;RegroupementMarché:France;CanaldeDistribution:Site;TypedeProduit:Liberté",
            name: "",
            url: "https://qlik.marketing-oui-prod.aws.vsct.fr/sense/app/f1088400-19a9-4efd-bedb-336a41cb8bea",
            question: "Pour quel jour d'avril 2023 et quel type de produit , nous avons vendu 553 cartes sur le site pour le marché France ?"
        },
        {
            eggId: 5,
            qlikAppId: "288b0a78-4fdb-4395-955c-4763d113834e",
            response: "Mois:Février;est_TER:1;lbl_liste_transporteurs:TER,TGVINOUI;RegroupementMarché:France;produit_ter:TRAIN;Région:PaysdelaLoire",
            name: "",
            url: "https://qlik.marketing-oui-prod.aws.vsct.fr/sense/app/288b0a78-4fdb-4395-955c-4763d113834e",
            question: "Pour quel mois et quelle région, nous avons vendu 68 998 places de train sur la liste de transporteurs TER, TGV INOUI sur le marché France ?"
        },
        {
            eggId: 6,
            qlikAppId: "fcaf824e-cbb8-4f3f-9b5b-a2387c86fa7b",
            response: "RegroupementMarché:France;RegroupementTransporteur:TGV;SegmentTarif:Jeunes",
            name: "",
            url: "https://qlik.marketing-oui-prod.aws.vsct.fr/sense/app/fcaf824e-cbb8-4f3f-9b5b-a2387c86fa7b",
            question: "Sélectionner le transporteur et le segment tarif pour lesquels la route Lille - Marseille a généré un VA de 226 euros sur le marché France."
        },
        {
            eggId: 7,
            qlikAppId: "e15ba73d-5596-4884-af05-63f2aa3b971d",
            response: "lbl_mois_commande:=annee_commande*12+num_mois_commande=(year(today()-1)*12+month(today()-1)-1);Regroupement_Marche:France;Produit:Train;Regroupement_Transporteur:IC",
            name: "",
            url: "https://qlik.marketing-oui-prod.aws.vsct.fr/sense/app/e15ba73d-5596-4884-af05-63f2aa3b971d",
            question: "Pour quel transporteur et quel marché , nous avons un panier moyen global de 26,54 euros sur le mois précédent ?"
        },
        {
            eggId: 8,
            qlikAppId: "4013b077-4f10-484e-b75e-35350c7b663b",
            response: "origin_code:BordeauxStJean;Marché:Français;NomJour_travel:sam.;Date_observation:01-04-2023",
            name: "",
            url: "https://qlik.marketing-oui-prod.aws.vsct.fr/sense/app/4013b077-4f10-484e-b75e-35350c7b663b",
            question: "Sélectionner le marché et le jour de voyage pour 15 537 recherches du 1er avril 2023 ayant comme origine  Bordeaux Saint Jean"
        },
        {
            eggId: 9,
            qlikAppId: "d24fa672-9d4a-443b-9f6d-7d086598ad6f",
            response: "Semaine:10;est_avantage:1;RegroupementMarché:Europe",
            name: "",
            url: "https://qlik.marketing-oui-prod.aws.vsct.fr/sense/app/d24fa672-9d4a-443b-9f6d-7d086598ad6f",
            question: "Sélectionner la semaine et le marché pour lesquels  le panier moyen sur le site est de 46,11 euros sur les billets avantages"
        },
        {
            eggId: 10,
            qlikAppId: "d0a29b92-7fca-4a9d-b41f-b7e3cd06ed86",
            response: "dt_jour:=[Année]*12+num_mois_annee&lt;=year(today()-1)*12+month(today()-1)andid_date_commande&lt;=today()-1;lbl_classe_transport:Première;=Date#(lbl_mois,'MMM'):Février",
            name: "",
            url: "https://qlik.marketing-oui-prod.aws.vsct.fr/sense/app/d0a29b92-7fca-4a9d-b41f-b7e3cd06ed86",
            question: "Sélectionner le mois et la classe de transport pour lesquels nous avons vendu 146 706 places sur tous les marchés"
        },
    );
}

const addFirstFinder = function (qlikAppId, name) {
    if (!checkIfAlreadyFound(qlikAppId)) {
        const eggIndex = eggList.findIndex(element => element.qlikAppId === qlikAppId);
        let egg = eggList.find(element => element.qlikAppId === qlikAppId);
        egg.name = name;
        eggList[eggIndex] = egg;
    }
}

const checkIfAlreadyFound = function (qlikAppId) {
    if (eggList.find(element => element.qlikAppId === qlikAppId).name != "") return true;
    else return false;
}

const checkIfAlreadyFoundBySameUser = function (qlikAppId, name) {
    if (eggList.find(element => element.qlikAppId === qlikAppId).name != name) return false;
    else return true;
}

const checkResponse = function (qlikAppId, getCurrentSelection) {
    console.log(qlikAppId);
    console.log(getCurrentSelection);
    if (checkIfEggExists(qlikAppId)) {
        const egg = eggList.find(element => element.qlikAppId === qlikAppId);
        if (egg.response === getCurrentSelection) return true;
        else return false;
    } else return false;

}

const checkIfEggExists = function (qlikAppId) {
    const test = eggList.find(element => element.qlikAppId === qlikAppId);
    console.log(test);
    if (eggList.find(element => element.qlikAppId === qlikAppId) != undefined) return true;
    else return false;
}

const getNextEggUrl = function (qlikAppId) {
    const eggIndex = eggList.findIndex(element => element.qlikAppId === qlikAppId);
    if (eggList[eggIndex + 1] != undefined) return eggList[eggIndex + 1].url
    else return false;
}

const getNextQuestion = function (qlikAppId) {
    const eggIndex = eggList.findIndex(element => element.qlikAppId === qlikAppId);
    if (eggList[eggIndex + 1] != undefined) return eggList[eggIndex + 1].question
    else return false;
}

module.exports = {
    eggList,
    generateData,
    addFirstFinder,
    checkIfAlreadyFound,
    checkResponse,
    checkIfEggExists,
    getNextEggUrl,
    getNextQuestion,
    checkIfAlreadyFoundBySameUser
}