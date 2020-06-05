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
import { JobId } from '../model';
// @ts-ignore
import { MatrixRequest } from '../model';
// @ts-ignore
import { MatrixResponse } from '../model';
// @ts-ignore
import { SymmetricalMatrixRequest } from '../model';
// @ts-ignore
import { VehicleProfileId } from '../model';
/**
 * MatrixAPIApi - axios parameter creator
 * @export
 */
export const MatrixAPIApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.  The Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):  * Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ \"job_id\": \"7ac65787-fb99-4e02-a832-2c3010c70097\" }`  * Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`  Here are some full examples via curl: ```bash $ curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]\" -d \'{\"points\":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}\' {\"job_id\":\"7ac65787-fb99-4e02-a832-2c3010c70097\"} ```  Pick the returned `job_id` and use it in the next GET requests: ```bash $ curl -X GET \"https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]\" {\"status\":\"waiting\"} ```  When the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`: ```bash $ curl -X GET \"https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]\" {\"solution\":{\"weights\":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],\"info\":{\"copyrights\":[\"GraphHopper\",\"OpenStreetMap contributors\"]}},\"status\":\"finished\"} ```  Please note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.: ```json {\"message\":\"Cannot find from_points: 1\",\"hints\":[{...}]} ``` 
         * @summary Batch Matrix Endpoint
         * @param {MatrixRequest | SymmetricalMatrixRequest} [matrixRequestSymmetricalMatrixRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        calculateMatrix: async (matrixRequestSymmetricalMatrixRequest?: MatrixRequest | SymmetricalMatrixRequest, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/matrix/calculate`;
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
            const needsSerialization = (typeof matrixRequestSymmetricalMatrixRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(matrixRequestSymmetricalMatrixRequest !== undefined ? matrixRequestSymmetricalMatrixRequest : {}) : (matrixRequestSymmetricalMatrixRequest || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient as it works out-of-the-box in the browser. If possible you should prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations and automatically gzipps the request (note that all endpoints return gzipped results). 
         * @summary GET Matrix Endpoint
         * @param {Array<string>} [point] Specify multiple points in &#x60;latitude,longitude&#x60; for which the weight-, route-, time- or distance-matrix should be calculated. In this case the starts are identical to the destinations. If there are N points, then NxN entries will be calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with from_point or to_point.
         * @param {Array<string>} [fromPoint] The starting points for the routes in &#x60;latitude,longitude&#x60;. E.g. if you want to calculate the three routes A-&amp;gt;1, A-&amp;gt;2, A-&amp;gt;3 then you have one from_point parameter and three to_point parameters.
         * @param {Array<string>} [toPoint] The destination points for the routes in &#x60;latitude,longitude&#x60;.
         * @param {Array<string>} [pointHint] Optional parameter. Specifies a hint for each &#x60;point&#x60; parameter to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.
         * @param {Array<string>} [fromPointHint] For the from_point parameter. See point_hint
         * @param {Array<string>} [toPointHint] For the to_point parameter. See point_hint
         * @param {Array<string>} [snapPrevention] Optional parameter to avoid snapping to a certain road class or road environment. Current supported values &#x60;motorway&#x60;, &#x60;trunk&#x60;, &#x60;ferry&#x60;, &#x60;tunnel&#x60;, &#x60;bridge&#x60; and &#x60;ford&#x60;. Multiple values are specified like &#x60;snap_prevention&#x3D;ferry&amp;snap_prevention&#x3D;motorway&#x60; 
         * @param {Array<string>} [outArray] Specifies which arrays should be included in the response. Specify one or more of the following options \&#39;weights\&#39;, \&#39;times\&#39;, \&#39;distances\&#39;. To specify more than one array use e.g. out_array&#x3D;times&amp;out_array&#x3D;distances. The units of the entries of distances are meters, of times are seconds and of weights is arbitrary and it can differ for different vehicles or versions of this API.
         * @param {VehicleProfileId} [vehicle] The vehicle profile for which the matrix should be calculated.
         * @param {boolean} [failFast] Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to &#x60;false&#x60; the time/weight/distance matrix will be calculated for all valid points and contain the &#x60;null&#x60; value for all entries that could not be calculated. The &#x60;hint&#x60; field of the response will also contain additional information about what went wrong (see its documentation).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMatrix: async (point?: Array<string>, fromPoint?: Array<string>, toPoint?: Array<string>, pointHint?: Array<string>, fromPointHint?: Array<string>, toPointHint?: Array<string>, snapPrevention?: Array<string>, outArray?: Array<string>, vehicle?: VehicleProfileId, failFast?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/matrix`;
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

            if (fromPoint) {
                localVarQueryParameter['from_point'] = fromPoint;
            }

            if (toPoint) {
                localVarQueryParameter['to_point'] = toPoint;
            }

            if (pointHint) {
                localVarQueryParameter['point_hint'] = pointHint;
            }

            if (fromPointHint) {
                localVarQueryParameter['from_point_hint'] = fromPointHint;
            }

            if (toPointHint) {
                localVarQueryParameter['to_point_hint'] = toPointHint;
            }

            if (snapPrevention) {
                localVarQueryParameter['snap_prevention'] = snapPrevention;
            }

            if (outArray) {
                localVarQueryParameter['out_array'] = outArray;
            }

            if (vehicle !== undefined) {
                localVarQueryParameter['vehicle'] = vehicle;
            }

            if (failFast !== undefined) {
                localVarQueryParameter['fail_fast'] = failFast;
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
         * This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent. 
         * @summary GET Batch Matrix Endpoint
         * @param {string} jobId Request solution with jobId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMatrixSolution: async (jobId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobId' is not null or undefined
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling getMatrixSolution.');
            }
            const localVarPath = `/matrix/solution/{jobId}`
                .replace(`{${"jobId"}}`, encodeURIComponent(String(jobId)));
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
        /**
         *  The [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request. In those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key. Both request scenarios are identical except that all singular parameter names are named as their plural for a POST request. The effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters please refer to the [guide of the GET endpoint](#operation/getMatrix).  **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.  For example `point=10,11&point=20,22` will be converted to the following JSON `points` array: ```json { \"points\": [[11,10], [22,20]] } ``` Note that also the order changes to `[longitude,latitude]` similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).  Example: ```bash curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]\" -d \'{\"elevation\":false,\"out_arrays\":[\"weights\"],\"from_points\":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],\"to_points\":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],\"vehicle\":\"car\"}\' ``` 
         * @summary POST Matrix Endpoint
         * @param {MatrixRequest | SymmetricalMatrixRequest} [matrixRequestSymmetricalMatrixRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMatrix: async (matrixRequestSymmetricalMatrixRequest?: MatrixRequest | SymmetricalMatrixRequest, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/matrix`;
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
            const needsSerialization = (typeof matrixRequestSymmetricalMatrixRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(matrixRequestSymmetricalMatrixRequest !== undefined ? matrixRequestSymmetricalMatrixRequest : {}) : (matrixRequestSymmetricalMatrixRequest || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MatrixAPIApi - functional programming interface
 * @export
 */
export const MatrixAPIApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.  The Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):  * Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ \"job_id\": \"7ac65787-fb99-4e02-a832-2c3010c70097\" }`  * Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`  Here are some full examples via curl: ```bash $ curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]\" -d \'{\"points\":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}\' {\"job_id\":\"7ac65787-fb99-4e02-a832-2c3010c70097\"} ```  Pick the returned `job_id` and use it in the next GET requests: ```bash $ curl -X GET \"https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]\" {\"status\":\"waiting\"} ```  When the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`: ```bash $ curl -X GET \"https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]\" {\"solution\":{\"weights\":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],\"info\":{\"copyrights\":[\"GraphHopper\",\"OpenStreetMap contributors\"]}},\"status\":\"finished\"} ```  Please note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.: ```json {\"message\":\"Cannot find from_points: 1\",\"hints\":[{...}]} ``` 
         * @summary Batch Matrix Endpoint
         * @param {MatrixRequest | SymmetricalMatrixRequest} [matrixRequestSymmetricalMatrixRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async calculateMatrix(matrixRequestSymmetricalMatrixRequest?: MatrixRequest | SymmetricalMatrixRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobId>> {
            const localVarAxiosArgs = await MatrixAPIApiAxiosParamCreator(configuration).calculateMatrix(matrixRequestSymmetricalMatrixRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient as it works out-of-the-box in the browser. If possible you should prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations and automatically gzipps the request (note that all endpoints return gzipped results). 
         * @summary GET Matrix Endpoint
         * @param {Array<string>} [point] Specify multiple points in &#x60;latitude,longitude&#x60; for which the weight-, route-, time- or distance-matrix should be calculated. In this case the starts are identical to the destinations. If there are N points, then NxN entries will be calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with from_point or to_point.
         * @param {Array<string>} [fromPoint] The starting points for the routes in &#x60;latitude,longitude&#x60;. E.g. if you want to calculate the three routes A-&amp;gt;1, A-&amp;gt;2, A-&amp;gt;3 then you have one from_point parameter and three to_point parameters.
         * @param {Array<string>} [toPoint] The destination points for the routes in &#x60;latitude,longitude&#x60;.
         * @param {Array<string>} [pointHint] Optional parameter. Specifies a hint for each &#x60;point&#x60; parameter to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.
         * @param {Array<string>} [fromPointHint] For the from_point parameter. See point_hint
         * @param {Array<string>} [toPointHint] For the to_point parameter. See point_hint
         * @param {Array<string>} [snapPrevention] Optional parameter to avoid snapping to a certain road class or road environment. Current supported values &#x60;motorway&#x60;, &#x60;trunk&#x60;, &#x60;ferry&#x60;, &#x60;tunnel&#x60;, &#x60;bridge&#x60; and &#x60;ford&#x60;. Multiple values are specified like &#x60;snap_prevention&#x3D;ferry&amp;snap_prevention&#x3D;motorway&#x60; 
         * @param {Array<string>} [outArray] Specifies which arrays should be included in the response. Specify one or more of the following options \&#39;weights\&#39;, \&#39;times\&#39;, \&#39;distances\&#39;. To specify more than one array use e.g. out_array&#x3D;times&amp;out_array&#x3D;distances. The units of the entries of distances are meters, of times are seconds and of weights is arbitrary and it can differ for different vehicles or versions of this API.
         * @param {VehicleProfileId} [vehicle] The vehicle profile for which the matrix should be calculated.
         * @param {boolean} [failFast] Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to &#x60;false&#x60; the time/weight/distance matrix will be calculated for all valid points and contain the &#x60;null&#x60; value for all entries that could not be calculated. The &#x60;hint&#x60; field of the response will also contain additional information about what went wrong (see its documentation).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMatrix(point?: Array<string>, fromPoint?: Array<string>, toPoint?: Array<string>, pointHint?: Array<string>, fromPointHint?: Array<string>, toPointHint?: Array<string>, snapPrevention?: Array<string>, outArray?: Array<string>, vehicle?: VehicleProfileId, failFast?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MatrixResponse>> {
            const localVarAxiosArgs = await MatrixAPIApiAxiosParamCreator(configuration).getMatrix(point, fromPoint, toPoint, pointHint, fromPointHint, toPointHint, snapPrevention, outArray, vehicle, failFast, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent. 
         * @summary GET Batch Matrix Endpoint
         * @param {string} jobId Request solution with jobId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMatrixSolution(jobId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MatrixResponse>> {
            const localVarAxiosArgs = await MatrixAPIApiAxiosParamCreator(configuration).getMatrixSolution(jobId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *  The [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request. In those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key. Both request scenarios are identical except that all singular parameter names are named as their plural for a POST request. The effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters please refer to the [guide of the GET endpoint](#operation/getMatrix).  **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.  For example `point=10,11&point=20,22` will be converted to the following JSON `points` array: ```json { \"points\": [[11,10], [22,20]] } ``` Note that also the order changes to `[longitude,latitude]` similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).  Example: ```bash curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]\" -d \'{\"elevation\":false,\"out_arrays\":[\"weights\"],\"from_points\":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],\"to_points\":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],\"vehicle\":\"car\"}\' ``` 
         * @summary POST Matrix Endpoint
         * @param {MatrixRequest | SymmetricalMatrixRequest} [matrixRequestSymmetricalMatrixRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postMatrix(matrixRequestSymmetricalMatrixRequest?: MatrixRequest | SymmetricalMatrixRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MatrixResponse>> {
            const localVarAxiosArgs = await MatrixAPIApiAxiosParamCreator(configuration).postMatrix(matrixRequestSymmetricalMatrixRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MatrixAPIApi - factory interface
 * @export
 */
export const MatrixAPIApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.  The Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):  * Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ \"job_id\": \"7ac65787-fb99-4e02-a832-2c3010c70097\" }`  * Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`  Here are some full examples via curl: ```bash $ curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]\" -d \'{\"points\":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}\' {\"job_id\":\"7ac65787-fb99-4e02-a832-2c3010c70097\"} ```  Pick the returned `job_id` and use it in the next GET requests: ```bash $ curl -X GET \"https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]\" {\"status\":\"waiting\"} ```  When the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`: ```bash $ curl -X GET \"https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]\" {\"solution\":{\"weights\":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],\"info\":{\"copyrights\":[\"GraphHopper\",\"OpenStreetMap contributors\"]}},\"status\":\"finished\"} ```  Please note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.: ```json {\"message\":\"Cannot find from_points: 1\",\"hints\":[{...}]} ``` 
         * @summary Batch Matrix Endpoint
         * @param {MatrixRequest | SymmetricalMatrixRequest} [matrixRequestSymmetricalMatrixRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        calculateMatrix(matrixRequestSymmetricalMatrixRequest?: MatrixRequest | SymmetricalMatrixRequest, options?: any): AxiosPromise<JobId> {
            return MatrixAPIApiFp(configuration).calculateMatrix(matrixRequestSymmetricalMatrixRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient as it works out-of-the-box in the browser. If possible you should prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations and automatically gzipps the request (note that all endpoints return gzipped results). 
         * @summary GET Matrix Endpoint
         * @param {Array<string>} [point] Specify multiple points in &#x60;latitude,longitude&#x60; for which the weight-, route-, time- or distance-matrix should be calculated. In this case the starts are identical to the destinations. If there are N points, then NxN entries will be calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with from_point or to_point.
         * @param {Array<string>} [fromPoint] The starting points for the routes in &#x60;latitude,longitude&#x60;. E.g. if you want to calculate the three routes A-&amp;gt;1, A-&amp;gt;2, A-&amp;gt;3 then you have one from_point parameter and three to_point parameters.
         * @param {Array<string>} [toPoint] The destination points for the routes in &#x60;latitude,longitude&#x60;.
         * @param {Array<string>} [pointHint] Optional parameter. Specifies a hint for each &#x60;point&#x60; parameter to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.
         * @param {Array<string>} [fromPointHint] For the from_point parameter. See point_hint
         * @param {Array<string>} [toPointHint] For the to_point parameter. See point_hint
         * @param {Array<string>} [snapPrevention] Optional parameter to avoid snapping to a certain road class or road environment. Current supported values &#x60;motorway&#x60;, &#x60;trunk&#x60;, &#x60;ferry&#x60;, &#x60;tunnel&#x60;, &#x60;bridge&#x60; and &#x60;ford&#x60;. Multiple values are specified like &#x60;snap_prevention&#x3D;ferry&amp;snap_prevention&#x3D;motorway&#x60; 
         * @param {Array<string>} [outArray] Specifies which arrays should be included in the response. Specify one or more of the following options \&#39;weights\&#39;, \&#39;times\&#39;, \&#39;distances\&#39;. To specify more than one array use e.g. out_array&#x3D;times&amp;out_array&#x3D;distances. The units of the entries of distances are meters, of times are seconds and of weights is arbitrary and it can differ for different vehicles or versions of this API.
         * @param {VehicleProfileId} [vehicle] The vehicle profile for which the matrix should be calculated.
         * @param {boolean} [failFast] Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to &#x60;false&#x60; the time/weight/distance matrix will be calculated for all valid points and contain the &#x60;null&#x60; value for all entries that could not be calculated. The &#x60;hint&#x60; field of the response will also contain additional information about what went wrong (see its documentation).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMatrix(point?: Array<string>, fromPoint?: Array<string>, toPoint?: Array<string>, pointHint?: Array<string>, fromPointHint?: Array<string>, toPointHint?: Array<string>, snapPrevention?: Array<string>, outArray?: Array<string>, vehicle?: VehicleProfileId, failFast?: boolean, options?: any): AxiosPromise<MatrixResponse> {
            return MatrixAPIApiFp(configuration).getMatrix(point, fromPoint, toPoint, pointHint, fromPointHint, toPointHint, snapPrevention, outArray, vehicle, failFast, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent. 
         * @summary GET Batch Matrix Endpoint
         * @param {string} jobId Request solution with jobId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMatrixSolution(jobId: string, options?: any): AxiosPromise<MatrixResponse> {
            return MatrixAPIApiFp(configuration).getMatrixSolution(jobId, options).then((request) => request(axios, basePath));
        },
        /**
         *  The [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request. In those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key. Both request scenarios are identical except that all singular parameter names are named as their plural for a POST request. The effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters please refer to the [guide of the GET endpoint](#operation/getMatrix).  **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.  For example `point=10,11&point=20,22` will be converted to the following JSON `points` array: ```json { \"points\": [[11,10], [22,20]] } ``` Note that also the order changes to `[longitude,latitude]` similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).  Example: ```bash curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]\" -d \'{\"elevation\":false,\"out_arrays\":[\"weights\"],\"from_points\":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],\"to_points\":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],\"vehicle\":\"car\"}\' ``` 
         * @summary POST Matrix Endpoint
         * @param {MatrixRequest | SymmetricalMatrixRequest} [matrixRequestSymmetricalMatrixRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMatrix(matrixRequestSymmetricalMatrixRequest?: MatrixRequest | SymmetricalMatrixRequest, options?: any): AxiosPromise<MatrixResponse> {
            return MatrixAPIApiFp(configuration).postMatrix(matrixRequestSymmetricalMatrixRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for calculateMatrix operation in MatrixAPIApi.
 * @export
 * @interface MatrixAPIApiCalculateMatrixRequest
 */
export interface MatrixAPIApiCalculateMatrixRequest {
    /**
     * 
     * @type {MatrixRequest | SymmetricalMatrixRequest}
     * @memberof MatrixAPIApiCalculateMatrix
     */
    readonly matrixRequestSymmetricalMatrixRequest?: MatrixRequest | SymmetricalMatrixRequest
}

/**
 * Request parameters for getMatrix operation in MatrixAPIApi.
 * @export
 * @interface MatrixAPIApiGetMatrixRequest
 */
export interface MatrixAPIApiGetMatrixRequest {
    /**
     * Specify multiple points in &#x60;latitude,longitude&#x60; for which the weight-, route-, time- or distance-matrix should be calculated. In this case the starts are identical to the destinations. If there are N points, then NxN entries will be calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with from_point or to_point.
     * @type {Array<string>}
     * @memberof MatrixAPIApiGetMatrix
     */
    readonly point?: Array<string>

    /**
     * The starting points for the routes in &#x60;latitude,longitude&#x60;. E.g. if you want to calculate the three routes A-&amp;gt;1, A-&amp;gt;2, A-&amp;gt;3 then you have one from_point parameter and three to_point parameters.
     * @type {Array<string>}
     * @memberof MatrixAPIApiGetMatrix
     */
    readonly fromPoint?: Array<string>

    /**
     * The destination points for the routes in &#x60;latitude,longitude&#x60;.
     * @type {Array<string>}
     * @memberof MatrixAPIApiGetMatrix
     */
    readonly toPoint?: Array<string>

    /**
     * Optional parameter. Specifies a hint for each &#x60;point&#x60; parameter to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.
     * @type {Array<string>}
     * @memberof MatrixAPIApiGetMatrix
     */
    readonly pointHint?: Array<string>

    /**
     * For the from_point parameter. See point_hint
     * @type {Array<string>}
     * @memberof MatrixAPIApiGetMatrix
     */
    readonly fromPointHint?: Array<string>

    /**
     * For the to_point parameter. See point_hint
     * @type {Array<string>}
     * @memberof MatrixAPIApiGetMatrix
     */
    readonly toPointHint?: Array<string>

    /**
     * Optional parameter to avoid snapping to a certain road class or road environment. Current supported values &#x60;motorway&#x60;, &#x60;trunk&#x60;, &#x60;ferry&#x60;, &#x60;tunnel&#x60;, &#x60;bridge&#x60; and &#x60;ford&#x60;. Multiple values are specified like &#x60;snap_prevention&#x3D;ferry&amp;snap_prevention&#x3D;motorway&#x60; 
     * @type {Array<string>}
     * @memberof MatrixAPIApiGetMatrix
     */
    readonly snapPrevention?: Array<string>

    /**
     * Specifies which arrays should be included in the response. Specify one or more of the following options \&#39;weights\&#39;, \&#39;times\&#39;, \&#39;distances\&#39;. To specify more than one array use e.g. out_array&#x3D;times&amp;out_array&#x3D;distances. The units of the entries of distances are meters, of times are seconds and of weights is arbitrary and it can differ for different vehicles or versions of this API.
     * @type {Array<string>}
     * @memberof MatrixAPIApiGetMatrix
     */
    readonly outArray?: Array<string>

    /**
     * The vehicle profile for which the matrix should be calculated.
     * @type {VehicleProfileId}
     * @memberof MatrixAPIApiGetMatrix
     */
    readonly vehicle?: VehicleProfileId

    /**
     * Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to &#x60;false&#x60; the time/weight/distance matrix will be calculated for all valid points and contain the &#x60;null&#x60; value for all entries that could not be calculated. The &#x60;hint&#x60; field of the response will also contain additional information about what went wrong (see its documentation).
     * @type {boolean}
     * @memberof MatrixAPIApiGetMatrix
     */
    readonly failFast?: boolean
}

/**
 * Request parameters for getMatrixSolution operation in MatrixAPIApi.
 * @export
 * @interface MatrixAPIApiGetMatrixSolutionRequest
 */
export interface MatrixAPIApiGetMatrixSolutionRequest {
    /**
     * Request solution with jobId
     * @type {string}
     * @memberof MatrixAPIApiGetMatrixSolution
     */
    readonly jobId: string
}

/**
 * Request parameters for postMatrix operation in MatrixAPIApi.
 * @export
 * @interface MatrixAPIApiPostMatrixRequest
 */
export interface MatrixAPIApiPostMatrixRequest {
    /**
     * 
     * @type {MatrixRequest | SymmetricalMatrixRequest}
     * @memberof MatrixAPIApiPostMatrix
     */
    readonly matrixRequestSymmetricalMatrixRequest?: MatrixRequest | SymmetricalMatrixRequest
}

/**
 * MatrixAPIApi - object-oriented interface
 * @export
 * @class MatrixAPIApi
 * @extends {BaseAPI}
 */
export class MatrixAPIApi extends BaseAPI {
    /**
     * Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.  The Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):  * Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ \"job_id\": \"7ac65787-fb99-4e02-a832-2c3010c70097\" }`  * Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`  Here are some full examples via curl: ```bash $ curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]\" -d \'{\"points\":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}\' {\"job_id\":\"7ac65787-fb99-4e02-a832-2c3010c70097\"} ```  Pick the returned `job_id` and use it in the next GET requests: ```bash $ curl -X GET \"https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]\" {\"status\":\"waiting\"} ```  When the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`: ```bash $ curl -X GET \"https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]\" {\"solution\":{\"weights\":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],\"info\":{\"copyrights\":[\"GraphHopper\",\"OpenStreetMap contributors\"]}},\"status\":\"finished\"} ```  Please note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.: ```json {\"message\":\"Cannot find from_points: 1\",\"hints\":[{...}]} ``` 
     * @summary Batch Matrix Endpoint
     * @param {MatrixAPIApiCalculateMatrixRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MatrixAPIApi
     */
    public calculateMatrix(requestParameters: MatrixAPIApiCalculateMatrixRequest, options?: any) {
        return MatrixAPIApiFp(this.configuration).calculateMatrix(requestParameters.matrixRequestSymmetricalMatrixRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient as it works out-of-the-box in the browser. If possible you should prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations and automatically gzipps the request (note that all endpoints return gzipped results). 
     * @summary GET Matrix Endpoint
     * @param {MatrixAPIApiGetMatrixRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MatrixAPIApi
     */
    public getMatrix(requestParameters: MatrixAPIApiGetMatrixRequest, options?: any) {
        return MatrixAPIApiFp(this.configuration).getMatrix(requestParameters.point, requestParameters.fromPoint, requestParameters.toPoint, requestParameters.pointHint, requestParameters.fromPointHint, requestParameters.toPointHint, requestParameters.snapPrevention, requestParameters.outArray, requestParameters.vehicle, requestParameters.failFast, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent. 
     * @summary GET Batch Matrix Endpoint
     * @param {MatrixAPIApiGetMatrixSolutionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MatrixAPIApi
     */
    public getMatrixSolution(requestParameters: MatrixAPIApiGetMatrixSolutionRequest, options?: any) {
        return MatrixAPIApiFp(this.configuration).getMatrixSolution(requestParameters.jobId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *  The [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request. In those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key. Both request scenarios are identical except that all singular parameter names are named as their plural for a POST request. The effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters please refer to the [guide of the GET endpoint](#operation/getMatrix).  **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.  For example `point=10,11&point=20,22` will be converted to the following JSON `points` array: ```json { \"points\": [[11,10], [22,20]] } ``` Note that also the order changes to `[longitude,latitude]` similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).  Example: ```bash curl -X POST -H \"Content-Type: application/json\" \"https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]\" -d \'{\"elevation\":false,\"out_arrays\":[\"weights\"],\"from_points\":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],\"to_points\":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],\"vehicle\":\"car\"}\' ``` 
     * @summary POST Matrix Endpoint
     * @param {MatrixAPIApiPostMatrixRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MatrixAPIApi
     */
    public postMatrix(requestParameters: MatrixAPIApiPostMatrixRequest, options?: any) {
        return MatrixAPIApiFp(this.configuration).postMatrix(requestParameters.matrixRequestSymmetricalMatrixRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
