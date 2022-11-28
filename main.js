// arreglo de labels
const labels = [
  "AROARRENDADORA",
  "BCCSALUD",
  "COIMSUR",
  "DIAWERK",
  "FYTTSA",
  "HUIXQUILUCAN",
  "ISCISA",
  "KARGOFER",
  "LABORATORIOSSILANESSADECV",
  "LuisBarragan",
  "MADINIMPRESORES",
  "NALCOYECOLAB",
  "ORIONTRANSPORTES",
  "ServiciosIntegralesLobal",
  "SERVILAMINASUMMIT",
  "SUMITOMOCORPORATION",
  "Unilever",
  "UPFIELDUTILITARIOS",
  "AutoAval",
  "AVONCOSMETICS",
  "BENEFICIA",
  "CARVIFLON",
  "CIBANCO",
  "FRESNO",
  "GRUPOGUSI",
  "INGRAM",
  "IRISA",
  "JennyVargas",
  "JULYA",
  "LlanodelaTorre",
  "LogisticaMobility",
  "METLIFE",
  "MILENIUM",
  "NANCYCASTAEDA",
  "PEPSICO",
  "PLAGIALCA",
  "Trasmisa",
  "TUBOSYVALVULAS",
  "UNILEVERFOODSOLUTIONS",
  "UPFIELDEJECUTIVO",
  "YOU",
  "Smart",
  "Efectimundo",
  "FARMAMIGO",
  "Teld",
  "TRANSPORTESESPECIALIZADOSSMART",
  "TransportesVaro",
  "JESCAR",
  "MaterialesElPuente",
  "Treca",
  "COPSA",
  "EnriqueTorresBenitez",
  "CorporativoDosNaciones",
  "DTM",
  "ACARREODELALAGUNA",
  "AnnaMaradelaLuzNava",
  "ARGENACOB",
  "AutotransportesDomnguez",
  "AUTOTRANSPORTESHIBE",
  "BILLPOCKET",
  "BIOTRADE",
  "CASASANCHEZ",
  "CasaSommer",
  "CERCASREYES",
  "COMEX",
  "CorporativoNovartis",
  "DYSTANCIA",
  "ELCASTORCITO",
  "F1rstCall",
  "FLECHISA",
  "GINA",
  "GISA",
  "GRUPOGSF",
  "GUILLERMOSUAREZ",
  "LOGISTICAYTRANSPORTESCANO",
  "MantenimientoSEA",
  "MARTINHERNANDEZGOMEZ",
  "MAS",
  "MASTERLUIS",
  "Multitravi",
  "PQPPromocionesQumicasyPetroqumicas",
  "PYESEGURIDAD",
  "Recymetales",
  "RUBENMOJICA",
  "SUPERGARCIAMERCADO10",
  "TANIAZAMBRANO",
  "TDASERVICES",
  "TRANSPORTEJRLOGISTICA",
  "TRANSPORTESEGON",
  "TransportesGuerrerense",
  "TUMSA",
  "VALRO",
  "VEHCULOSECATEPEC",
  "VisionPrendaria",
  "WELDMATION",
  "AKRA",
  "ALCER",
  "ALEXISRELINGH",
  "CARLITOS",
  "CJROJAS",
  "CONSTRUMAC",
  "DEVEK",
  "FabianGarcia",
  "FletesCantbricos",
  "GRUPORODASERVICES",
  "IntegracionTecnologicaEInductrial",
  "MauricioNieto",
  "ONTIVEROS",
  "RESINASACH",
  "ROCAEXPRESS",
  "TERRAVILA",
  "TODOEMPAQUE",
  "ANGELPOSADASMORA",
  "ABOUMRAD",
  "ANTONIACRUZ",
  "BERTHABRUNOVARGAS",
  "DMSSHOPS",
  "ENCANTO",
  "IMEISA",
  "Indreyes",
  "LAMMSA",
  "LILIARODRIGUEZ",
  "OCESA",
  "SMARTPEOPLE",
  "TransportesLugo",
  "VIA54",
  "ArianaVegaCancino",
  "AutotransportesOcnepan",
  "CENTENARIO",
  "FedericoRiosLopez",
  "GLACO",
  "JAVIERSOTOGABRIEL",
  "Klee",
  "LAFIA",
  "LUISFERNANDOAROCHEHERRERA",
  "MadameDubarry",
  "MECIPLUS",
  "MUDANZASGOU",
  "OBERTAL",
  "SALVADORSANCHEZ",
  "SUMINISTRO",
  "TransUnivers",
  "TransportesAO",
  "ARROCEROS",
  "FortalezaChalco",
  "FranciscoJavierAlvaresCabrera",
  "HIROTEC",
  "HUGOHUERTA",
  "PRODNEZA",
  "RUTASPUEBLA",
  "FRUTACCI",
  "HerramientasCleveland",
  "QuimicaRana",
  "ROSALBA",
  "TRANSVALERIANO",
  "TransportesMuoz",
  "CELA",
  "DARIMI",
  "FERNANDAMAYTE",
  "FLEXNGATE",
  "MAROD",
  "NEFITRANS",
  "RANGEL",
  "TOMOKATAKEDAHARAMI",
  "TransportesFAG",
  "LUCASRG",
  "MIGUELRIVEROMARTINEZ",
  "JORGEDARIOTORRERIVERO",
  "GAFASO",
  "GemaAguayo",
  "NUEVAERA",
  "Ralca",
  "SMART001",
  "Smartgoogle",
  "STOVMEX",
  "TBRAFAR",
  "TransVeta",
  "ArturoTransport",
  "CRISAMANO",
  "DOMINALO",
  "FranciscoEscalonaVarela",
  "HUMBERTOJIMENEZ",
  "INOVACIONADMINISTRATIVAEMPRESARIAL",
  "LIGHTCOMERCIALIZADORA",
  "TeresitaCasillas",
  "ACIERTA",
  "ADJProducts",
  "AMERCAPMEXICO",
  "AUTOLINEASSHANTI",
  "BARROSO",
  "BELLEZAIVSA",
  "COMERCIALIZADORADICLINSA",
  "Corpimpresora",
  "CUANDASASETA",
  "DAVEM",
  "ENLASA",
  "FARMADECLOGISTICA",
  "FERBERA",
  "FERREKUPER",
  "GroupdeCelaya",
  "GRUPOCARRZZOCCO",
  "HECTORSANCHEZ",
  "ISAVINI",
  "LEVITON",
  "MAXIPET",
  "MireilleQuintinChagoya",
  "PedroAcosta",
  "PRIMLOGISTICS",
  "REYZA",
  "TAKII",
  "TeresaFlores",
  "TRANSNASCE",
  "TRANSMER",
  "TRANSPORTESTERRESTRES",
  "BarquillosEly",
  "GabrielaGarrido",
  "MAURICIOPADILLA",
  "ALATORRE",
  "AsesoriaIntegral",
  "CouohAlejandro",
  "GarciaExpress",
  "Hernandez72",
  "IMPACTOCREATIVO",
  "LEGASPI",
  "LilianaNoya",
  "MasterLoyaltyGroup",
  "Navarro",
  "RafaelRomero",
  "Retex",
  "STANLEY",
  "TransportesQuincho",
  "AlfredoZabalza",
  "BrayanDanielSanchez",
  "Puriplas",
  "TRANSPORTECORTESCX",
  "URIEL",
  "ABACO",
  "AceroCompactado",
  "ACEROSOLMOS",
  "ACERRITOS",
  "AdrinLpezBallesteros",
  "ALBERTOJIMENEZ",
  "ALBERTOREYESALEMAN",
  "ALCON",
  "ALIPROLAC",
  "ARMANDORAMIREZ",
  "ARTUROCHAFINO",
  "AXITY",
  "BOLLUKCOMERCIALIZADORA",
  "Bombones",
  "BRAMADERO",
  "CargaCoatepec",
  "CARLEX",
  "CasaPato",
  "CHAUVET",
  "ComercialSantaAna",
  "CORPORATIVOBDG",
  "CRESCENCIOCABRERATORRES",
  "DAPSA",
  "DEJAVU",
  "DEMOPRUEBASTI",
  "DENTALVILLA",
  "ECOWIDIA",
  "EDGARRODRIGUEZ",
  "ELPIDIO",
  "ESTEFANIAAYALA",
  "FACOMCART",
  "Ferrer",
  "FUNSAM",
  "GABRIELAPLATONOFF",
  "GIMPSA",
  "GRUPOSUMMAA",
  "HesamyGonzlez",
  "HUEJOTEXTIL",
  "IBUS",
  "JaimeFuentesGonzalez",
  "JMTransportes",
  "JOSEMANUELMIRANDAVELASCO",
  "JUANMANUELCORTES",
  "JuanManuelGranados",
  "LAIMPERIAL",
  "LAMORELENSE",
  "LaidaMonarres",
  "LeopoldoGonzalez",
  "LimpiezaGP",
  "LogisticaVilchis",
  "LUZIRENEGENAROGARCIA",
  "MarcelinoTelloHuerta",
  "MariadeLourdesGonzalez",
  "MARIOLOZAREYES",
  "MARROQUINERIAYEQUIPAJES",
  "MasterLogistica",
  "MEDICUS",
  "MEGAAUDIO",
  "MEGACHEF",
  "MERCADAZO",
  "METROLOGIAYCALIBRACIONES",
  "NaturalHealth",
  "NUPON",
  "OIRACEL",
  "OROPEZATRUCKING",
  "OswaldoVergaraArzate",
  "PAPELERIAELIRIS",
  "PedroFranco",
  "PedroHernandez",
  "PEVACOMERCIAL",
  "PUMABUS",
  "QUIMICARMONTERREY",
  "RamonConde",
  "Ramval",
  "REBELDE",
  "RicardoMiranda",
  "RosaMariaGonzalez",
  "ROSAS",
  "RTP",
  "Ruta46",
  "RUTAGARCIA",
  "Ruta15",
  "Sacbe",
  "SAYQUIMICA",
  "SCPCustySeg",
  "SIVASA",
  "SPACAYUCAN",
  "TEHNSA",
  "TRANSMONZALVO",
  "TransObregn",
  "TRANSPORTESCHAVEZ",
  "TransportesSanti",
  "TRANSPORTESTMDM",
  "TUBOMEX",
  "TULIX",
  "UPELEVATOR",
  "XIPEC",
  "YESOSUPREMO",
  "ZAMUDIO",
  "JOSESAFAR",
  "OCTAVIOAZUL",
  "TransportesTanila",
  "ACMER",
  "BHTRADE",
  "CLAUDIACASILLAS",
  "ESPINOZAJEMA",
  "GENERA3",
  "JIMENEZ",
  "JuanManuelHernandez",
  "SoniaVarela",
  "TRANSCONTAINER",
  "UNIPROMTEX",
  "VIASTARA",
  "BALDOMEROMUOZ",
  "BARS",
  "VolvoEjecutivos",
  "MEDIAFRAME",
  "CARLOSCARRIZALES",
  "DESECHABLE",
  "AFTONCHEMICAL",
  "AgustinGonzalo",
  "AlbertoAcostaMendoza",
  "AlejandroCarranza",
  "ARACELIGONZALEZ",
  "ARDA",
  "AriadnaOrta",
  "ARRENDAMIENTODEINMUEBLES",
  "ArticulosDeportivos",
  "ArturoTirso",
  "Autocar",
  "BATV",
  "BEGGEL",
  "BLAU",
  "CARGAAEREA",
  "CeciliaVelazquezSandoval",
  "CHAVEZ",
  "COCOMEX",
  "COMERBEC",
  "CORONADO",
  "DagobertoSantiagoToledo",
  "DANIELFERNANDEZ",
  "DavidIvanSuarez",
  "DistribuidoradeFrutas",
  "EDICOM",
  "ElsaLariosPerez",
  "ELVIRA",
  "ESPINOSA",
  "ESTANISLAO",
  "ExpertosIUS",
  "FLOBER",
  "GISELALIZBETH",
  "GuillermoGutierrezMancilla",
  "GUILLERMOMONTES",
  "HAIAT",
  "IlianaDeLaRosa",
  "INMOVBILIARIABELATE",
  "IZUNZAMEDIA",
  "JORCHAV",
  "JORGEORTIZ",
  "JoseGuadalupeDuranFabian",
  "JuanManuelAlcaraz",
  "JULIOCESARRODRIGUEZ",
  "Kafuri",
  "KAVISA",
  "KEYTRADE",
  "LIGHTROCK",
  "LIMAC",
  "LOGEE",
  "LOGTEC",
  "LuisManuelCenteno",
  "LuisVillareal",
  "LUISERRANO",
  "LuzElisaFurlong",
  "MANTENIMIENTOYSERVICIOSINALMBRICOS",
  "MarioChavez",
  "MauricioMendoza",
  "MAXIDISTRIBUCIN",
  "MCDLAB",
  "MediaLuna",
  "MOLINOELPARAISO",
  "MUDANZASVAZQUEZ",
  "MUELLESSOTO",
  "NatanaelOrtizRojo",
  "NERY",
  "PATRICIA",
  "PEDROAXEL",
  "POLYAMSA",
  "QUIMAE",
  "Ranchodivinailusion",
  "RENMA",
  "SALAZAR",
  "SeigelObregon",
  "SMARTTAXI",
  "SPSIDERURGICOS",
  "TECONECTALATINO",
  "Tejemex",
  "TEKAX",
  "TRANSMARCIA",
  "TRANSPORTESHEMAR",
  "WLKAUDIOVISUAL",
  "LEASEPLAN",
  "ROSHFRANS",
  "SILVIAFRAGA",
  "WM",
  "ANDRESPRADO",
  "ARMOR",
  "GarzaLongoria",
  "GENESKA",
  "HumbertoLpezMaldonado",
  "JoseFlavioAlvarezHernandez",
  "POLENCIANO",
  "RaulHernandezCruz",
  "REYESCUESTA",
  "TRANSPORTESNAVA",
  "UMBRAL",
  "VICMAR",
  "ALISIENGRUPOCORPORATIVOINTEGRAL",
  "ArmandoReyesRuiz",
  "CALLEJAS",
  "DANDIAZ",
  "EICSA",
  "GLOBALNETWORKS",
  "GonzalezArroyo",
  "JosManuelRuizCastro",
  "JosueSanchez",
  "TransportesGUVE",
  "LYCOFIL",
];

