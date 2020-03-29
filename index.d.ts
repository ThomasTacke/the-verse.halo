import { Observable } from 'rxjs';

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
  Value?: Observable<T>;
}

export interface TemperatureSensor extends Sensor<number> {
  Value: Observable<number>;
}

export interface LightSensor extends Sensor<string> {
  Value: Observable<string>;
}

export interface Room {
  Name: string;
  Sensors: Array<Sensor>;
}
