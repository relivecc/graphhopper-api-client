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
import { InfoResponse } from '../model';
// @ts-ignore
import { RouteRequest } from '../model';
// @ts-ignore
import { RouteResponse } from '../model';
// @ts-ignore
import { VehicleProfileId } from '../model';
/**
 * RoutingAPIApi - axios parameter creator
 * @export
 */
export const RoutingAPIApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The GET request is the most simple one: just specify the parameter in the URL and you are done. Can be tried directly in every browser. 
         * @summary GET Route Endpoint
         * @param {Array<string>} point The points for which the route should be calculated. Format: &#x60;[latitude,longitude]&#x60;. Specify at least an origin and a destination. Via points are possible. The maximum number depends on your plan. 
         * @param {Array<string>} [pointHint] The &#x60;point_hint&#x60; is typically a road name to which the associated &#x60;point&#x60; parameter should be snapped to. Specify no &#x60;point_hint&#x60; parameter or the same number as you have &#x60;point&#x60; parameters. 
         * @param {Array<string>} [snapPrevention] Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are &#x60;motorway&#x60;, &#x60;trunk&#x60;, &#x60;ferry&#x60;, &#x60;tunnel&#x60;, &#x60;bridge&#x60; and &#x60;ford&#x60;. Multiple values are specified like &#x60;snap_prevention&#x3D;ferry&amp;snap_prevention&#x3D;motorway&#x60;. 
         * @param {VehicleProfileId} [vehicle] The vehicle profile for which the route should be calculated. 
         * @param {string} [locale] The locale of the resulting turn instructions. E.g. &#x60;pt_PT&#x60; for Portuguese or &#x60;de&#x60; for German. 
         * @param {boolean} [elevation] If &#x60;true&#x60;, a third coordinate, the altitude, is included with all positions in the response. This changes the format of the &#x60;points&#x60; and &#x60;snapped_waypoints&#x60; fields of the response, in both their encodings. Unless you switch off the &#x60;points_encoded&#x60; parameter, you need special code on the client side that can handle three-dimensional coordinates. A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile. 
         * @param {Array<string>} [details] Optional parameter to retrieve path details. You can request additional details for the route: &#x60;street_name&#x60;,  &#x60;time&#x60;, &#x60;distance&#x60;, &#x60;max_speed&#x60;, &#x60;toll&#x60;, &#x60;road_class&#x60;, &#x60;road_class_link&#x60;, &#x60;road_access&#x60;, &#x60;road_environment&#x60;, &#x60;lanes&#x60;, and &#x60;surface&#x60;. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539). 
         * @param {boolean} [optimize] Normally, the calculated route will visit the points in the order you specified them. If you have more than two points, you can set this parameter to &#x60;true&#x60; and the points may be re-ordered to minimize the total travel time. Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request is more expensive. 
         * @param {boolean} [instructions] If instructions should be calculated and returned 
         * @param {boolean} [calcPoints] If the points for the route should be calculated at all. 
         * @param {boolean} [debug] If &#x60;true&#x60;, the output will be formatted. 
         * @param {boolean} [pointsEncoded] Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact but requires special client code to unpack. (We provide it in our JavaScript client library!) Set this parameter to &#x60;false&#x60; to switch the encoding to simple coordinate pairs like &#x60;[lon,lat]&#x60;, or &#x60;[lon,lat,elevation]&#x60;. See the description of the response format for more information. 
         * @param {boolean} [chDisable] Use this parameter in combination with one or more parameters from below. 
         * @param {string} [weighting] Determines the way the \&#39;\&#39;best\&#39;\&#39; route is calculated. Default is &#x60;fastest&#x60;. Other options are &#x60;shortest&#x60; (e.g. for &#x60;vehicle&#x3D;foot&#x60; or &#x60;bike&#x60;) and &#x60;short_fastest&#x60; which finds a reasonable balance between &#x60;shortest&#x60; and &#x60;fastest&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {Array<number>} [heading] Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points. In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree. This parameter also influences the tour generated with &#x60;algorithm&#x3D;round_trip&#x60; and forces the initial direction.  Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {number} [headingPenalty] Time penalty in seconds for not obeying a specified heading. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {boolean} [passThrough] If &#x60;true&#x60;, u-turns are avoided at via-points with regard to the &#x60;heading_penalty&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {string} [blockArea] Block road access via a point with the format &#x60;latitude,longitude&#x60; or an area defined by a circle &#x60;lat,lon,radius&#x60; or a rectangle &#x60;lat1,lon1,lat2,lon2&#x60;. Separate several values with &#x60;;&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {string} [avoid] Specify which road classes and environments you would like to avoid.  Possible values are &#x60;motorway&#x60;, &#x60;primary&#x60;, &#x60;secondary&#x60;, &#x60;tertiary&#x60;, &#x60;trunk&#x60;, &#x60;residential&#x60;, &#x60;steps&#x60;, &#x60;living_street&#x60;, &#x60;track&#x60;, &#x60;toll&#x60;, &#x60;ferry&#x60;, &#x60;tunnel&#x60;, &#x60;bridge&#x60; and &#x60;ford&#x60;. Separate several values with &#x60;;&#x60;. Obviously not all the values make sense for all vehicle profiles e.g. &#x60;bike&#x60; is already forbidden on a &#x60;motorway&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {'round_trip' | 'alternative_route'} [algorithm] Rather than looking for the shortest or fastest path, this lets you solve two different problems related to routing: With &#x60;round_trip&#x60;, the route will get you back to where you started. This is meant for fun (think of a bike trip), so we will add some randomness. With &#x60;alternative_route&#x60;, we give you not one but several routes that are close to optimal, but not too similar to each other. You can control both of these features with additional parameters, see below. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {number} [roundTripDistance] If &#x60;algorithm&#x3D;round_trip&#x60;, this parameter configures approximative length of the resulting round trip. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {number} [roundTripSeed] If &#x60;algorithm&#x3D;round_trip&#x60;, this sets the random seed. Change this to get a different tour for each value. 
         * @param {number} [alternativeRouteMaxPaths] If &#x60;algorithm&#x3D;alternative_route&#x60;, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives. 
         * @param {number} [alternativeRouteMaxWeightFactor] If &#x60;algorithm&#x3D;alternative_route&#x60;, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives. 
         * @param {number} [alternativeRouteMaxShareFactor] If &#x60;algorithm&#x3D;alternative_route&#x60;, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoute: async (point: Array<string>, pointHint?: Array<string>, snapPrevention?: Array<string>, vehicle?: VehicleProfileId, locale?: string, elevation?: boolean, details?: Array<string>, optimize?: boolean, instructions?: boolean, calcPoints?: boolean, debug?: boolean, pointsEncoded?: boolean, chDisable?: boolean, weighting?: string, heading?: Array<number>, headingPenalty?: number, passThrough?: boolean, blockArea?: string, avoid?: string, algorithm?: 'round_trip' | 'alternative_route', roundTripDistance?: number, roundTripSeed?: number, alternativeRouteMaxPaths?: number, alternativeRouteMaxWeightFactor?: number, alternativeRouteMaxShareFactor?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'point' is not null or undefined
            if (point === null || point === undefined) {
                throw new RequiredError('point','Required parameter point was null or undefined when calling getRoute.');
            }
            const localVarPath = `/route`;
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

            if (point) {
                localVarQueryParameter['point'] = point;
            }

            if (pointHint) {
                localVarQueryParameter['point_hint'] = pointHint;
            }

            if (snapPrevention) {
                localVarQueryParameter['snap_prevention'] = snapPrevention;
            }

            if (vehicle !== undefined) {
                localVarQueryParameter['vehicle'] = vehicle;
            }

            if (locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }

            if (elevation !== undefined) {
                localVarQueryParameter['elevation'] = elevation;
            }

            if (details) {
                localVarQueryParameter['details'] = details;
            }

            if (optimize !== undefined) {
                localVarQueryParameter['optimize'] = optimize;
            }

            if (instructions !== undefined) {
                localVarQueryParameter['instructions'] = instructions;
            }

            if (calcPoints !== undefined) {
                localVarQueryParameter['calc_points'] = calcPoints;
            }

            if (debug !== undefined) {
                localVarQueryParameter['debug'] = debug;
            }

            if (pointsEncoded !== undefined) {
                localVarQueryParameter['points_encoded'] = pointsEncoded;
            }

            if (chDisable !== undefined) {
                localVarQueryParameter['ch.disable'] = chDisable;
            }

            if (weighting !== undefined) {
                localVarQueryParameter['weighting'] = weighting;
            }

            if (heading) {
                localVarQueryParameter['heading'] = heading;
            }

            if (headingPenalty !== undefined) {
                localVarQueryParameter['heading_penalty'] = headingPenalty;
            }

            if (passThrough !== undefined) {
                localVarQueryParameter['pass_through'] = passThrough;
            }

            if (blockArea !== undefined) {
                localVarQueryParameter['block_area'] = blockArea;
            }

            if (avoid !== undefined) {
                localVarQueryParameter['avoid'] = avoid;
            }

            if (algorithm !== undefined) {
                localVarQueryParameter['algorithm'] = algorithm;
            }

            if (roundTripDistance !== undefined) {
                localVarQueryParameter['round_trip.distance'] = roundTripDistance;
            }

            if (roundTripSeed !== undefined) {
                localVarQueryParameter['round_trip.seed'] = roundTripSeed;
            }

            if (alternativeRouteMaxPaths !== undefined) {
                localVarQueryParameter['alternative_route.max_paths'] = alternativeRouteMaxPaths;
            }

            if (alternativeRouteMaxWeightFactor !== undefined) {
                localVarQueryParameter['alternative_route.max_weight_factor'] = alternativeRouteMaxWeightFactor;
            }

            if (alternativeRouteMaxShareFactor !== undefined) {
                localVarQueryParameter['alternative_route.max_share_factor'] = alternativeRouteMaxShareFactor;
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
        /**
         * Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started. If you are familiar with POST requests and JSON then do not hesitate to continue here.  Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly speed up the request.  To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request. The effected parameters are: `points`, `point_hints` and `snap_preventions`.  **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.  For example `point=10,11&point=20,22` will be converted to the `points` array (plural): ```json { \"points\": [[11,10], [22,20]] } ``` Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]` similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).  Example: ```bash curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/route?key=[YOUR_KEY]\" -d \'{\"elevation\":false,\"points\":[[-0.087891,51.534377],[-0.090637,51.467697]],\"vehicle\":\"car\"}\' ``` 
         * @summary POST Route Endpoint
         * @param {RouteRequest} [routeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postRoute: async (routeRequest?: RouteRequest, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/route`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("key")
                    : await configuration.apiKey;
                localVarQueryParameter["key"] = localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof routeRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(routeRequest !== undefined ? routeRequest : {}) : (routeRequest || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server. 
         * @summary Coverage information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        routeInfoGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/route/info`;
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
 * RoutingAPIApi - functional programming interface
 * @export
 */
export const RoutingAPIApiFp = function(configuration?: Configuration) {
    return {
        /**
         * The GET request is the most simple one: just specify the parameter in the URL and you are done. Can be tried directly in every browser. 
         * @summary GET Route Endpoint
         * @param {Array<string>} point The points for which the route should be calculated. Format: &#x60;[latitude,longitude]&#x60;. Specify at least an origin and a destination. Via points are possible. The maximum number depends on your plan. 
         * @param {Array<string>} [pointHint] The &#x60;point_hint&#x60; is typically a road name to which the associated &#x60;point&#x60; parameter should be snapped to. Specify no &#x60;point_hint&#x60; parameter or the same number as you have &#x60;point&#x60; parameters. 
         * @param {Array<string>} [snapPrevention] Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are &#x60;motorway&#x60;, &#x60;trunk&#x60;, &#x60;ferry&#x60;, &#x60;tunnel&#x60;, &#x60;bridge&#x60; and &#x60;ford&#x60;. Multiple values are specified like &#x60;snap_prevention&#x3D;ferry&amp;snap_prevention&#x3D;motorway&#x60;. 
         * @param {VehicleProfileId} [vehicle] The vehicle profile for which the route should be calculated. 
         * @param {string} [locale] The locale of the resulting turn instructions. E.g. &#x60;pt_PT&#x60; for Portuguese or &#x60;de&#x60; for German. 
         * @param {boolean} [elevation] If &#x60;true&#x60;, a third coordinate, the altitude, is included with all positions in the response. This changes the format of the &#x60;points&#x60; and &#x60;snapped_waypoints&#x60; fields of the response, in both their encodings. Unless you switch off the &#x60;points_encoded&#x60; parameter, you need special code on the client side that can handle three-dimensional coordinates. A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile. 
         * @param {Array<string>} [details] Optional parameter to retrieve path details. You can request additional details for the route: &#x60;street_name&#x60;,  &#x60;time&#x60;, &#x60;distance&#x60;, &#x60;max_speed&#x60;, &#x60;toll&#x60;, &#x60;road_class&#x60;, &#x60;road_class_link&#x60;, &#x60;road_access&#x60;, &#x60;road_environment&#x60;, &#x60;lanes&#x60;, and &#x60;surface&#x60;. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539). 
         * @param {boolean} [optimize] Normally, the calculated route will visit the points in the order you specified them. If you have more than two points, you can set this parameter to &#x60;true&#x60; and the points may be re-ordered to minimize the total travel time. Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request is more expensive. 
         * @param {boolean} [instructions] If instructions should be calculated and returned 
         * @param {boolean} [calcPoints] If the points for the route should be calculated at all. 
         * @param {boolean} [debug] If &#x60;true&#x60;, the output will be formatted. 
         * @param {boolean} [pointsEncoded] Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact but requires special client code to unpack. (We provide it in our JavaScript client library!) Set this parameter to &#x60;false&#x60; to switch the encoding to simple coordinate pairs like &#x60;[lon,lat]&#x60;, or &#x60;[lon,lat,elevation]&#x60;. See the description of the response format for more information. 
         * @param {boolean} [chDisable] Use this parameter in combination with one or more parameters from below. 
         * @param {string} [weighting] Determines the way the \&#39;\&#39;best\&#39;\&#39; route is calculated. Default is &#x60;fastest&#x60;. Other options are &#x60;shortest&#x60; (e.g. for &#x60;vehicle&#x3D;foot&#x60; or &#x60;bike&#x60;) and &#x60;short_fastest&#x60; which finds a reasonable balance between &#x60;shortest&#x60; and &#x60;fastest&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {Array<number>} [heading] Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points. In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree. This parameter also influences the tour generated with &#x60;algorithm&#x3D;round_trip&#x60; and forces the initial direction.  Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {number} [headingPenalty] Time penalty in seconds for not obeying a specified heading. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {boolean} [passThrough] If &#x60;true&#x60;, u-turns are avoided at via-points with regard to the &#x60;heading_penalty&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {string} [blockArea] Block road access via a point with the format &#x60;latitude,longitude&#x60; or an area defined by a circle &#x60;lat,lon,radius&#x60; or a rectangle &#x60;lat1,lon1,lat2,lon2&#x60;. Separate several values with &#x60;;&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {string} [avoid] Specify which road classes and environments you would like to avoid.  Possible values are &#x60;motorway&#x60;, &#x60;primary&#x60;, &#x60;secondary&#x60;, &#x60;tertiary&#x60;, &#x60;trunk&#x60;, &#x60;residential&#x60;, &#x60;steps&#x60;, &#x60;living_street&#x60;, &#x60;track&#x60;, &#x60;toll&#x60;, &#x60;ferry&#x60;, &#x60;tunnel&#x60;, &#x60;bridge&#x60; and &#x60;ford&#x60;. Separate several values with &#x60;;&#x60;. Obviously not all the values make sense for all vehicle profiles e.g. &#x60;bike&#x60; is already forbidden on a &#x60;motorway&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {'round_trip' | 'alternative_route'} [algorithm] Rather than looking for the shortest or fastest path, this lets you solve two different problems related to routing: With &#x60;round_trip&#x60;, the route will get you back to where you started. This is meant for fun (think of a bike trip), so we will add some randomness. With &#x60;alternative_route&#x60;, we give you not one but several routes that are close to optimal, but not too similar to each other. You can control both of these features with additional parameters, see below. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {number} [roundTripDistance] If &#x60;algorithm&#x3D;round_trip&#x60;, this parameter configures approximative length of the resulting round trip. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {number} [roundTripSeed] If &#x60;algorithm&#x3D;round_trip&#x60;, this sets the random seed. Change this to get a different tour for each value. 
         * @param {number} [alternativeRouteMaxPaths] If &#x60;algorithm&#x3D;alternative_route&#x60;, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives. 
         * @param {number} [alternativeRouteMaxWeightFactor] If &#x60;algorithm&#x3D;alternative_route&#x60;, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives. 
         * @param {number} [alternativeRouteMaxShareFactor] If &#x60;algorithm&#x3D;alternative_route&#x60;, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoute(point: Array<string>, pointHint?: Array<string>, snapPrevention?: Array<string>, vehicle?: VehicleProfileId, locale?: string, elevation?: boolean, details?: Array<string>, optimize?: boolean, instructions?: boolean, calcPoints?: boolean, debug?: boolean, pointsEncoded?: boolean, chDisable?: boolean, weighting?: string, heading?: Array<number>, headingPenalty?: number, passThrough?: boolean, blockArea?: string, avoid?: string, algorithm?: 'round_trip' | 'alternative_route', roundTripDistance?: number, roundTripSeed?: number, alternativeRouteMaxPaths?: number, alternativeRouteMaxWeightFactor?: number, alternativeRouteMaxShareFactor?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RouteResponse>> {
            const localVarAxiosArgs = await RoutingAPIApiAxiosParamCreator(configuration).getRoute(point, pointHint, snapPrevention, vehicle, locale, elevation, details, optimize, instructions, calcPoints, debug, pointsEncoded, chDisable, weighting, heading, headingPenalty, passThrough, blockArea, avoid, algorithm, roundTripDistance, roundTripSeed, alternativeRouteMaxPaths, alternativeRouteMaxWeightFactor, alternativeRouteMaxShareFactor, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started. If you are familiar with POST requests and JSON then do not hesitate to continue here.  Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly speed up the request.  To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request. The effected parameters are: `points`, `point_hints` and `snap_preventions`.  **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.  For example `point=10,11&point=20,22` will be converted to the `points` array (plural): ```json { \"points\": [[11,10], [22,20]] } ``` Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]` similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).  Example: ```bash curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/route?key=[YOUR_KEY]\" -d \'{\"elevation\":false,\"points\":[[-0.087891,51.534377],[-0.090637,51.467697]],\"vehicle\":\"car\"}\' ``` 
         * @summary POST Route Endpoint
         * @param {RouteRequest} [routeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postRoute(routeRequest?: RouteRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RouteResponse>> {
            const localVarAxiosArgs = await RoutingAPIApiAxiosParamCreator(configuration).postRoute(routeRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server. 
         * @summary Coverage information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async routeInfoGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InfoResponse>> {
            const localVarAxiosArgs = await RoutingAPIApiAxiosParamCreator(configuration).routeInfoGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RoutingAPIApi - factory interface
 * @export
 */
export const RoutingAPIApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * The GET request is the most simple one: just specify the parameter in the URL and you are done. Can be tried directly in every browser. 
         * @summary GET Route Endpoint
         * @param {Array<string>} point The points for which the route should be calculated. Format: &#x60;[latitude,longitude]&#x60;. Specify at least an origin and a destination. Via points are possible. The maximum number depends on your plan. 
         * @param {Array<string>} [pointHint] The &#x60;point_hint&#x60; is typically a road name to which the associated &#x60;point&#x60; parameter should be snapped to. Specify no &#x60;point_hint&#x60; parameter or the same number as you have &#x60;point&#x60; parameters. 
         * @param {Array<string>} [snapPrevention] Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are &#x60;motorway&#x60;, &#x60;trunk&#x60;, &#x60;ferry&#x60;, &#x60;tunnel&#x60;, &#x60;bridge&#x60; and &#x60;ford&#x60;. Multiple values are specified like &#x60;snap_prevention&#x3D;ferry&amp;snap_prevention&#x3D;motorway&#x60;. 
         * @param {VehicleProfileId} [vehicle] The vehicle profile for which the route should be calculated. 
         * @param {string} [locale] The locale of the resulting turn instructions. E.g. &#x60;pt_PT&#x60; for Portuguese or &#x60;de&#x60; for German. 
         * @param {boolean} [elevation] If &#x60;true&#x60;, a third coordinate, the altitude, is included with all positions in the response. This changes the format of the &#x60;points&#x60; and &#x60;snapped_waypoints&#x60; fields of the response, in both their encodings. Unless you switch off the &#x60;points_encoded&#x60; parameter, you need special code on the client side that can handle three-dimensional coordinates. A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile. 
         * @param {Array<string>} [details] Optional parameter to retrieve path details. You can request additional details for the route: &#x60;street_name&#x60;,  &#x60;time&#x60;, &#x60;distance&#x60;, &#x60;max_speed&#x60;, &#x60;toll&#x60;, &#x60;road_class&#x60;, &#x60;road_class_link&#x60;, &#x60;road_access&#x60;, &#x60;road_environment&#x60;, &#x60;lanes&#x60;, and &#x60;surface&#x60;. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539). 
         * @param {boolean} [optimize] Normally, the calculated route will visit the points in the order you specified them. If you have more than two points, you can set this parameter to &#x60;true&#x60; and the points may be re-ordered to minimize the total travel time. Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request is more expensive. 
         * @param {boolean} [instructions] If instructions should be calculated and returned 
         * @param {boolean} [calcPoints] If the points for the route should be calculated at all. 
         * @param {boolean} [debug] If &#x60;true&#x60;, the output will be formatted. 
         * @param {boolean} [pointsEncoded] Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact but requires special client code to unpack. (We provide it in our JavaScript client library!) Set this parameter to &#x60;false&#x60; to switch the encoding to simple coordinate pairs like &#x60;[lon,lat]&#x60;, or &#x60;[lon,lat,elevation]&#x60;. See the description of the response format for more information. 
         * @param {boolean} [chDisable] Use this parameter in combination with one or more parameters from below. 
         * @param {string} [weighting] Determines the way the \&#39;\&#39;best\&#39;\&#39; route is calculated. Default is &#x60;fastest&#x60;. Other options are &#x60;shortest&#x60; (e.g. for &#x60;vehicle&#x3D;foot&#x60; or &#x60;bike&#x60;) and &#x60;short_fastest&#x60; which finds a reasonable balance between &#x60;shortest&#x60; and &#x60;fastest&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {Array<number>} [heading] Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points. In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree. This parameter also influences the tour generated with &#x60;algorithm&#x3D;round_trip&#x60; and forces the initial direction.  Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {number} [headingPenalty] Time penalty in seconds for not obeying a specified heading. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {boolean} [passThrough] If &#x60;true&#x60;, u-turns are avoided at via-points with regard to the &#x60;heading_penalty&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {string} [blockArea] Block road access via a point with the format &#x60;latitude,longitude&#x60; or an area defined by a circle &#x60;lat,lon,radius&#x60; or a rectangle &#x60;lat1,lon1,lat2,lon2&#x60;. Separate several values with &#x60;;&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {string} [avoid] Specify which road classes and environments you would like to avoid.  Possible values are &#x60;motorway&#x60;, &#x60;primary&#x60;, &#x60;secondary&#x60;, &#x60;tertiary&#x60;, &#x60;trunk&#x60;, &#x60;residential&#x60;, &#x60;steps&#x60;, &#x60;living_street&#x60;, &#x60;track&#x60;, &#x60;toll&#x60;, &#x60;ferry&#x60;, &#x60;tunnel&#x60;, &#x60;bridge&#x60; and &#x60;ford&#x60;. Separate several values with &#x60;;&#x60;. Obviously not all the values make sense for all vehicle profiles e.g. &#x60;bike&#x60; is already forbidden on a &#x60;motorway&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {'round_trip' | 'alternative_route'} [algorithm] Rather than looking for the shortest or fastest path, this lets you solve two different problems related to routing: With &#x60;round_trip&#x60;, the route will get you back to where you started. This is meant for fun (think of a bike trip), so we will add some randomness. With &#x60;alternative_route&#x60;, we give you not one but several routes that are close to optimal, but not too similar to each other. You can control both of these features with additional parameters, see below. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {number} [roundTripDistance] If &#x60;algorithm&#x3D;round_trip&#x60;, this parameter configures approximative length of the resulting round trip. Requires &#x60;ch.disable&#x3D;true&#x60;. 
         * @param {number} [roundTripSeed] If &#x60;algorithm&#x3D;round_trip&#x60;, this sets the random seed. Change this to get a different tour for each value. 
         * @param {number} [alternativeRouteMaxPaths] If &#x60;algorithm&#x3D;alternative_route&#x60;, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives. 
         * @param {number} [alternativeRouteMaxWeightFactor] If &#x60;algorithm&#x3D;alternative_route&#x60;, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives. 
         * @param {number} [alternativeRouteMaxShareFactor] If &#x60;algorithm&#x3D;alternative_route&#x60;, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoute(point: Array<string>, pointHint?: Array<string>, snapPrevention?: Array<string>, vehicle?: VehicleProfileId, locale?: string, elevation?: boolean, details?: Array<string>, optimize?: boolean, instructions?: boolean, calcPoints?: boolean, debug?: boolean, pointsEncoded?: boolean, chDisable?: boolean, weighting?: string, heading?: Array<number>, headingPenalty?: number, passThrough?: boolean, blockArea?: string, avoid?: string, algorithm?: 'round_trip' | 'alternative_route', roundTripDistance?: number, roundTripSeed?: number, alternativeRouteMaxPaths?: number, alternativeRouteMaxWeightFactor?: number, alternativeRouteMaxShareFactor?: number, options?: any): AxiosPromise<RouteResponse> {
            return RoutingAPIApiFp(configuration).getRoute(point, pointHint, snapPrevention, vehicle, locale, elevation, details, optimize, instructions, calcPoints, debug, pointsEncoded, chDisable, weighting, heading, headingPenalty, passThrough, blockArea, avoid, algorithm, roundTripDistance, roundTripSeed, alternativeRouteMaxPaths, alternativeRouteMaxWeightFactor, alternativeRouteMaxShareFactor, options).then((request) => request(axios, basePath));
        },
        /**
         * Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started. If you are familiar with POST requests and JSON then do not hesitate to continue here.  Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly speed up the request.  To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request. The effected parameters are: `points`, `point_hints` and `snap_preventions`.  **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.  For example `point=10,11&point=20,22` will be converted to the `points` array (plural): ```json { \"points\": [[11,10], [22,20]] } ``` Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]` similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).  Example: ```bash curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/route?key=[YOUR_KEY]\" -d \'{\"elevation\":false,\"points\":[[-0.087891,51.534377],[-0.090637,51.467697]],\"vehicle\":\"car\"}\' ``` 
         * @summary POST Route Endpoint
         * @param {RouteRequest} [routeRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postRoute(routeRequest?: RouteRequest, options?: any): AxiosPromise<RouteResponse> {
            return RoutingAPIApiFp(configuration).postRoute(routeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server. 
         * @summary Coverage information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        routeInfoGet(options?: any): AxiosPromise<InfoResponse> {
            return RoutingAPIApiFp(configuration).routeInfoGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getRoute operation in RoutingAPIApi.
 * @export
 * @interface RoutingAPIApiGetRouteRequest
 */
export interface RoutingAPIApiGetRouteRequest {
    /**
     * The points for which the route should be calculated. Format: &#x60;[latitude,longitude]&#x60;. Specify at least an origin and a destination. Via points are possible. The maximum number depends on your plan. 
     * @type {Array<string>}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly point: Array<string>

    /**
     * The &#x60;point_hint&#x60; is typically a road name to which the associated &#x60;point&#x60; parameter should be snapped to. Specify no &#x60;point_hint&#x60; parameter or the same number as you have &#x60;point&#x60; parameters. 
     * @type {Array<string>}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly pointHint?: Array<string>

    /**
     * Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are &#x60;motorway&#x60;, &#x60;trunk&#x60;, &#x60;ferry&#x60;, &#x60;tunnel&#x60;, &#x60;bridge&#x60; and &#x60;ford&#x60;. Multiple values are specified like &#x60;snap_prevention&#x3D;ferry&amp;snap_prevention&#x3D;motorway&#x60;. 
     * @type {Array<string>}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly snapPrevention?: Array<string>

    /**
     * The vehicle profile for which the route should be calculated. 
     * @type {VehicleProfileId}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly vehicle?: VehicleProfileId

    /**
     * The locale of the resulting turn instructions. E.g. &#x60;pt_PT&#x60; for Portuguese or &#x60;de&#x60; for German. 
     * @type {string}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly locale?: string

    /**
     * If &#x60;true&#x60;, a third coordinate, the altitude, is included with all positions in the response. This changes the format of the &#x60;points&#x60; and &#x60;snapped_waypoints&#x60; fields of the response, in both their encodings. Unless you switch off the &#x60;points_encoded&#x60; parameter, you need special code on the client side that can handle three-dimensional coordinates. A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile. 
     * @type {boolean}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly elevation?: boolean

    /**
     * Optional parameter to retrieve path details. You can request additional details for the route: &#x60;street_name&#x60;,  &#x60;time&#x60;, &#x60;distance&#x60;, &#x60;max_speed&#x60;, &#x60;toll&#x60;, &#x60;road_class&#x60;, &#x60;road_class_link&#x60;, &#x60;road_access&#x60;, &#x60;road_environment&#x60;, &#x60;lanes&#x60;, and &#x60;surface&#x60;. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539). 
     * @type {Array<string>}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly details?: Array<string>

    /**
     * Normally, the calculated route will visit the points in the order you specified them. If you have more than two points, you can set this parameter to &#x60;true&#x60; and the points may be re-ordered to minimize the total travel time. Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request is more expensive. 
     * @type {boolean}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly optimize?: boolean

    /**
     * If instructions should be calculated and returned 
     * @type {boolean}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly instructions?: boolean

    /**
     * If the points for the route should be calculated at all. 
     * @type {boolean}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly calcPoints?: boolean

    /**
     * If &#x60;true&#x60;, the output will be formatted. 
     * @type {boolean}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly debug?: boolean

    /**
     * Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact but requires special client code to unpack. (We provide it in our JavaScript client library!) Set this parameter to &#x60;false&#x60; to switch the encoding to simple coordinate pairs like &#x60;[lon,lat]&#x60;, or &#x60;[lon,lat,elevation]&#x60;. See the description of the response format for more information. 
     * @type {boolean}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly pointsEncoded?: boolean

    /**
     * Use this parameter in combination with one or more parameters from below. 
     * @type {boolean}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly chDisable?: boolean

    /**
     * Determines the way the \&#39;\&#39;best\&#39;\&#39; route is calculated. Default is &#x60;fastest&#x60;. Other options are &#x60;shortest&#x60; (e.g. for &#x60;vehicle&#x3D;foot&#x60; or &#x60;bike&#x60;) and &#x60;short_fastest&#x60; which finds a reasonable balance between &#x60;shortest&#x60; and &#x60;fastest&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
     * @type {string}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly weighting?: string

    /**
     * Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points. In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree. This parameter also influences the tour generated with &#x60;algorithm&#x3D;round_trip&#x60; and forces the initial direction.  Requires &#x60;ch.disable&#x3D;true&#x60;. 
     * @type {Array<number>}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly heading?: Array<number>

    /**
     * Time penalty in seconds for not obeying a specified heading. Requires &#x60;ch.disable&#x3D;true&#x60;. 
     * @type {number}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly headingPenalty?: number

    /**
     * If &#x60;true&#x60;, u-turns are avoided at via-points with regard to the &#x60;heading_penalty&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
     * @type {boolean}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly passThrough?: boolean

    /**
     * Block road access via a point with the format &#x60;latitude,longitude&#x60; or an area defined by a circle &#x60;lat,lon,radius&#x60; or a rectangle &#x60;lat1,lon1,lat2,lon2&#x60;. Separate several values with &#x60;;&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
     * @type {string}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly blockArea?: string

    /**
     * Specify which road classes and environments you would like to avoid.  Possible values are &#x60;motorway&#x60;, &#x60;primary&#x60;, &#x60;secondary&#x60;, &#x60;tertiary&#x60;, &#x60;trunk&#x60;, &#x60;residential&#x60;, &#x60;steps&#x60;, &#x60;living_street&#x60;, &#x60;track&#x60;, &#x60;toll&#x60;, &#x60;ferry&#x60;, &#x60;tunnel&#x60;, &#x60;bridge&#x60; and &#x60;ford&#x60;. Separate several values with &#x60;;&#x60;. Obviously not all the values make sense for all vehicle profiles e.g. &#x60;bike&#x60; is already forbidden on a &#x60;motorway&#x60;. Requires &#x60;ch.disable&#x3D;true&#x60;. 
     * @type {string}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly avoid?: string

    /**
     * Rather than looking for the shortest or fastest path, this lets you solve two different problems related to routing: With &#x60;round_trip&#x60;, the route will get you back to where you started. This is meant for fun (think of a bike trip), so we will add some randomness. With &#x60;alternative_route&#x60;, we give you not one but several routes that are close to optimal, but not too similar to each other. You can control both of these features with additional parameters, see below. Requires &#x60;ch.disable&#x3D;true&#x60;. 
     * @type {'round_trip' | 'alternative_route'}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly algorithm?: 'round_trip' | 'alternative_route'

    /**
     * If &#x60;algorithm&#x3D;round_trip&#x60;, this parameter configures approximative length of the resulting round trip. Requires &#x60;ch.disable&#x3D;true&#x60;. 
     * @type {number}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly roundTripDistance?: number

    /**
     * If &#x60;algorithm&#x3D;round_trip&#x60;, this sets the random seed. Change this to get a different tour for each value. 
     * @type {number}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly roundTripSeed?: number

    /**
     * If &#x60;algorithm&#x3D;alternative_route&#x60;, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives. 
     * @type {number}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly alternativeRouteMaxPaths?: number

    /**
     * If &#x60;algorithm&#x3D;alternative_route&#x60;, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives. 
     * @type {number}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly alternativeRouteMaxWeightFactor?: number

    /**
     * If &#x60;algorithm&#x3D;alternative_route&#x60;, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives. 
     * @type {number}
     * @memberof RoutingAPIApiGetRoute
     */
    readonly alternativeRouteMaxShareFactor?: number
}

/**
 * Request parameters for postRoute operation in RoutingAPIApi.
 * @export
 * @interface RoutingAPIApiPostRouteRequest
 */
export interface RoutingAPIApiPostRouteRequest {
    /**
     * 
     * @type {RouteRequest}
     * @memberof RoutingAPIApiPostRoute
     */
    readonly routeRequest?: RouteRequest
}

/**
 * RoutingAPIApi - object-oriented interface
 * @export
 * @class RoutingAPIApi
 * @extends {BaseAPI}
 */
export class RoutingAPIApi extends BaseAPI {
    /**
     * The GET request is the most simple one: just specify the parameter in the URL and you are done. Can be tried directly in every browser. 
     * @summary GET Route Endpoint
     * @param {RoutingAPIApiGetRouteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutingAPIApi
     */
    public getRoute(requestParameters: RoutingAPIApiGetRouteRequest, options?: any) {
        return RoutingAPIApiFp(this.configuration).getRoute(requestParameters.point, requestParameters.pointHint, requestParameters.snapPrevention, requestParameters.vehicle, requestParameters.locale, requestParameters.elevation, requestParameters.details, requestParameters.optimize, requestParameters.instructions, requestParameters.calcPoints, requestParameters.debug, requestParameters.pointsEncoded, requestParameters.chDisable, requestParameters.weighting, requestParameters.heading, requestParameters.headingPenalty, requestParameters.passThrough, requestParameters.blockArea, requestParameters.avoid, requestParameters.algorithm, requestParameters.roundTripDistance, requestParameters.roundTripSeed, requestParameters.alternativeRouteMaxPaths, requestParameters.alternativeRouteMaxWeightFactor, requestParameters.alternativeRouteMaxShareFactor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started. If you are familiar with POST requests and JSON then do not hesitate to continue here.  Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly speed up the request.  To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request. The effected parameters are: `points`, `point_hints` and `snap_preventions`.  **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.  For example `point=10,11&point=20,22` will be converted to the `points` array (plural): ```json { \"points\": [[11,10], [22,20]] } ``` Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]` similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).  Example: ```bash curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/route?key=[YOUR_KEY]\" -d \'{\"elevation\":false,\"points\":[[-0.087891,51.534377],[-0.090637,51.467697]],\"vehicle\":\"car\"}\' ``` 
     * @summary POST Route Endpoint
     * @param {RoutingAPIApiPostRouteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutingAPIApi
     */
    public postRoute(requestParameters: RoutingAPIApiPostRouteRequest, options?: any) {
        return RoutingAPIApiFp(this.configuration).postRoute(requestParameters.routeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server. 
     * @summary Coverage information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoutingAPIApi
     */
    public routeInfoGet(options?: any) {
        return RoutingAPIApiFp(this.configuration).routeInfoGet(options).then((request) => request(this.axios, this.basePath));
    }
}
