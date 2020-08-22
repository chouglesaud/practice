interface FlyingTransport {
  fly(origin: any, destination: any, passengers: any): void;
}
class Airport {
  public accept(vehicle: FlyingTransport): void {}
}

class Helicopter implements FlyingTransport {
  fly(origin: any, destination: any, passengers: any): void {}
}

class Airplane implements FlyingTransport {
  fly(origin: any, destination: any, passengers: any): void {}
}

class DomesticatedGryphon implements FlyingTransport {
  fly(origin: any, destination: any, passengers: any): void {}
}
