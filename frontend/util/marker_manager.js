
class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    benches.forEach(bench => {
      this.createMarkerFromBench(bench);
    });
  }

  createMarkerFromBench(bench) {
    if (!this.markers[bench.id]) {
      this.markers[bench.id] = new google.maps.Marker({
        position: { lat: bench.lat, lng: bench.lng },
        map: this.map
      });
    }
  }
}

export default MarkerManager;