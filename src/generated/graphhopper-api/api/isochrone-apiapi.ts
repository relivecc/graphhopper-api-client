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
import { IsochroneResponse } from '../model';
// @ts-ignore
import { VehicleProfileId } from '../model';
/**
 * IsochroneAPIApi - axios parameter creator
 * @export
 */
export const IsochroneAPIApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ### Example You can get an example response via:  ``` curl \"https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]\" ```  Don\'t forget to replace the placeholder with your own key.  ### Introduction ![Isochrone screenshot](./img/isochrone-example.png)  An isochrone of a location is \'\'a line connecting points at which a vehicle arrives at the same time\'\', see Wikipedia. With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.  ### Use Cases Some possible areas in which this API may be useful to you:  - real estate analysis - realtors - vehicle scheduling - geomarketing - reach of electric vehicles - transport planning - logistics (distribution and retail network planning)  ### API Clients and Examples See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone). 
         * @summary Isochrone Endpoint
         * @param {string} point Specify the start coordinate
         * @param {number} [timeLimit] Specify which time the vehicle should travel. In seconds.
         * @param {number} [distanceLimit] Specify which distance the vehicle should travel. In meters.
         * @param {VehicleProfileId} [vehicle] The vehicle profile for which the route should be calculated. 
         * @param {number} [buckets] For how many subintervals an additional polygon should be calculated.
         * @param {boolean} [reverseFlow] If &#x60;false&#x60; the flow goes from point to the polygon, if &#x60;true&#x60; the flow goes from the polygon \&quot;inside\&quot; to the point. Example use case for &#x60;false&#x60;&amp;#58; *How many potential customer can be reached within 30min travel time from your store* vs. &#x60;true&#x60;&amp;#58; *How many customers can reach your store within 30min travel time.* 
         * @param {'fastest' | 'shortest'} [weighting] Use &#x60;\&quot;shortest\&quot;&#x60; to get an isodistance line instead of an isochrone.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIsochrone: async (point: string, timeLimit?: number, distanceLimit?: number, vehicle?: VehicleProfileId, buckets?: number, reverseFlow?: boolean, weighting?: 'fastest' | 'shortest', options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'point' is not null or undefined
            if (point === null || point === undefined) {
                throw new RequiredError('point','Required parameter point was null or undefined when calling getIsochrone.');
            }
            const localVarPath = `/isochrone`;
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

            if (point !== undefined) {
                localVarQueryParameter['point'] = point;
            }

            if (timeLimit !== undefined) {
                localVarQueryParameter['time_limit'] = timeLimit;
            }

            if (distanceLimit !== undefined) {
                localVarQueryParameter['distance_limit'] = distanceLimit;
            }

            if (vehicle !== undefined) {
                localVarQueryParameter['vehicle'] = vehicle;
            }

            if (buckets !== undefined) {
                localVarQueryParameter['buckets'] = buckets;
            }

            if (reverseFlow !== undefined) {
                localVarQueryParameter['reverse_flow'] = reverseFlow;
            }

            if (weighting !== undefined) {
                localVarQueryParameter['weighting'] = weighting;
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
 * IsochroneAPIApi - functional programming interface
 * @export
 */
export const IsochroneAPIApiFp = function(configuration?: Configuration) {
    return {
        /**
         * ### Example You can get an example response via:  ``` curl \"https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]\" ```  Don\'t forget to replace the placeholder with your own key.  ### Introduction ![Isochrone screenshot](./img/isochrone-example.png)  An isochrone of a location is \'\'a line connecting points at which a vehicle arrives at the same time\'\', see Wikipedia. With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.  ### Use Cases Some possible areas in which this API may be useful to you:  - real estate analysis - realtors - vehicle scheduling - geomarketing - reach of electric vehicles - transport planning - logistics (distribution and retail network planning)  ### API Clients and Examples See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone). 
         * @summary Isochrone Endpoint
         * @param {string} point Specify the start coordinate
         * @param {number} [timeLimit] Specify which time the vehicle should travel. In seconds.
         * @param {number} [distanceLimit] Specify which distance the vehicle should travel. In meters.
         * @param {VehicleProfileId} [vehicle] The vehicle profile for which the route should be calculated. 
         * @param {number} [buckets] For how many subintervals an additional polygon should be calculated.
         * @param {boolean} [reverseFlow] If &#x60;false&#x60; the flow goes from point to the polygon, if &#x60;true&#x60; the flow goes from the polygon \&quot;inside\&quot; to the point. Example use case for &#x60;false&#x60;&amp;#58; *How many potential customer can be reached within 30min travel time from your store* vs. &#x60;true&#x60;&amp;#58; *How many customers can reach your store within 30min travel time.* 
         * @param {'fastest' | 'shortest'} [weighting] Use &#x60;\&quot;shortest\&quot;&#x60; to get an isodistance line instead of an isochrone.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getIsochrone(point: string, timeLimit?: number, distanceLimit?: number, vehicle?: VehicleProfileId, buckets?: number, reverseFlow?: boolean, weighting?: 'fastest' | 'shortest', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IsochroneResponse>> {
            const localVarAxiosArgs = await IsochroneAPIApiAxiosParamCreator(configuration).getIsochrone(point, timeLimit, distanceLimit, vehicle, buckets, reverseFlow, weighting, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * IsochroneAPIApi - factory interface
 * @export
 */
export const IsochroneAPIApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * ### Example You can get an example response via:  ``` curl \"https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]\" ```  Don\'t forget to replace the placeholder with your own key.  ### Introduction ![Isochrone screenshot](./img/isochrone-example.png)  An isochrone of a location is \'\'a line connecting points at which a vehicle arrives at the same time\'\', see Wikipedia. With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.  ### Use Cases Some possible areas in which this API may be useful to you:  - real estate analysis - realtors - vehicle scheduling - geomarketing - reach of electric vehicles - transport planning - logistics (distribution and retail network planning)  ### API Clients and Examples See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone). 
         * @summary Isochrone Endpoint
         * @param {string} point Specify the start coordinate
         * @param {number} [timeLimit] Specify which time the vehicle should travel. In seconds.
         * @param {number} [distanceLimit] Specify which distance the vehicle should travel. In meters.
         * @param {VehicleProfileId} [vehicle] The vehicle profile for which the route should be calculated. 
         * @param {number} [buckets] For how many subintervals an additional polygon should be calculated.
         * @param {boolean} [reverseFlow] If &#x60;false&#x60; the flow goes from point to the polygon, if &#x60;true&#x60; the flow goes from the polygon \&quot;inside\&quot; to the point. Example use case for &#x60;false&#x60;&amp;#58; *How many potential customer can be reached within 30min travel time from your store* vs. &#x60;true&#x60;&amp;#58; *How many customers can reach your store within 30min travel time.* 
         * @param {'fastest' | 'shortest'} [weighting] Use &#x60;\&quot;shortest\&quot;&#x60; to get an isodistance line instead of an isochrone.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIsochrone(point: string, timeLimit?: number, distanceLimit?: number, vehicle?: VehicleProfileId, buckets?: number, reverseFlow?: boolean, weighting?: 'fastest' | 'shortest', options?: any): AxiosPromise<IsochroneResponse> {
            return IsochroneAPIApiFp(configuration).getIsochrone(point, timeLimit, distanceLimit, vehicle, buckets, reverseFlow, weighting, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getIsochrone operation in IsochroneAPIApi.
 * @export
 * @interface IsochroneAPIApiGetIsochroneRequest
 */
export interface IsochroneAPIApiGetIsochroneRequest {
    /**
     * Specify the start coordinate
     * @type {string}
     * @memberof IsochroneAPIApiGetIsochrone
     */
    readonly point: string

    /**
     * Specify which time the vehicle should travel. In seconds.
     * @type {number}
     * @memberof IsochroneAPIApiGetIsochrone
     */
    readonly timeLimit?: number

    /**
     * Specify which distance the vehicle should travel. In meters.
     * @type {number}
     * @memberof IsochroneAPIApiGetIsochrone
     */
    readonly distanceLimit?: number

    /**
     * The vehicle profile for which the route should be calculated. 
     * @type {VehicleProfileId}
     * @memberof IsochroneAPIApiGetIsochrone
     */
    readonly vehicle?: VehicleProfileId

    /**
     * For how many subintervals an additional polygon should be calculated.
     * @type {number}
     * @memberof IsochroneAPIApiGetIsochrone
     */
    readonly buckets?: number

    /**
     * If &#x60;false&#x60; the flow goes from point to the polygon, if &#x60;true&#x60; the flow goes from the polygon \&quot;inside\&quot; to the point. Example use case for &#x60;false&#x60;&amp;#58; *How many potential customer can be reached within 30min travel time from your store* vs. &#x60;true&#x60;&amp;#58; *How many customers can reach your store within 30min travel time.* 
     * @type {boolean}
     * @memberof IsochroneAPIApiGetIsochrone
     */
    readonly reverseFlow?: boolean

    /**
     * Use &#x60;\&quot;shortest\&quot;&#x60; to get an isodistance line instead of an isochrone.
     * @type {'fastest' | 'shortest'}
     * @memberof IsochroneAPIApiGetIsochrone
     */
    readonly weighting?: 'fastest' | 'shortest'
}

/**
 * IsochroneAPIApi - object-oriented interface
 * @export
 * @class IsochroneAPIApi
 * @extends {BaseAPI}
 */
export class IsochroneAPIApi extends BaseAPI {
    /**
     * ### Example You can get an example response via:  ``` curl \"https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]\" ```  Don\'t forget to replace the placeholder with your own key.  ### Introduction ![Isochrone screenshot](./img/isochrone-example.png)  An isochrone of a location is \'\'a line connecting points at which a vehicle arrives at the same time\'\', see Wikipedia. With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.  ### Use Cases Some possible areas in which this API may be useful to you:  - real estate analysis - realtors - vehicle scheduling - geomarketing - reach of electric vehicles - transport planning - logistics (distribution and retail network planning)  ### API Clients and Examples See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone). 
     * @summary Isochrone Endpoint
     * @param {IsochroneAPIApiGetIsochroneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IsochroneAPIApi
     */
    public getIsochrone(requestParameters: IsochroneAPIApiGetIsochroneRequest, options?: any) {
        return IsochroneAPIApiFp(this.configuration).getIsochrone(requestParameters.point, requestParameters.timeLimit, requestParameters.distanceLimit, requestParameters.vehicle, requestParameters.buckets, requestParameters.reverseFlow, requestParameters.weighting, options).then((request) => request(this.axios, this.basePath));
    }
}
