<?php


$contents=file_get_contents("http://www.weather-forecast.com/locations/New-York/forecasts/latest");

preg_match("/3 Day Weather Forecast Summary:/i", $contents, $matches);

print_r($matches);

?>