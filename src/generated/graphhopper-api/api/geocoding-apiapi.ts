// tslint:disable
/**
 * GraphHopper Directions API
 *  With the [GraphHopper Directions API](https://www.graphhopper.com/products/) you can integrate A-to-B route planning, turn-by-turn navigation, route optimization, isochrone calculations and other tools in your application.  The GraphHopper Directions API consists of the following RESTful web services:   * [Routing API](#tag/Routing-API),  * [Route Optimization API](#tag/Route-Optimization-API),  * [Isochrone API](#tag/Isochrone-API),  * [Map Matching API](#tag/Map-Matching-API),  * [Matrix API](#tag/Matrix-API),  * [Geocoding API](#tag/Geocoding-API) and  * [Cluster API](#tag/Cluster-API).  # Explore our APIs  Read through this documentation and search for key words on the left side. To unfold detailed information about each object in the documentation, you click on e.g. `services` in the [Route Optimization documentation](#operation/solveVRP) as shown here:  ![Nested Doc](./img/nested-doc.gif)  To play and see the Route Optimization API in action try our [route editor](https://graphhopper.com/blog/2015/07/21/graphhoppers-new-route-optimization-editor/)  which available in the [dashboard](https://graphhopper.com/dashboard/). See how the Routing and Geocoding API is integrated in  our route planner website [GraphHopper Maps](https://graphhopper.com/maps) ([sources](https://github.com/graphhopper/graphhopper/tree/0.12/web/src/main/resources/assets)).  And [see below](#section/Explore-our-APIs/Insomnia) for a collection of requests for [Insomnia](https://insomnia.rest/) and [Postman](https://www.getpostman.com/). The request file contains all example requests from this documentation.  ## Get started  1. To use the GraphHopper Directions API you sign up [here](https://graphhopper.com/dashboard/#/register) and create an API key. 2. Read the documentation of the desired API part below. 3. Start using the GraphHopper Directions API. [Our API clients](#section/Explore-our-APIs/API-Clients) can speed up the integration.  To use the GraphHopper Directions API commercially, you can buy paid package [in the dashboard](https://graphhopper.com/dashboard/#/pricing).  ## Contact Us  If you have problems or questions see the following information:   * [FAQ](https://graphhopper.com/api/1/docs/FAQ/)  * [Public forum](https://discuss.graphhopper.com/c/directions-api)       * [Contact us](https://www.graphhopper.com/contact-form/)  To get informed about the newest features and development follow us at [twitter](https://twitter.com/graphhopper/) or [our blog](https://graphhopper.com/blog/).  Furthermore you can watch [this git repository](https://github.com/graphhopper/directions-api-doc) of this documentation, sign up at our [dashboard](https://graphhopper.com/dashboard/) to get the newsletter or sign up at [our forum](https://discuss.graphhopper.com/c/directions-api). Pick the channel you like most.  ## API Client Libraries  To speed up development and make coding easier, we offer the following client libraries:   * [JavaScript client](https://github.com/graphhopper/directions-api-js-client) - try the [live examples](https://graphhopper.com/api/1/examples/)  * [Others](https://github.com/graphhopper/directions-api-clients) like C#, Ruby, PHP, Python, ... automatically created for the Route Optimization API  ### Bandwidth reduction  If you create your own client, make sure it supports http/2 and gzipped responses for best speed.  If you use the Matrix or Route Optimization API and want to solve large problems, we recommend you to reduce bandwidth by [compressing your POST request](https://gist.github.com/karussell/82851e303ea7b3459b2dea01f18949f4) and specifying the header as follows: `Content-Encoding: gzip`.  ## Insomnia  To explore our APIs with [Insomnia](https://insomnia.rest/), follow these steps:  1. Open Insomnia and Import [our workspace](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/GraphHopper-Direction-API-Insomnia.json). 2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your workspace: Manage Environments -> Base Environment -> `\"api_key\": your API key` 3. Start exploring  ![Insomnia](./img/insomnia.png)  ## Postman  To explore our APIs with [Postman](https://www.getpostman.com/), follow these steps:  1. Import our [request collections](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_collection.json) as well as our [environment file](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_environment.json). 2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your environment: `\"api_key\": your API key` 3. Start exploring  ![Postman](./img/postman.png)  # Map Data and Routing Profiles  Currently, our main data source is [OpenStreetMap](https://www.openstreetmap.org). We also integrated other network data providers. This chapter gives an overview about the options you have.  ## OpenStreetMap  #### Geographical Coverage  [OpenStreetMap](https://www.openstreetmap.org) covers the entire world. If you want to convince yourself whether we can offer appropriate data for your region, please visit [GraphHopper Maps](https://graphhopper.com/maps/). You can edit and modify OpenStreetMap data if you find that important information is missing, for example, a weight restriction for a bridge. [Here](https://wiki.openstreetmap.org/wiki/Beginners%27_guide) is a beginner\'s guide that shows how to add data.  If you edited data, we usually consider your data after 1 week at latest.  #### Supported Vehicle Profiles  The Routing, Matrix and Route Optimization APIs support the following vehicle profiles:  Name       | Description           | Restrictions              | Icon -----------|:----------------------|:--------------------------|:--------------------------------------------------------- car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png) small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png) truck      | Truck like a MAN or Mercedes-Benz Actros | height=3.7m, width=2.6+0.5m, length=12m, weight=13000 + 13000 kg, hgv=yes, 3 Axes | ![truck image](https://graphhopper.com/maps/img/truck.png) scooter    | Moped mode | Fast inner city, often used for food delivery, is able to ignore certain bollards, maximum speed of roughly 50km/h | ![scooter image](https://graphhopper.com/maps/img/scooter.png) foot       | Pedestrian or walking without dangerous [SAC-scales](https://wiki.openstreetmap.org/wiki/Key:sac_scale) | foot access         | ![foot image](https://graphhopper.com/maps/img/foot.png) hike       | Pedestrian or walking with priority for more beautiful hiking tours and potentially a bit longer than `foot`. Walking duration is influenced by elevation differences.  | foot access         | ![hike image](https://graphhopper.com/maps/img/hike.png) bike       | Trekking bike avoiding hills | bike access  | ![bike image](https://graphhopper.com/maps/img/bike.png) mtb        | Mountainbike          | bike access         | ![Mountainbike image](https://graphhopper.com/maps/img/mtb.png) racingbike| Bike preferring roads | bike access         | ![racingbike image](https://graphhopper.com/maps/img/racingbike.png)  Please note:   * **turn restrictions are considered only with `ch.disable=true` and only for the Routing API**  * the free package supports only the vehicle profiles `car`, `bike` or `foot`  * up to 2 different vehicle profiles can be used in a single optimization request. The number of vehicles is unaffected and depends on your subscription.  * we offer custom vehicle profiles with different properties, different speed profiles or different access options. To find out more about custom profiles, please [contact us](https://www.graphhopper.com/contact-form/).  * a sophisticated `motorcycle` profile is available up on request. It is powered by the [Kurviger](https://kurviger.de/en) Routing API and favors curves and slopes while avoiding cities and highways.   ## TomTom  If you need to consider traffic, you can purchase the TomTom add-on.  Please note:   * currently we only offer this for our [Route Optimization API](#tag/Route-Optimization-API).  * this add-on uses the TomTom road network and historical traffic information only. Live traffic is not yet considered. Read more about [how this works](https://www.graphhopper.com/blog/2017/11/06/time-dependent-optimization/).  * additionally to our terms your end users need to accept the [TomTom Eula](https://www.graphhopper.com/tomtom-end-user-license-agreement/).  * we do *not* use the TomTom web services. We only use their data with our software.  * up to 2 different vehicle profiles can be used in a single optimization request. The number of vehicles is unaffected and depends on your subscription.   [Contact us](https://www.graphhopper.com/contact-form/) for more details.  #### Geographical Coverage  We offer  - Europe including Russia - North, Central and South America - Saudi Arabia - United Arab Emirates - South Africa - Australia  #### Supported Vehicle Profiles  Name       | Description           | Restrictions              | Icon -----------|:----------------------|:--------------------------|:--------------------------------------------------------- car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png) small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@graphhopper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GHError } from '../model';
// @ts-ignore
import { GeocodingResponse } from '../model';
/**
 * GeocodingAPIApi - axios parameter creator
 * @export
 */
