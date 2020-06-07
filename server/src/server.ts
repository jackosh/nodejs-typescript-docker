console.log('server init...')

let t = 0
let cycleNumber = 0;

/* Object Types?? */
enum ObjectLabels {
    undefined = "undefined",
    Electronics = "Electronics",
    Tool = "Tool",
    Accessoire = "Accessoire",
}

class InventoryObject {
    objectId: number;
    name: string;
    constructor (objectId: number, name: string) {
        this.objectId = objectId
        this.name = name
    }
}

let lgG6 = new InventoryObject(0, 'Lg G6');
console.log(lgG6);
/*
Objects

weight


class Weight {
    value: number
}
class ObjectParameter {
    name: string;
    value: number;
    atTime: number;
    constructor ()
}
class Model {
    knownValues: Array['weight']
    snapShots: {
        weight: Array<ObjectParameter>
    }


}
*/