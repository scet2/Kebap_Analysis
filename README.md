# Kebap Analysis: Testing the Train Station Proximity Hypothesis
A spatial analysis project investigating whether kebab quality correlates with distance from train stations in Greater Copenhagen.

## Project Overview
Inspired by [this Reddit post](https://www.reddit.com/r/gis/comments/1iph0yy/the_closer_to_the_railway_station_the_less_tasty/) I decided to test it out within the Greater Copenhagen area. <br>
This project combines:
- Spatial analysis with Python
- Data extraction from QGIS 
- Data collection via Google Places API
- Interactive web map visualization

### Key Results:
- 112 kebab restaurants analyzed
- 107 train and metro stations included
- Correlation: No statistically significant relationship found (p > 0.05)
- Conclusion: The hypothesis does not hold for Greater Copenhagen

## Interactive Map
[link to map]

## Study Area Selection
I chose Greater Copenhagen for several reasons:
- Familiarity: As a resident of Denmark, I have local knowledge of the data
- Data availability: Good coverage in OpenStreetMap
- Urban diversity: Expanded from Copenhagen proper to include suburban areas for more varied density patterns.<br>
I initially begin with Copenhagen city, but the extreme density limited variability. You're almost always within walking distance to a station, which I hoped to balance out by introducing more diverse urban patterns. However all kebab places still fell within 2km of a station.<br>
Interestingly, plotting the kebab locations essentially reveals the train/metro network lines.

<table>
  <tr>  
    <td><img src="figures/stations_map.png" alt="Stations map" width="400"></td>
    <td><img src="figures/org_kebap_places.png" alt="Kebap map" width="400"></td>
  </tr>
</table>

_Distribution of train/metro stations (red) and kebab restaurants (green) across Greater Copenhagen_

## Station Filtering
Some 'lokalbane' (local railway) stations and some other stations at the study area edges were manually excluded as they provided limited additional information.

## Distance Metric
While walking distance would be more realistic, it would also be computationally expensive. Additionally, in Copenhagen's dense urban environment the Euclidean distance will highly likely provide similar numbers. The walking distance would be more precised in absolute values but the ranking of which station is closest remains consistent across metrics. And since the analysis focuses on relative proximity rather than absolute distances, Euclidean distance is appropriate and computationally efficient.

## Methodology

### Data Sources:
- Kebab restaurant locations: OpenStreetMap via QGIS + manual verification
- Metro/train station locations: OpenStreetMap via QGIS + manual verification
- Ratings: Google Places API, automated collection
- Area boundary: [data-science.dk](https://data-science.dk/)

## Analysis Pipeline

1. Used Google Places API to extract ratings for each kebab place.
2. Calculated nearest station for each kebab place using Euclidean distance.
3. Tested correlation between distance and rating with pearson and spearman correlations using a significance level of 0.05.
5. Created plots in python and interactive web map via QGIS.

## Results

<img src="figures/ratings_distance_scatter.png" alt="Scatter plot" width="600">

_Relationship between distance to nearest station (km) and Google rating. No clear pattern visible._

**Correlation Coefficients:**
- Spearman's ρ = 0.08 (p = 0.274)
- Pearson's r = 0.119 (p = 0.104)
  
**Interpretation:**
- There is essentially no meaningful correlation between distance and rating, as the correlation is very weak.
-  We fail to reject the null hypothesis of no relationship between distance and rating.
-  Any observed correlation could easily be due to random chance.
-  Neither of the two correlation metrics reached the statistical significance at 0.05 level.
-  The hypothesis remains unproven in this context.

## Limitations
- Sample size: 112 Restaurants may be insufficient to detect any effect.
- Distance range: Limited variability due to Copenhagen's density.

## Technologies Used
- Python (matplotlib, pandas, scipy, geopandas)
- QGIS
- Google Places API
- OpenStreetMap

pip install -r requirements.txt
  

