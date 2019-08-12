import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { WEATHER } from './weather-data';

@Injectable()
export class WeatherService {
 private WeatherData : Weather[] = WEATHER;
  constructor() { }

 getWeather(cityName : String) :Weather{
   for(var i=0;i<this.WeatherData.length;i++)
   {
     if(this.WeatherData[i].cityName == cityName)
        return this.WeatherData[i];
   }
 }
}
