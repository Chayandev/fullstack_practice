class Car:
    def __init__(self,model,brand,engine): # self is used to refer to the current instance of the class
        self.model=model
        self.brand=brand
        self.__engine=engine # private attribute, it should not be accessed outside the class
    
    def get_engine(self): 
        return self.__engine # getter method to access the private attribute

    def name(self):
        return f"{self.brand} {self.model}"
    
    def __private_method(self):
        return "This is a private method, it should not be accessed outside the class"


class ElectricCar(Car): # Inheritance
    def __init__(self,model,brand,battery_size):
        super().__init__(model,brand) # to call the constructor of the parent class
        self.battery_size=battery_size
    
    def battery_info(self):
        return f"{self.name()} has a battery size of {self.battery_size} kWh"



my_car=Car("Model S","Tesla")
print("My car model is: ", my_car.model)
print("My car brand is: ", my_car.brand)
print("My car name is: ", my_car.name()) 
print("Trying to access private method: ", my_car.__private_method()) # This will raise an error as we are trying to access a private method outside the class
print("Trying to access private method using name mangling: ", my_car._Car__private_method()) # This will work as we are using name mangling to access the private method, but it is not recommended to do so

my_electric_car=ElectricCar("Model 3","Tesla",75)
print("My electric car model is: ", my_electric_car.model)
print("My electric car brand is: ", my_electric_car.brand)
print("My electric car name is: ", my_electric_car.name())

