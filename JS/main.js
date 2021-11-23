// Setters and getters, convert between Fahrenheit and Celsius.

class Thermostat {
    constructor(fahrTemp) {
      this.temp = fahrTemp;
    }
    get temperature() {
      this.temp = 5 / 9 * (this.temp - 32);
      return this.temp;
    }
    set temperature(celsTemp) {
      this.temp = celsTemp * 9.0 / 5 + 32;
    }
  } 
  