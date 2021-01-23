interface Locations {
  location: {
    lat: number,
    lng: number
  }
  markerContent(): string;
}

export class CustomMap{
  private googleMap: google.maps.Map;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId),{
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      }
    });
  }
  addMarker(user:Locations):void{
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      }
    });
    marker.addListener("click", () => {
      const newLocal = user.markerContent();
      const infoWindow = new google.maps.InfoWindow({
        content: newLocal
      });
      infoWindow.open(this.googleMap, marker);
    });
  };
}