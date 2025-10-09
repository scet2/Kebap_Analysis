# Kebap Analysis: Testing the Train Station Proximity Hyptohesis
A spatial analysis project inverstigating wether kebab quality correlates with distance from train stations in Greater Copenhagen.

## Porject Overview
Inspired by this Reddit post,[this post][https://www.reddit.com/r/gis/comments/1iph0yy/the_closer_to_the_railway_station_the_less_tasty/](url), I decided to test it out with real data from Greater Copenhagen area. <br>
This project combines:
- Spatial analysis with QGIS and OpenStreetMap data
- Data collection via Google Places API
- Interactive web map visualization

### Key Results:
- 112 kebab restaurants analyzed
- 107 train and metro stations included
- Correlation: No statistically significant relationship found (p > 0.05)
- Conclusion: The hypothesis does not hold for Greater Copenhagen

## Interactive Map
[link to map]

## Methodolgy
### Data Sources:
- Kebab restaurant locations: OpenStreetMap via QGIS + manual verification
- Metro/train station locations: OpenStreetMap via QGIS + manual verification
- Ratings: Google Places API, automated collection
- Area boundary: [https://data-science.dk/](url)

## Analysis Pipeline

1. Used Google Places API to extract ratings for each kebab place.
2. Calculated nearest station for each kebab place using Euclidean distance.
3. Tested correlation between distance and rating with pearson and spearman correlations using a significance level of 0.05.
5. Created plots in python and interactive web map via QGIS.

## Results
**Correlation Coefficients:**
- Spearman's p = 0.08 (p = 0.274)
- Pearson's r = 0.119 (p = 0.1.04)
**Interpretation:**
- There is essentially no meaningful correlation between distance and rating, as the correlation is very weak.
- We fail to reject the null hypothesis of no relationship between distance and rating.
- Any observed correlation could easily be due to random chance.
-  Neither of the two correaltion metrics reached the statistical significance at 0.05 level. Results suggest a 'possible' weak effect that may require larger sample size to detect.
- The hypothesis remains unproven in this context.

## Limitations
- Sample size: 112 Restaurants may be insufficient to detect any effect.
- Distance range: Limited variability due to Copenhagen's denisty.
  
<details>
<summary> ## Detailed Analysis Notes </summary>

## Study Area Selection
I chose Greater Copenhagen for several reasons:
- Familiartiy: As a resident of Denmark, I have local knowledge of the data
- Data availability: Good coverage in OpenStreetMap
- Urban diversity: Expanded from Copenhagen proper to include suburbuan areas for more vaied density patterns.
I initially begin with Copenhagen city, but the extreme density limited variability. You're almost always within walking distance to a station, which I hoped to balance out by introducing more diverse urban patterns. However all kebab places still fell within 2km of a station.
Interestingly, plotting the kebab locations essentially reveals the train/metro network lines. 

## Station Filtering
Some 'lokalbane' (local railway) stations and some other stations at the study area edges were manually excluded as they provided limited additional information.

## Distance Metric
While walking distance would be more realistic, it would also be computanionally expensive. Additionally, in Copenhagen's dense urban environment the Euclidean distance will highly likely provide similar numbers. The walking distance would be more precised in absolute values, the ranking of which station is closeset remains consistent across metrics. Since the analysis focuses on relative proximity rather than absolute distances, Euclidean distance stays approptiate and computationally efficient.

## Conclusion
I didn't expect any scientific reasoning to the rating-distance (non-existing) relationship. 
- There is essentially no meaningful correlation between the two, as the spearman correlation is very close to 0.
- The p value is bigger than 0.05 meaning we fail to reject the null hypothesis that there is no linear relationship between them. Which is backed up by the pearson correlation results.
- The weak correlation could easily be due to random chance and it is NOT statistically significant.
- Neither of the two correaltion metrics reached the statistical significance at 0.05 level. Results suggest a 'possible' weak effect that may require larger sample size to detect.
- The hypothesis has failed once again. 
</details>


  

