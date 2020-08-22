interface ITransport {
    deliver(): void;
}
abstract class Logistic {
    planDelivery(): void {
        const transport = this.createTransport();
        console.log(transport.deliver());
    }
    abstract createTransport(): ITransport;
}

class RoadLogistic extends Logistic {
    createTransport(): ITransport {
        return new Truck();
    }
}

class SeaLogistic extends Logistic {
    createTransport(): ITransport {
        return new Ship();
    }
}

class Truck implements ITransport {
    deliver(): void {
        console.log("deliver by land");
    }
}
class Ship implements ITransport {
    deliver(): void {
        console.log("deliver by sea");
    }
}
new RoadLogistic().planDelivery();
new SeaLogistic().planDelivery();
