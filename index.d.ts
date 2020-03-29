import { BehaviorSubject } from 'rxjs';

export const enum DEVICE {
  TADO = 'Tado',
  NODEMCU = 'NodeMCU',
  SONOFF = 'Sonoff'
}

export const enum SENSOR_TYPE {
  TEMPERATURE = 'temperature',
  HUMIDITY = 'humidity',
  LIGHT = 'light'
}

export interface Sensor<T = any> {
  Name: string;
  Topic: string;
  Device: DEVICE;
  Type: SENSOR_TYPE;
  Value?: BehaviorSubject<T>;
}

export interface TemperatureSensor extends Sensor<number> {
  Value: BehaviorSubject<number>;
}

export interface LightSensor extends Sensor<string> {
  Value: BehaviorSubject<string>;
}

export interface Room {
  Name: string;
  Sensors: Array<Sensor>;
}
