class Sport {
  constructor(name, synopsis, pictures, locations) {
    this.name = name;
    this.synopsis = synopsis;
    this.locations = locations;
    this.pictures = pictures;
  }
}

class Picture {
  constructor(small) {
    this.small = small;
  }
}

class Location {
  constructor(name, geolocation) {
    this.name = name;
    this.geolocation = geolocation;
  }
}

class GeoLocation {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
}