// arreglo de datos
const datos = [
  133, 7175, 436, 1241, 318, 74, 62, 680, 593, 386, 82, 469, 155, 204, 204, 204, 204, 204, 133, 7175, 1178, 1178, 436, 318, 41, 1380, 62,
  49, 214, 123, 203, 14, 14, 469, 1733, 1733, 204, 204, 204, 204, 204, 6149, 170, 175, 204, 204, 204, 49, 185, 204, 473, 1849, 356, 1241,
  457, 1337, 3460, 7175, 7175, 1178, 1178, 1178, 1178, 1178, 473, 356, 1241, 170, 175, 175, 318, 318, 41, 59, 203, 371, 185, 185, 185, 469,
  204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 659, 4876, 421, 1178, 436, 473, 1241, 175, 175, 41, 62, 187,
  155, 204, 204, 204, 204, 169, 409, 694, 1178, 1241, 1849, 1380, 1380, 593, 72, 155, 204, 204, 204, 133, 7175, 1178, 175, 41, 49, 593, 593,
  395, 82, 391, 1364, 155, 204, 204, 204, 204, 133, 318, 318, 74, 74, 204, 204, 318, 74, 204, 204, 204, 204, 1178, 3722, 175, 175, 185, 464,
  204, 204, 204, 61, 14, 332, 318, 318, 155, 204, 204, 204, 204, 204, 204, 133, 577, 1241, 318, 74, 62, 72, 204, 3994, 837, 1192, 133, 7175,
  1178, 473, 473, 577, 3722, 1849, 175, 175, 175, 41, 41, 74, 62, 593, 348, 14, 1733, 204, 204, 204, 204, 204, 204, 204, 7175, 318, 187, 52,
  133, 356, 318, 74, 1380, 593, 72, 185, 464, 204, 204, 204, 204, 577, 1178, 204, 204, 204, 229, 2220, 334, 258, 2095, 3885, 79, 2724, 3067,
  133, 133, 7175, 1178, 1178, 1178, 1178, 1178, 1178, 436, 473, 356, 577, 3722, 151, 210, 1241, 39, 170, 1849, 745, 175, 175, 318, 318, 318,
  41, 74, 74, 74, 49, 49, 161, 186, 186, 593, 593, 593, 593, 123, 203, 82, 371, 371, 185, 185, 185, 14, 14, 14, 14, 14, 464, 155, 155, 155,
  155, 155, 1733, 1733, 1733, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204,
  204, 204, 204, 204, 204, 204, 204, 161, 155, 204, 659, 1178, 436, 117, 318, 49, 186, 204, 204, 204, 204, 7175, 7175, 204, 14, 1178, 1241,
  659, 73, 1224, 86, 131, 308, 89, 133, 133, 133, 133, 7175, 7175, 1178, 1178, 1178, 436, 436, 436, 473, 577, 577, 3722, 1241, 170, 1849,
  1849, 117, 745, 175, 318, 41, 59, 59, 74, 1380, 62, 49, 3591, 332, 161, 186, 214, 680, 78, 593, 72, 123, 203, 61, 395, 395, 395, 82, 371,
  185, 187, 348, 391, 14, 486, 1364, 469, 464, 155, 129, 1733, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 204, 593,
  204, 204, 204, 34, 133, 318, 318, 74, 161, 35, 204, 204, 204, 204, 204, 35, 133, 1178, 577, 170, 41, 41, 161, 161, 204, 82,
];

