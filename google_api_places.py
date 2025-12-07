import os
from dotenv import load_dotenv
import googlemaps
import pandas as pd
import geopandas as gpd
import time

#get the api_key
load_dotenv('places_api.env')

api_key = os.getenv('KEY')
client_id = os.getenv('CLIENT_ID') #we dont need client_id actually

#calling the api
gmaps = googlemaps.Client(api_key)

#read the kebap places file
kebap = gpd.read_file('data/processed/kebap_places.geojson')

all_kebap_data = []

# Loop through each kebap place
for idx, row in kebap.iterrows():
    place_name = row['name']
    latitude = row['latitude']  # or however your lat column is named
    longitude = row['longitude']  # or however your lon column is named
    
    # Search for the specific place
    places_result = gmaps.places(
        query=place_name,
        location=(latitude, longitude),
        radius=50  # search within 50 meters
    )
    
    # Check if we got results
    if places_result['results']:
        place = places_result['results'][0]
        
        all_kebap_data.append({
            'osm_name': place_name,  # original OSM name
            'rating': place.get('rating'),
            'review_count': place.get('user_ratings_total'),
        })
    else:
        print(f"  No results found for {place_name}")
    
    time.sleep(0.1)  # Small delay 

# Convert to DataFrame
df = pd.DataFrame(all_kebap_data)

#get global average
global_avg = df['rating'].sum() / df['review_count'].sum()

#credibility constant, 25th percentile of review counts
K = df['review_count'].quantile(0.25)

#calculate prior claims
C = K* global_avg

#adjust ratings to the bayesian average
df['adjusted_rating'] = (df['review_count'] * df['rating'] + K * global_avg) / (df['review_count'] + K)

# Save
df.to_csv('data/results/kebap_with_ratings.csv', index=False)

print(f"Total kebap places: {len(df)}")