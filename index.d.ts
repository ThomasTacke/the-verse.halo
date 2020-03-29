import { Observable } from 'rxjs';

export const enum ICONS {
  TEMPERATURE = 'thermometer',
  HUMIDITY = 'water-percent',
  LIGHTBULB_ON = 'lightbulb-on',
  LIGHTBULB_OFF = 'lightbulb'
}

export const enum DEVICE {
  TADO = 'Tado',
  NODEMCU = 'NodeMCU',
  SONOFF = 'Sonoff'
}

export interface Sensor<T = any> {
  Name: string;
  Value?: Observable<T>;
  Topic: string;
  Device: DEVICE;
}

export interface TemperatureSensor extends Sensor<number> {
  Value: Observable<number>;
}

export interface LightSensor extends Sensor<string> {
  Value: Observable<string>;
}

export interface UiSensor<T = any> extends Sensor<T> {
  SvgIcon?: string;
}

export type UiTemperatureSensor = UiSensor & TemperatureSensor;

export interface Room {
  Name: string;
  Sensors: Sensor[];
}

// () => {
//   const data: UiTemperatureSensor = {
//     Value: 3
//   };
// }();