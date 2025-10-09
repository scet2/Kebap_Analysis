# Kebap Analysis
Testing the hypothesis: 'The closer to the train station, the worse the kebab' a Greater Copenhagen case 'study'.

## Overview
Inspired by this Reddit post,[https://www.reddit.com/r/gis/comments/1iph0yy/the_closer_to_the_railway_station_the_less_tasty/](url)I decided to test this hyptohesis with real data from Greater Copenhagen. This project combines spatial analysis with some statistical testing for evaluation.

### Key Stats:
- 112 kebab restaurants and 107 train+metro stations analyzed.
- Correlation analysis + interactive web map
- Conclusion: No statistically significant relationship found.

## Interactive Map

## Methodolgy
### Data Collection:
- Restaurant locations: OpenStreetMap via QGIS + manual verification
- Station locations: OpenStreetMap via QGIS + manual verification
- Ratings: Google Places API
- Area boundary: [https://data-science.dk/](url)

### Analysis:
1. Used Google Places API to extract ratings for each kebab place.
2. Calculated nearest station for each kebab place using Euclidean distance.
3. Tested correlation between distance and rating with pearson and spearman correlations +  visualized by a scatter plot.
   Methods: Spearman(rank) and Pearson correlation, significanca level: 0.05
5. Created interactive web map via QGIS.

<details>
<summary> A more detailed look on the analysis </summary>
Study Area Selection:
Living in Denmark myself I wanted to try out the hypothesis in a familiar place. Initially, only Copenhagen was chosen but it felt too limited and I decided to add the outher Copenhagen to the analysis as well. Which did not only give me a greater area to work with but also a little more versatility in the density range. 
  Copenhagen is a very dense city and there are stations (metro or train) everywhere. You're almost always withing walking distances to a station, thus it is not unsurprising that the kebab places are as well. I hope to balance this out by pulling in the outher (more urban i guess) areas. That did not work out as well as I hoped, considering all kebab place came out to be within 2 km away from a station. 
  We can almost figure out the transportation lines by following the kebab places.
  
Station Filtering:
  I had to manually check some of the 'lokal bane' stations as they were all at the edge of the area and did not really provide additional information.

Distance Metric:
As good as walking distance would have been, it would also be computanionally expensive for this big of an area, and such silly project.
Additionally, in Copenhagen's dense urban environment the Euclidean distance will highly likely provide similar numbers. While the walking distance would be more precised in absolute values, the ranking of which station is closeset remains consistent across metrics. Since the analysis focuses on relative proximity rather than absolute distances, Euclidean distance stays approptiate and computationally efficient.

</details>

