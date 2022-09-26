interface addMarkerInterface {
  location: { lat: number; lng: number };
}

export class Map {
  private googleMap: google.maps.Map;
  private markers: google.maps.Marker[];

  count: number;

  constructor(divId: string) {
    let mapCanvas = document.getElementById(divId);
    if (mapCanvas !== null) {
      this.googleMap = new google.maps.Map(mapCanvas, {
        zoom: 7,
        center: {
          lat: 33.25643,
          lng: 73.00124,
        },
      });
      this.markers = [];
      this.count = 0;
    }
  }

  addMarker({ location }: addMarkerInterface): void {
    if (this.count === 20) {
      alert('Too many markers');
    } else {
      this.markers[this.count] = new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: location.lat,
          lng: location.lng,
        },
      });
      new google.maps.Marker({});
      this.count++;
    }
  }

  // //bad approach
  // addUserMarker(user: User): void {}

  // addCompanyMarker(company: Company): void {}
}
