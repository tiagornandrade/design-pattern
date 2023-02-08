import { Facade, Subsystem1, Subsystem2 } from "./subsystems"

function clientCode(facade: Facade) {
    console.log(facade.operation());
}

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
clientCode(facade);