from subsystems import CoffeeMachine, Delivery, Deposit


class CoffeeShop:
    def __init__(self) -> None:
        self.coffeeMachine = CoffeeMachine()
        self.delivery = Delivery()
        self.deposit = Deposit()

    def order(self) -> str:
        self.deposit.getCoffee()
        self.coffeeMachine.on()
        self.coffeeMachine.prepare()
        self.delivery.send()
