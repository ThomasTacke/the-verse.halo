import { Observable } from 'rxjs';

export const enum DEVICE {
  TADO = 'Tado',
  NODEMCU = 'NodeMCU',
  SONOFF = 'Sonoff'
}

export interface Sensor<T = any> {
  Name: string;
  Topic: string;
  Device: DEVICE;
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
