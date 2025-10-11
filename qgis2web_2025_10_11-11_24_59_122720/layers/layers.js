ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1352584.578577, 7466660.408103, 1427404.523409, 7520627.186336]);
var wms_layers = [];


        var lyr_CartoDBPositron_0 = new ol.layer.Tile({
            'title': '',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_storkbenhavn_1 = new ol.format.GeoJSON();
var features_storkbenhavn_1 = format_storkbenhavn_1.readFeatures(json_storkbenhavn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_storkbenhavn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_storkbenhavn_1.addFeatures(features_storkbenhavn_1);
var lyr_storkbenhavn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_storkbenhavn_1, 
                style: style_storkbenhavn_1,
                popuplayertitle: 'storkøbenhavn',
                interactive: false,
                title: ''
            });
var format_KebabRestaurants_2 = new ol.format.GeoJSON();
var features_KebabRestaurants_2 = format_KebabRestaurants_2.readFeatures(json_KebabRestaurants_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KebabRestaurants_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KebabRestaurants_2.addFeatures(features_KebabRestaurants_2);
var lyr_KebabRestaurants_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KebabRestaurants_2, 
                style: style_KebabRestaurants_2,
                popuplayertitle: '',
                interactive: true,
                title: '<img src="styles/legend/KebabRestaurants_2.png" /> Kebab Restaurants'
            });
var format_Stations_3 = new ol.format.GeoJSON();
var features_Stations_3 = format_Stations_3.readFeatures(json_Stations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stations_3.addFeatures(features_Stations_3);
var lyr_Stations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stations_3, 
                style: style_Stations_3,
                popuplayertitle: '',
                interactive: true,
                title: '<img src="styles/legend/Stations_3.png" /> Stations'
            });

lyr_CartoDBPositron_0.setVisible(true);lyr_storkbenhavn_1.setVisible(true);lyr_KebabRestaurants_2.setVisible(true);lyr_Stations_3.setVisible(true);
var layersList = [lyr_CartoDBPositron_0,lyr_storkbenhavn_1,lyr_KebabRestaurants_2,lyr_Stations_3];
lyr_storkbenhavn_1.set('fieldAliases', {'kode': 'kode', 'storkreds': 'storkreds', });
lyr_KebabRestaurants_2.set('fieldAliases', {'kebap_place_name': 'Restaurant Name', 'rating': 'Rating', 'review_count': 'Review Count', 'closest_station': 'Closest Station', 'distance': 'Distance to Closest Station (m)', });
lyr_Stations_3.set('fieldAliases', {'name': 'Station Name', });
lyr_storkbenhavn_1.set('fieldImages', {'kode': 'TextEdit', 'storkreds': 'TextEdit', });
lyr_KebabRestaurants_2.set('fieldImages', {'kebap_place_name': 'TextEdit', 'rating': 'TextEdit', 'review_count': 'TextEdit', 'closest_station': 'TextEdit', 'distance': 'TextEdit', });
lyr_Stations_3.set('fieldImages', {'name': 'TextEdit', });
lyr_storkbenhavn_1.set('fieldLabels', {'kode': 'hidden field', 'storkreds': 'hidden field', });
lyr_KebabRestaurants_2.set('fieldLabels', {'kebap_place_name': 'header label - visible with data', 'rating': 'inline label - visible with data', 'review_count': 'inline label - visible with data', 'closest_station': 'inline label - visible with data', 'distance': 'inline label - visible with data', });
lyr_Stations_3.set('fieldLabels', {'name': 'header label - visible with data', });
lyr_Stations_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
