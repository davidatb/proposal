// const grafica = {};

// grafica["config"] = {
//   type: "line",
//   data,
//   options: {
//     // barThickness: 50,
//     layout: {
//       padding: {
//         right: 20,
//       },
//     },
//     scales: {
//       x: { min: 80, max: 90 },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
//   plugins: [scrollButtons, background_plugin],
// };

// grafica["data"] = {
//   labels: labels,
//   datasets: [
//     {
//       label: "Resumen General",
//       data: [],
//       backgroundColor: [
//         "rgba(255, 26, 104, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//         "rgba(0, 0, 0, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 26, 104, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//         "rgba(0, 0, 0, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// grafica["crear"] = (param) => {
//   const obj = this;
//   obj.configuracion = {};
//   obj.render = (param) => {
//     obj.elementos[param.id] = new Chart(document.getElementById(param.idTag), obj.configuracion);
//   };
//   obj.elementos = {};
//   obj.data = {};

//   if (param.id == undefined) {
//     return 0;

//     if (param.idTag == undefined) return 0;

//     if (param.data != undefined) {
//       obj.data[param.id] = param.data;
//     } else {
//       obj.data[param.id] = grafica["data"];
//     }

//     if (param.config != undefined) {
//       obj.configuracion[param.id] = param.config;
//     } else {
//       obj.configuracion[param.id] = grafica["config"];
//     }

//     // scrollButtons plugin block
//     let scrollButtons = {};
//     scrollButtons[param.id] = {
//       id: param.id + "_scrollButtons",
//       afterEvent(chart, args) {
//         const {
//           ctx,
//           canvas,
//           data,
//           chartArea: { top, bottom, left, right, height },
//           scales: { x },
//         } = chart;
//         const lasValue = data.labels.length - 1;

//         // funcionalidad de hover sobre los botones
//         canvas.addEventListener(param.id + "_mousemove", (event) => {
//           const xCoor = args.event.x;
//           const yCoor = args.event.y;

//           if (xCoor >= left - 18 && xCoor <= left + 18 && yCoor >= top + height / 2 - 18 && yCoor <= top + height / 2 + 18 && x.min > 0) {
//             canvas.style.cursor = "pointer";
//           } else if (
//             xCoor >= right - 18 &&
//             xCoor <= right + 18 &&
//             yCoor >= top + height / 2 - 18 &&
//             yCoor <= top + height / 2 + 18 &&
//             x.max < lasValue
//           ) {
//             canvas.style.cursor = "pointer";
//           } else {
//             canvas.style.cursor = "default";
//           }
//         });
//       },
//       afterDatasetsDraw(chart, args, pluginOptions) {
//         const {
//           ctx,
//           data,
//           chartArea: { top, bottom, left, right, height },
//           scales: { x },
//         } = chart;

//         ctx.save();

//         const lasValue = data.labels.length - 1;

//         // renderiza los botones
//         const angle = Math.PI / 180;
//         const radius = 18;
//         const strokeButton = "#03045E";

//         function buttons(x, y, r, aS, aE, text) {
//           ctx.beginPath();
//           ctx.lineWidth = 3;
//           ctx.strokeStyle = strokeButton;
//           ctx.fillStyle = "white";
//           ctx.arc(x, y, r, aS, aE, false);
//           ctx.closePath();
//           ctx.stroke();
//           ctx.fill();
//           ctx.font = "bold 20px sans-serif";
//           ctx.textAlign = "center";
//           ctx.fillStyle = strokeButton;
//           ctx.fillText(text, x, y);
//           ctx.restore();
//         }

//         if (x.min > 0) {
//           buttons(left, top + height / 2, radius, 0, angle * 360, "-");
//         }
//         if (x.max < lasValue) {
//           buttons(right, top + height / 2, radius, 0, angle * 360, "+");
//         }
//       },
//     };

//     let background_plugin = {};

//     background_plugin[param.id] = {
//       id: param.id + "_custom_canvas_background_color",
//       beforeDraw: (chart) => {
//         const { ctx } = chart;
//         ctx.save();
//         ctx.globalCompositeOperation = "destination-over";
//         ctx.fillStyle = "white";
//         ctx.fillRect(0, 0, chart.width, chart.height);
//         ctx.restore();
//       },
//     };

//     // config
//     param.config[param.id].plugins.push(scrollButtons[param.id]);
//     param.config[param.id].plugins.push(background_plugin[param.id]);

//     function scrollEffect(click) {
//       const {
//         ctx,
//         data,
//         canvas,
//         chartArea: { top, bottom, left, right, height },
//         scales: { x },
//       } = obj.elementos[param.id];

//       const xCoor = click.offsetX;
//       const yCoor = click.offsetY;
//       const lasValue = data.labels.length - 1;

//       if (obj.elementos[param.id].options.scales.x.min > 0) {
//         if (xCoor >= left - 18 && xCoor <= left + 18 && yCoor >= top + height / 2 - 18 && yCoor <= top + height / 2 + 18) {
//           obj.elementos[param.id].options.scales.x.min = obj.elementos[param.id].options.scales.x.min - 1;
//           obj.elementos[param.id].options.scales.x.max = obj.elementos[param.id].options.scales.x.max - 1;
//         } else {
//           obj.elementos[param.id].options.scales.x.min === 0;
//         }
//       }

//       if (obj.elementos[param.id].options.scales.x.max < lasValue) {
//         if (xCoor >= right - 18 && xCoor <= right + 18 && yCoor >= top + height / 2 - 18 && yCoor <= top + height / 2 + 18) {
//           obj.elementos[param.id].options.scales.x.min = obj.elementos[param.id].options.scales.x.min + 1;
//           obj.elementos[param.id].options.scales.x.max = obj.elementos[param.id].options.scales.x.max + 1;
//         } else {
//           obj.elementos[param.id].options.scales.x.max === lasValue;
//         }
//       }