export const GeocodingAPIApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *  ### Introduction  ![Geocoding Example](./img/geocoding-example.png)  _Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`). For example the conversion from `Berlin` to `52.5170365,13.3888599`.  _Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding). 
         * @summary Geocoding Endpoint
         * @param {string} [q] If you do forward geocoding, this is &#x60;required&#x60; and is a textual description of the address you are looking for.
         * @param {string} [locale] Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn\&#39;t found the default (en) is used.
         * @param {number} [limit] Specify the maximum number of results to return
         * @param {boolean} [reverse] It is &#x60;required&#x60; to be &#x60;true&#x60; if you want to do a reverse geocoding request. If it is &#x60;true&#x60;, &#x60;point&#x60; must be defined as well, and &#x60;q&#x60; must not be used.
         * @param {boolean} [debug] If &#x60;true&#x60;, the output will be formatted.
         * @param {string} [point] _Forward geocoding_: The location bias in the format \&#39;latitude,longitude\&#39; e.g. point&#x3D;45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.
         * @param {string} [provider] The provider parameter is currently under development and can fall back to &#x60;default&#x60; at any time. The intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it\&#39;s worth to compare the different providers. To try it append the &#x60;provider&#x60;parameter to the URL like &#x60;&amp;provider&#x3D;nominatim&#x60;, the result structure should be identical in all cases - if not, please report this back to us. Keep in mind that some providers do not support certain parameters or don\&#39;t return some fields, for example &#x60;osm_id&#x60; and &#x60;osm_type&#x60; are not supported by every geocoding provider. If you would like to use additional parameters of one of the providers, but it\&#39;s not available for the GraphHopper Geocoding API, yet? Please contact us.  The credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.  Currently, only the default provider and gisgraphy supports autocompletion of partial search strings.  All providers support normal \&quot;forward\&quot; geocoding and reverse geocoding via &#x60;reverse&#x3D;true&#x60;.  #### Default (&#x60;provider&#x3D;default&#x60;)  This provider returns results of our internal geocoding engine, as described above.  #### Nominatim (&#x60;provider&#x3D;nominatim&#x60;)  The GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.  In addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):  * viewbox * viewboxlbrt * bounded  #### Gisgraphy (&#x60;provider&#x3D;gisgraphy&#x60;)  This provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).  **Limitations:** The &#x60;locale&#x60; parameter is not supported. Gisgraphy does not return OSM tags or an extent.  Gisgraphy has a special autocomplete API, which you can use by adding &#x60;autocomplete&#x3D;true&#x60; (does not work with &#x60;reverse&#x3D;true&#x60;). The autocomplete API is optimized on predicting text input, but returns less information.  In addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):  * radius * country  #### NetToolKit (&#x60;provider&#x3D;nettoolkit&#x60;)  This provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).  The following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo) for more details): - &#x60;source&#x60;: User can choose which source provider to geocode the address, this value is \&quot;NetToolKit\&quot; by default - &#x60;country_code&#x60;: an iso-3166-2 country code (e.g : US) filter the results to the specify country code  **Limitations:** NetToolKit does not support the &#x60;locale&#x60; parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).  #### OpenCage Data (&#x60;provider&#x3D;opencagedata&#x60;)  This provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).  In addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):  * countrycode * bounds             
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGeocode: async (q?: string, locale?: string, limit?: number, reverse?: boolean, debug?: boolean, point?: string, provider?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/geocode`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("key")
                    : await configuration.apiKey;
                localVarQueryParameter["key"] = localVarApiKeyValue;
            }

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (reverse !== undefined) {
                localVarQueryParameter['reverse'] = reverse;
            }

            if (debug !== undefined) {
                localVarQueryParameter['debug'] = debug;
            }

            if (point !== undefined) {
                localVarQueryParameter['point'] = point;
            }

            if (provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GeocodingAPIApi - functional programming interface
 * @export
 */
export const GeocodingAPIApiFp = function(configuration?: Configuration) {
    return {
        /**
         *  ### Introduction  ![Geocoding Example](./img/geocoding-example.png)  _Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`). For example the conversion from `Berlin` to `52.5170365,13.3888599`.  _Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding). 
         * @summary Geocoding Endpoint
         * @param {string} [q] If you do forward geocoding, this is &#x60;required&#x60; and is a textual description of the address you are looking for.
         * @param {string} [locale] Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn\&#39;t found the default (en) is used.
         * @param {number} [limit] Specify the maximum number of results to return
         * @param {boolean} [reverse] It is &#x60;required&#x60; to be &#x60;true&#x60; if you want to do a reverse geocoding request. If it is &#x60;true&#x60;, &#x60;point&#x60; must be defined as well, and &#x60;q&#x60; must not be used.
         * @param {boolean} [debug] If &#x60;true&#x60;, the output will be formatted.
         * @param {string} [point] _Forward geocoding_: The location bias in the format \&#39;latitude,longitude\&#39; e.g. point&#x3D;45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.
         * @param {string} [provider] The provider parameter is currently under development and can fall back to &#x60;default&#x60; at any time. The intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it\&#39;s worth to compare the different providers. To try it append the &#x60;provider&#x60;parameter to the URL like &#x60;&amp;provider&#x3D;nominatim&#x60;, the result structure should be identical in all cases - if not, please report this back to us. Keep in mind that some providers do not support certain parameters or don\&#39;t return some fields, for example &#x60;osm_id&#x60; and &#x60;osm_type&#x60; are not supported by every geocoding provider. If you would like to use additional parameters of one of the providers, but it\&#39;s not available for the GraphHopper Geocoding API, yet? Please contact us.  The credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.  Currently, only the default provider and gisgraphy supports autocompletion of partial search strings.  All providers support normal \&quot;forward\&quot; geocoding and reverse geocoding via &#x60;reverse&#x3D;true&#x60;.  #### Default (&#x60;provider&#x3D;default&#x60;)  This provider returns results of our internal geocoding engine, as described above.  #### Nominatim (&#x60;provider&#x3D;nominatim&#x60;)  The GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.  In addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):  * viewbox * viewboxlbrt * bounded  #### Gisgraphy (&#x60;provider&#x3D;gisgraphy&#x60;)  This provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).  **Limitations:** The &#x60;locale&#x60; parameter is not supported. Gisgraphy does not return OSM tags or an extent.  Gisgraphy has a special autocomplete API, which you can use by adding &#x60;autocomplete&#x3D;true&#x60; (does not work with &#x60;reverse&#x3D;true&#x60;). The autocomplete API is optimized on predicting text input, but returns less information.  In addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):  * radius * country  #### NetToolKit (&#x60;provider&#x3D;nettoolkit&#x60;)  This provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).  The following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo) for more details): - &#x60;source&#x60;: User can choose which source provider to geocode the address, this value is \&quot;NetToolKit\&quot; by default - &#x60;country_code&#x60;: an iso-3166-2 country code (e.g : US) filter the results to the specify country code  **Limitations:** NetToolKit does not support the &#x60;locale&#x60; parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).  #### OpenCage Data (&#x60;provider&#x3D;opencagedata&#x60;)  This provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).  In addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):  * countrycode * bounds             
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGeocode(q?: string, locale?: string, limit?: number, reverse?: boolean, debug?: boolean, point?: string, provider?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GeocodingResponse>> {
            const localVarAxiosArgs = await GeocodingAPIApiAxiosParamCreator(configuration).getGeocode(q, locale, limit, reverse, debug, point, provider, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * GeocodingAPIApi - factory interface
 * @export
 */
export const GeocodingAPIApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         *  ### Introduction  ![Geocoding Example](./img/geocoding-example.png)  _Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`). For example the conversion from `Berlin` to `52.5170365,13.3888599`.  _Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding). 
         * @summary Geocoding Endpoint
         * @param {string} [q] If you do forward geocoding, this is &#x60;required&#x60; and is a textual description of the address you are looking for.
         * @param {string} [locale] Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn\&#39;t found the default (en) is used.
         * @param {number} [limit] Specify the maximum number of results to return
         * @param {boolean} [reverse] It is &#x60;required&#x60; to be &#x60;true&#x60; if you want to do a reverse geocoding request. If it is &#x60;true&#x60;, &#x60;point&#x60; must be defined as well, and &#x60;q&#x60; must not be used.
         * @param {boolean} [debug] If &#x60;true&#x60;, the output will be formatted.
         * @param {string} [point] _Forward geocoding_: The location bias in the format \&#39;latitude,longitude\&#39; e.g. point&#x3D;45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.
         * @param {string} [provider] The provider parameter is currently under development and can fall back to &#x60;default&#x60; at any time. The intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it\&#39;s worth to compare the different providers. To try it append the &#x60;provider&#x60;parameter to the URL like &#x60;&amp;provider&#x3D;nominatim&#x60;, the result structure should be identical in all cases - if not, please report this back to us. Keep in mind that some providers do not support certain parameters or don\&#39;t return some fields, for example &#x60;osm_id&#x60; and &#x60;osm_type&#x60; are not supported by every geocoding provider. If you would like to use additional parameters of one of the providers, but it\&#39;s not available for the GraphHopper Geocoding API, yet? Please contact us.  The credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.  Currently, only the default provider and gisgraphy supports autocompletion of partial search strings.  All providers support normal \&quot;forward\&quot; geocoding and reverse geocoding via &#x60;reverse&#x3D;true&#x60;.  #### Default (&#x60;provider&#x3D;default&#x60;)  This provider returns results of our internal geocoding engine, as described above.  #### Nominatim (&#x60;provider&#x3D;nominatim&#x60;)  The GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.  In addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):  * viewbox * viewboxlbrt * bounded  #### Gisgraphy (&#x60;provider&#x3D;gisgraphy&#x60;)  This provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).  **Limitations:** The &#x60;locale&#x60; parameter is not supported. Gisgraphy does not return OSM tags or an extent.  Gisgraphy has a special autocomplete API, which you can use by adding &#x60;autocomplete&#x3D;true&#x60; (does not work with &#x60;reverse&#x3D;true&#x60;). The autocomplete API is optimized on predicting text input, but returns less information.  In addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):  * radius * country  #### NetToolKit (&#x60;provider&#x3D;nettoolkit&#x60;)  This provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).  The following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo) for more details): - &#x60;source&#x60;: User can choose which source provider to geocode the address, this value is \&quot;NetToolKit\&quot; by default - &#x60;country_code&#x60;: an iso-3166-2 country code (e.g : US) filter the results to the specify country code  **Limitations:** NetToolKit does not support the &#x60;locale&#x60; parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).  #### OpenCage Data (&#x60;provider&#x3D;opencagedata&#x60;)  This provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).  In addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):  * countrycode * bounds             
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGeocode(q?: string, locale?: string, limit?: number, reverse?: boolean, debug?: boolean, point?: string, provider?: string, options?: any): AxiosPromise<GeocodingResponse> {
            return GeocodingAPIApiFp(configuration).getGeocode(q, locale, limit, reverse, debug, point, provider, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getGeocode operation in GeocodingAPIApi.
 * @export
 * @interface GeocodingAPIApiGetGeocodeRequest
 */
export interface GeocodingAPIApiGetGeocodeRequest {
    /**
     * If you do forward geocoding, this is &#x60;required&#x60; and is a textual description of the address you are looking for.
     * @type {string}
     * @memberof GeocodingAPIApiGetGeocode
     */
    readonly q?: string

    /**
     * Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn\&#39;t found the default (en) is used.
     * @type {string}
     * @memberof GeocodingAPIApiGetGeocode
     */
    readonly locale?: string

    /**
     * Specify the maximum number of results to return
     * @type {number}
     * @memberof GeocodingAPIApiGetGeocode
     */
    readonly limit?: number

    /**
     * It is &#x60;required&#x60; to be &#x60;true&#x60; if you want to do a reverse geocoding request. If it is &#x60;true&#x60;, &#x60;point&#x60; must be defined as well, and &#x60;q&#x60; must not be used.
     * @type {boolean}
     * @memberof GeocodingAPIApiGetGeocode
     */
    readonly reverse?: boolean

    /**
     * If &#x60;true&#x60;, the output will be formatted.
     * @type {boolean}
     * @memberof GeocodingAPIApiGetGeocode
     */
    readonly debug?: boolean

    /**
     * _Forward geocoding_: The location bias in the format \&#39;latitude,longitude\&#39; e.g. point&#x3D;45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.
     * @type {string}
     * @memberof GeocodingAPIApiGetGeocode
     */
    readonly point?: string

    /**
     * The provider parameter is currently under development and can fall back to &#x60;default&#x60; at any time. The intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it\&#39;s worth to compare the different providers. To try it append the &#x60;provider&#x60;parameter to the URL like &#x60;&amp;provider&#x3D;nominatim&#x60;, the result structure should be identical in all cases - if not, please report this back to us. Keep in mind that some providers do not support certain parameters or don\&#39;t return some fields, for example &#x60;osm_id&#x60; and &#x60;osm_type&#x60; are not supported by every geocoding provider. If you would like to use additional parameters of one of the providers, but it\&#39;s not available for the GraphHopper Geocoding API, yet? Please contact us.  The credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.  Currently, only the default provider and gisgraphy supports autocompletion of partial search strings.  All providers support normal \&quot;forward\&quot; geocoding and reverse geocoding via &#x60;reverse&#x3D;true&#x60;.  #### Default (&#x60;provider&#x3D;default&#x60;)  This provider returns results of our internal geocoding engine, as described above.  #### Nominatim (&#x60;provider&#x3D;nominatim&#x60;)  The GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.  In addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):  * viewbox * viewboxlbrt * bounded  #### Gisgraphy (&#x60;provider&#x3D;gisgraphy&#x60;)  This provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).  **Limitations:** The &#x60;locale&#x60; parameter is not supported. Gisgraphy does not return OSM tags or an extent.  Gisgraphy has a special autocomplete API, which you can use by adding &#x60;autocomplete&#x3D;true&#x60; (does not work with &#x60;reverse&#x3D;true&#x60;). The autocomplete API is optimized on predicting text input, but returns less information.  In addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):  * radius * country  #### NetToolKit (&#x60;provider&#x3D;nettoolkit&#x60;)  This provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).  The following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo) for more details): - &#x60;source&#x60;: User can choose which source provider to geocode the address, this value is \&quot;NetToolKit\&quot; by default - &#x60;country_code&#x60;: an iso-3166-2 country code (e.g : US) filter the results to the specify country code  **Limitations:** NetToolKit does not support the &#x60;locale&#x60; parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).  #### OpenCage Data (&#x60;provider&#x3D;opencagedata&#x60;)  This provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).  In addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):  * countrycode * bounds             
     * @type {string}
     * @memberof GeocodingAPIApiGetGeocode
     */
    readonly provider?: string
}

/**
 * GeocodingAPIApi - object-oriented interface
 * @export
 * @class GeocodingAPIApi
 * @extends {BaseAPI}
 */
export class GeocodingAPIApi extends BaseAPI {
    /**
     *  ### Introduction  ![Geocoding Example](./img/geocoding-example.png)  _Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`). For example the conversion from `Berlin` to `52.5170365,13.3888599`.  _Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding). 
     * @summary Geocoding Endpoint
     * @param {GeocodingAPIApiGetGeocodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeocodingAPIApi
     */
    public getGeocode(requestParameters: GeocodingAPIApiGetGeocodeRequest, options?: any) {
        return GeocodingAPIApiFp(this.configuration).getGeocode(requestParameters.q, requestParameters.locale, requestParameters.limit, requestParameters.reverse, requestParameters.debug, requestParameters.point, requestParameters.provider, options).then((request) => request(this.axios, this.basePath));
    }
}
