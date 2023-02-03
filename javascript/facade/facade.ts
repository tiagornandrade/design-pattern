import { CoffeeMachine, Delivery, Deposit } from "./subsystems";

export class CoffeeShop {
    order() {
        const deposit = new Deposit()
        const coffeeMachine = new CoffeeMachine()
        const delivery = new Delivery()

        deposit.getCoffee()
        coffeeMachine.on()
        coffeeMachine.prepare()
        delivery.send()
    }
}