//       obj.elementos[param.id].update();
//     }
//   }

//   obj.elementos[param.id].canvas.addEventListener("click", (e) => {
//     scrollEffect(e);
//   });

//   window.addEventListener("resize", (e) => {
//     obj.elementos[param.id].resize();
//   });

//   // Download canvas to image block

//   function download() {
//     var link = document.createElement(param.id + "a");
//     link.id = param.id + "_link";
//     link.download = "resumen-general.png";
//     link.href = myChart.toBase64Image();
//     link.click();
//   }

//   function download_jpg() {
//     var link = document.createElement("a");
//     link.id = param.id + "_link";
//     link.download = "resumen-general.jpg";
//     link.href = myChart.toBase64Image();
//     link.click();
//   }

//   // Position of max and min values in array datos with param.id
//   function posMaxMin(datos, param) {
//     let max = 0;
//     let min = 0;
//     let posMax = 0;
//     let posMin = 0;
//     for (let i = 0; i < datos.length; i++) {
//       if (datos[i][param] > max) {
//         max = datos[i][param];
//         posMax = i;
//       }
//       if (datos[i][param] < min) {
//         min = datos[i][param];
//         posMin = i;
//       }
//     }
//     return [posMax, posMin];
//   }

//   // Move view to the maximum value of the chart with param.id
//   function MaxValue(param) {
//     let posMax = posMaxMin(obj.datos[param.id], param.id)[0];
//     let posMin = posMaxMin(obj.datos[param.id], param.id)[1];
//     if (posMax > 0) {
//       obj.elementos[param.id].options.scales.x.min = posMax - 1;
//       obj.elementos[param.id].options.scales.x.max = posMax + 1;
//     } else {
//       obj.elementos[param.id].options.scales.x.min = 0;
//       obj.elementos[param.id].options.scales.x.max = 2;
//     }
//     obj.elementos[param.id].update();
//   }

//   // Move view to the minimum value of the chart with param.id
//   function MinValue(param) {
//     let pos = posMaxMin(obj.datos[param.id])[1];
//     obj.elementos[param.id].options.scales.x.min = pos - 5;
//     obj.elementos[param.id].options.scales.x.max = pos + 5;
//     obj.elementos[param.id].update();
//   }

//   // Searcher on real time for a chart label and move teh view to closest instant search with param.id
//   document.getElementById(param.id + "_searcher").addEventListener("keyup", (e) => {
//     let buscador = e.target.value;
//     let pos = obj.datos[param.id].indexOf(buscador);
//     if (pos > -1) {
//       obj.elementos[param.id].options.scales.x.min = pos - 5;
//       obj.elementos[param.id].options.scales.x.max = pos + 5;
//       obj.elementos[param.id].update();
//     } else {
//       let pos = obj.datos[param.id].findIndex((element) => element.includes(buscador));
//       if (pos > -1) {
//         obj.elementos[param.id].options.scales.x.min = pos - 5;
//         obj.elementos[param.id].options.scales.x.max = pos + 5;
//         obj.elementos[param.id].update();
//       }
//     }
//   });

//   // Searcher on real time for chart values and move the view to closest whit map method with param.id
//   document.getElementById(param.id + "_buscador2").addEventListener("keyup", (e) => {
//     let buscador = e.target.value;
//     let coincidencias = obj.datos[param.id].filter((element) => element == buscador);
//     if (coincidencias.length > 0) {
//       let pos = obj.datos[param.id].map((element) => element).indexOf(buscador);
//       obj.elementos[param.id].options.scales.x.min = pos - 5;
//       obj.elementos[param.id].options.scales.x.max = pos + 5;
//       obj.elementos[param.id].update();
//     } else {
//       result = [];
//       obj.datos[param.id].forEach((d) => {
//         result.push(Math.abs(d - buscador));
//       });
//       Math.min(...result);
//       cercano = result.indexOf(Math.min(...result));

//       // show messagge in div if not found with param.id
//       document.getElementsByClassName(
//         param.id + "_message"
//       )[0].innerHTML = `<div class=""<strong>Alerta!</strong> No se encontró el valor ${buscador} en el gráfico pero el valor mas cercano es ${
//         obj.datos[param.id][cercano]
//       }</div>`;
//       setTimeout(() => {
//         document.getElementsByClassName(param.id + "_message")[0].innerHTML = "";
//       }, 5000);

//       // move view to cercano with param.id
//       obj.elementos[param.id].options.scales.x.min = cercano - 5;
//       obj.elementos[param.id].options.scales.x.max = cercano + 5;
//       obj.elementos[param.id].update();
//     }
//   });

//   // generic function to zoom in and out with param.id
//   function zoom(param, InOut) {
//     obj.elementos[param.id].options.scales.x.min = 0;
//     obj.elementos[param.id].options.scales.x.max = InOut;
//     obj.elementos[param.id].update();
//   }

//   document.getElementById(param.id + "_zoomIn").addEventListener("click", (e) => {
//     zoom(param, 10);
//   });

//   document.getElementById(param.id + "_zoomOut").addEventListener("click", (e) => {
//     zoom(param, 50);
//   });

//   // Destroy chart block when the window close with param.id
//   window.addEventListener("beforeunload", (e) => {
//     obj.elementos[param.id].destroy();
//   });
// };

// grafica["render"] = (param) => {
//   // grafica["crear"].render(param);
//   console.log(grafica);
// };

// let param = {
//   id: "grafica1",
//   idTag: "myChart_1",
// };

// // grafica.render(param);
  