// setup
const data = {
  labels: labels,
  datasets: [
    {
      label: "Resumen General",
      data: datos,
      backgroundColor: [
        "rgba(255, 26, 104, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(0, 0, 0, 0.2)",
      ],
      borderColor: [
        "rgba(255, 26, 104, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(0, 0, 0, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// scrollButtons plugin block
const scrollButtons = {
  id: "scrollButtons",
  afterEvent(chart, args) {
    const {
      ctx,
      canvas,
      data,
      chartArea: { top, bottom, left, right, height },
      scales: { x },
    } = chart;
    const lasValue = data.labels.length - 1;

    // funcionalidad de hover sobre los botones
    canvas.addEventListener("mousemove", (event) => {
      const xCoor = args.event.x;
      const yCoor = args.event.y;

      if (xCoor >= left - 18 && xCoor <= left + 18 && yCoor >= top + height / 2 - 18 && yCoor <= top + height / 2 + 18 && x.min > 0) {
        canvas.style.cursor = "pointer";
      } else if (
        xCoor >= right - 18 &&
        xCoor <= right + 18 &&
        yCoor >= top + height / 2 - 18 &&
        yCoor <= top + height / 2 + 18 &&
        x.max < lasValue
      ) {
        canvas.style.cursor = "pointer";
      } else {
        canvas.style.cursor = "default";
      }
    });
  },
  afterDatasetsDraw(chart, args, pluginOptions) {
    const {
      ctx,
      data,
      chartArea: { top, bottom, left, right, height },
      scales: { x },
    } = chart;

    ctx.save();

    const lasValue = data.labels.length - 1;

    // renderiza los botones
    const angle = Math.PI / 180;
    const radius = 18;
    const strokeButton = "#03045E";

    function buttons(x, y, r, aS, aE, text) {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = strokeButton;
      ctx.fillStyle = "white";
      ctx.arc(x, y, r, aS, aE, false);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      ctx.font = "bold 20px sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = strokeButton;
      ctx.fillText(text, x, y);
      ctx.restore();
    }

    if (x.min > 0) {
      buttons(left, top + height / 2, radius, 0, angle * 360, "-");
    }
    if (x.max < lasValue) {
      buttons(right, top + height / 2, radius, 0, angle * 360, "+");
    }
  },
};

// Note: changes to the plugin code is not reflected to the chart, because the plugin is loaded at chart construction time and editor changes only trigger an chart.update().
const background_plugin = {
  id: "custom_canvas_background_color",
  beforeDraw: (chart) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

// config
const config = {
  type: "line",
  data,
  options: {
    // barThickness: 50,
    layout: {
      padding: {
        right: 20,
      },
    },
    scales: {
      x: { min: 80, max: 90 },
      y: {
        beginAtZero: true,
      },
    },
  },
  plugins: [scrollButtons, background_plugin],
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

function scrollEffect(click) {
  const {
    ctx,
    data,
    canvas,
    chartArea: { top, bottom, left, right, height },
    scales: { x },
  } = myChart;

  const xCoor = click.offsetX;
  const yCoor = click.offsetY;
  const lasValue = data.labels.length - 1;

  if (myChart.options.scales.x.min > 0) {
    if (xCoor >= left - 18 && xCoor <= left + 18 && yCoor >= top + height / 2 - 18 && yCoor <= top + height / 2 + 18) {
      myChart.options.scales.x.min = myChart.options.scales.x.min - 1;
      myChart.options.scales.x.max = myChart.options.scales.x.max - 1;
    } else {
      myChart.options.scales.x.min === 0;
    }
  }

  if (myChart.options.scales.x.max < lasValue) {
    if (xCoor >= right - 18 && xCoor <= right + 18 && yCoor >= top + height / 2 - 18 && yCoor <= top + height / 2 + 18) {
      myChart.options.scales.x.min = myChart.options.scales.x.min + 1;
      myChart.options.scales.x.max = myChart.options.scales.x.max + 1;
    } else {
      myChart.options.scales.x.max === lasValue;
    }
  }

  myChart.update();
}

myChart.canvas.addEventListener("click", (e) => {
  scrollEffect(e);
});

window.addEventListener("resize", (e) => {
  myChart.resize();
});

// Download canvas to image block
function download() {
  var link = document.createElement("a");
  link.download = "resumen-general.png";
  link.href = myChart.toBase64Image();
  link.click();
}

function download_jpg() {
  var link = document.createElement("a");
  link.download = "resumen-general.jpg";
  link.href = myChart.toBase64Image();
  link.click();
}

// Position of max and min values in array datos
function posMaxMin(datos) {
  let max = datos[0];
  let min = datos[0];
  let posMax = 0;
  let posMin = 0;
  for (let i = 1; i < datos.length; i++) {
    if (datos[i] > max) {
      max = datos[i];
      posMax = i;
    }
    if (datos[i] < min) {
      min = datos[i];
      posMin = i;
    }
  }
  return [posMax, posMin];
}

// Move view to the maximum value of the chart
function MaxValue() {
  let pos = posMaxMin(datos);
  console.log(labels[pos[0]]);
  myChart.options.scales.x.min = pos[0] - 5;
  myChart.options.scales.x.max = pos[0] + 5;
  myChart.update();
}

// Move view to the minimum value of the chart
function MinValue() {
  let pos = posMaxMin(datos);
  console.log(labels[pos[1]]);
  myChart.options.scales.x.min = pos[1] - 5;
  myChart.options.scales.x.max = pos[1] + 5;
  myChart.update();
}

// Searcher on real time for a chart label and move the view to closest instant search
document.getElementById("buscador").addEventListener("keyup", (e) => {
  let buscador = e.target.value;
  let pos = data.labels.indexOf(buscador);
  if (pos > -1) {
    myChart.options.scales.x.min = pos - 5;
    myChart.options.scales.x.max = pos + 5;
    myChart.update();
  } else {
    let pos = data.labels.findIndex((element) => element.includes(buscador));
    if (pos > -1) {
      myChart.options.scales.x.min = pos - 5;
      myChart.options.scales.x.max = pos + 5;
      myChart.update();
    }
  }
});

// Searcher on real time for chart values and move the view to closest whit map method
document.getElementById("buscador2").addEventListener("keyup", (e) => {
  let buscador = e.target.value;
  let coincidencias = data.datasets[0].data.filter((element) => element == buscador);
  if (coincidencias.length > 0) {
    let pos = data.datasets[0].data.map((element) => element == buscador).indexOf(true);
    myChart.options.scales.x.min = pos - 5;
    myChart.options.scales.x.max = pos + 5;
    myChart.update();
  } else {
    result = [];
    data.datasets[0].data.forEach((d) => {
      result.push(Math.abs(d - buscador));
    });
    Math.min(...result);
    cercano = result.indexOf(Math.min(...result));

    // show messagge in div if not found
    document.getElementsByClassName(
      "message"
    )[0].innerHTML = `<div class=""><strong>Alerta!</strong> No se encontro el valor ${buscador} en el grafico pero el valor mas cercano es ${data.datasets[0].data[cercano]}.</div>`;

    // Delete message after 5 seconds
    setTimeout(() => {
      document.getElementsByClassName("message")[0].innerHTML = "";
    }, 5000);

    // move the view to cercano
    myChart.options.scales.x.min = cercano - 5;
    myChart.options.scales.x.max = cercano + 5;
    myChart.update();
  }
});

// generic function to zoom in and out

function zoom(InOut) {
  myChart.options.scales.x.min = 0;
  myChart.options.scales.x.max = InOut;
  myChart.update();
}

document.getElementById("zoomIn").addEventListener("click", () => {
  zoom(10);
});

document.getElementById("zoomOut").addEventListener("click", () => {
  zoom(50);
});

// Destroy chart block when the window close
window.addEventListener("beforeunload", (e) => {
  myChart.destroy();
});

// Dark mode chart with toggle

// document.getElementById("toggle").addEventListener("click", () => {
//   (document.body.classList.toggle("dark"), document.getElementById("toggle").classList.toggle("active"));
//   myChart.options.plugins.legend.labels.color = document.body.classList.contains("dark") ? "white" : "black";
//   myChart.options.plugins.legend.labels.fontColor = document.body.classList.contains("dark") ? "white" : "black";
//   myChart.options.plugins.legend.labels.boxColor = document.body.classList.contains("dark") ? "white" : "black";
//   myChart.options.plugins.legend.labels.borderColor = document.body.classList.contains("dark") ? "white" : "black";
//   myChart.options.plugins.legend.labels.backgroundColor = document.body.classList.contains("dark") ? "white" : "black";
//   myChart.options.plugins.legend.labels.fontColor = document.body.classList.contains("dark") ? "white" : "black";
// });



// If dark mode toggle is actve change chart colors
// document.getElementById("toggle").addEventListener("click", () => {
  // add class active to toggle
  // document.getElementById("toggle").classList.toggle("active");
  // if (document.getElementById("toggle").classList.contains("active")) {
  //   myChart.options.plugins.legend.labels.color = "white";
  //   myChart.options.plugins.legend.labels.fontColor = "white";
  //   myChart.options.plugins.legend.labels.boxColor = "white";
  //   myChart.options.plugins.legend.labels.borderColor = "white";
  //   myChart.options.plugins.legend.labels.backgroundColor = "white";
  //   myChart.options.plugins.legend.labels.fontColor = "white";
  // } else {
    // remove class active
//     document.getElementById("toggle").classList.remove("active");
//     myChart.options.plugins.legend.labels.color = "black";
//     myChart.options.plugins.legend.labels.fontColor = "black";
//     myChart.options.plugins.legend.labels.boxColor = "black";
//     myChart.options.plugins.legend.labels.borderColor = "black";
//     myChart.options.plugins.legend.labels.backgroundColor = "black";
//     myChart.options.plugins.legend.labels.fontColor = "black";
//   }
//   myChart.update();
// });






  