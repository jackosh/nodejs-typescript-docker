console.log('server init...')

let t = 0
let cycleNumber = 0;

/* Object Types?? */
enum ObjectLabels {
    undefined = "undefined",
    Electronics = "Electronics",
    Tool = "Tool",
    Accessoire = "Accessoire",
    Paper = "Paper",
    Document = "Document"
}

class InventoryObject {
    objectId: number;
    name: string;
    private labels: Set<ObjectLabels>
    constructor (objectId: number, name: string, labels: Set<ObjectLabels>) {
        this.objectId = objectId
        this.name = name
        this.labels = labels
    }
    getKeys() {
        return this.labels.keys()
    }
    getLabels() {
        return this.labels.entries()
    }
    addLabel(label: ObjectLabels) {
        this.labels.add(label)
    }
}

let lgG6 = new InventoryObject(0, 'Lg G6', new Set([ObjectLabels.Electronics]));
console.log(lgG6.getLabels())
console.log(lgG6.getKeys())
lgG6.addLabel(ObjectLabels.Tool)
let objectString = JSON.stringify(lgG6)
console.log('jsobject')
console.log(lgG6);
console.log('stringify -> object string:')
console.log(objectString);
console.log('parse -> parsed object:')
let obj: InventoryObject = JSON.parse(objectString)
console.log(obj)
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