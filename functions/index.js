const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const reservaQuery = require("./query/reservaQuery");
const servicioQuery = require("./query/servicioQuery");
const reporteQuery = require("./query/reporteQuery");
const prueba = require("./helpers/notificacionGmail");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
exports.crearReserva = reservaQuery.crearReserva;
exports.consultarReservaId = reservaQuery.consultarReservaId;
exports.consultarReservasFecha = reservaQuery.consultarReservasFecha;
exports.consultarReservas = reservaQuery.consultarReservas;
exports.consultarReservasPorFecha = reservaQuery.consultarReservasPorFecha;

exports.crearServicio = servicioQuery.crearServicio;
exports.consultarServicioReserva = servicioQuery.consultarServicioReserva;
exports.consultarServicios = servicioQuery.consultarServicios;

exports.reservasMasVendidasMes = reporteQuery.reservasMasVendidasMes;
exports.consultarReservasIdCliente = reservaQuery.consultarReservasIdCliente;
exports.consultarReservasPorCliente = reservaQuery.consultarReservasPorCliente;
