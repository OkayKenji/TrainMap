let stationList, routes, stop_times, trips, calendar;
let reformated;
let gridmap;
let linesmap;

function preload() {
  calendar = loadTable(`./data/calendar.txt`, "csv", "header");
  routes = loadTable(`./data/routes.txt`, "csv", "header");
  stop_times = loadTable(`./data/stop_times.txt`, "csv", "header");
  stationList = loadTable(`./data/stops.txt`, "csv", "header");
  trips = loadTable(`./data/trips.txt`, "csv", "header");
  gridmap = loadJSON(`./data/stops.json`);
  linesmap = loadJSON(`./data/lines.json`);
}

function setup() {
  noLoop();
  pixelDensity(3); // keep it low or else slower browsers may struggle
  createCanvas(1300, 690);
  SET_SEARCH_MODE('DAY');
  canvasDrawer();
  reformated = reformat(getTrains(getServices(calendar, null), trips), stop_times);
  buttonGenerator(reformated, routes, stationList);
  console.log('Ready');
}

function draw() {
  canvasDrawer();
}
