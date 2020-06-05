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
import { BadRequest } from '../model';
// @ts-ignore
import { InlineResponse404 } from '../model';
// @ts-ignore
import { InternalErrorMessage } from '../model';
// @ts-ignore
import { JobId } from '../model';
// @ts-ignore
import { Request } from '../model';
// @ts-ignore
import { Response } from '../model';
/**
 * RouteOptimizationAPIApi - axios parameter creator
 * @export
 */
export const RouteOptimizationAPIApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *  Prefer the [synchronous endpoint](#operation/solveVRP) and use this Batch Route Optimization endpoint for long running problems only. The work flow is asynchronous:  - send a POST request towards `https://graphhopper.com/api/1/vrp/optimize?key=<your_key>` and fetch the job_id. - poll the solution every 500ms until it gives `status=finished`. Do this with a GET request    towards `https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>`.         
         * @summary Batch Route Optimization Endpoint
         * @param {Request} request Request object that contains the problem to be solved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        asyncVRP: async (request: Request, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'request' is not null or undefined
            if (request === null || request === undefined) {
                throw new RequiredError('request','Required parameter request was null or undefined when calling asyncVRP.');
            }
            const localVarPath = `/vrp/optimize`;
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
            const needsSerialization = (typeof request !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(request !== undefined ? request : {}) : (request || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint returns the solution of a vehicle routing problems submitted to the [Batch Route Optimization endpoint](#operation/asyncVRP). You can fetch it with the job_id, you have been sent. 
         * @summary GET Batch Solution Endpoint
         * @param {string} jobId Request solution with jobId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSolution: async (jobId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobId' is not null or undefined
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling getSolution.');
            }
            const localVarPath = `/vrp/solution/{jobId}`
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
         *  To get started with the Route Optimization API see the [introduction](#tag/Route-Optimization-API).  The Route Optimization endpoint is used with a POST request towards `https://graphhopper.com/api/1/vrp?key=<your_key>`. Then you\'ll find the solution in the JSON response. Please note that for problems that take longer than 10 seconds a bad request error is returned. In this case please use the asynchronous [Batch Route Optimization Endpoint](#operation/asyncVRP) instead. 
         * @summary POST Route Optimization Endpoint
         * @param {Request} request Request object that contains the problem to be solved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        solveVRP: async (request: Request, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'request' is not null or undefined
            if (request === null || request === undefined) {
                throw new RequiredError('request','Required parameter request was null or undefined when calling solveVRP.');
            }
            const localVarPath = `/vrp`;
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
            const needsSerialization = (typeof request !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(request !== undefined ? request : {}) : (request || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RouteOptimizationAPIApi - functional programming interface
 * @export
 */
export const RouteOptimizationAPIApiFp = function(configuration?: Configuration) {
    return {
        /**
         *  Prefer the [synchronous endpoint](#operation/solveVRP) and use this Batch Route Optimization endpoint for long running problems only. The work flow is asynchronous:  - send a POST request towards `https://graphhopper.com/api/1/vrp/optimize?key=<your_key>` and fetch the job_id. - poll the solution every 500ms until it gives `status=finished`. Do this with a GET request    towards `https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>`.         
         * @summary Batch Route Optimization Endpoint
         * @param {Request} request Request object that contains the problem to be solved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async asyncVRP(request: Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobId>> {
            const localVarAxiosArgs = await RouteOptimizationAPIApiAxiosParamCreator(configuration).asyncVRP(request, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint returns the solution of a vehicle routing problems submitted to the [Batch Route Optimization endpoint](#operation/asyncVRP). You can fetch it with the job_id, you have been sent. 
         * @summary GET Batch Solution Endpoint
         * @param {string} jobId Request solution with jobId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSolution(jobId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await RouteOptimizationAPIApiAxiosParamCreator(configuration).getSolution(jobId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         *  To get started with the Route Optimization API see the [introduction](#tag/Route-Optimization-API).  The Route Optimization endpoint is used with a POST request towards `https://graphhopper.com/api/1/vrp?key=<your_key>`. Then you\'ll find the solution in the JSON response. Please note that for problems that take longer than 10 seconds a bad request error is returned. In this case please use the asynchronous [Batch Route Optimization Endpoint](#operation/asyncVRP) instead. 
         * @summary POST Route Optimization Endpoint
         * @param {Request} request Request object that contains the problem to be solved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async solveVRP(request: Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await RouteOptimizationAPIApiAxiosParamCreator(configuration).solveVRP(request, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RouteOptimizationAPIApi - factory interface
 * @export
 */
export const RouteOptimizationAPIApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         *  Prefer the [synchronous endpoint](#operation/solveVRP) and use this Batch Route Optimization endpoint for long running problems only. The work flow is asynchronous:  - send a POST request towards `https://graphhopper.com/api/1/vrp/optimize?key=<your_key>` and fetch the job_id. - poll the solution every 500ms until it gives `status=finished`. Do this with a GET request    towards `https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>`.         
         * @summary Batch Route Optimization Endpoint
         * @param {Request} request Request object that contains the problem to be solved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        asyncVRP(request: Request, options?: any): AxiosPromise<JobId> {
            return RouteOptimizationAPIApiFp(configuration).asyncVRP(request, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint returns the solution of a vehicle routing problems submitted to the [Batch Route Optimization endpoint](#operation/asyncVRP). You can fetch it with the job_id, you have been sent. 
         * @summary GET Batch Solution Endpoint
         * @param {string} jobId Request solution with jobId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSolution(jobId: string, options?: any): AxiosPromise<Response> {
            return RouteOptimizationAPIApiFp(configuration).getSolution(jobId, options).then((request) => request(axios, basePath));
        },
        /**
         *  To get started with the Route Optimization API see the [introduction](#tag/Route-Optimization-API).  The Route Optimization endpoint is used with a POST request towards `https://graphhopper.com/api/1/vrp?key=<your_key>`. Then you\'ll find the solution in the JSON response. Please note that for problems that take longer than 10 seconds a bad request error is returned. In this case please use the asynchronous [Batch Route Optimization Endpoint](#operation/asyncVRP) instead. 
         * @summary POST Route Optimization Endpoint
         * @param {Request} request Request object that contains the problem to be solved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        solveVRP(request: Request, options?: any): AxiosPromise<Response> {
            return RouteOptimizationAPIApiFp(configuration).solveVRP(request, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for asyncVRP operation in RouteOptimizationAPIApi.
 * @export
 * @interface RouteOptimizationAPIApiAsyncVRPRequest
 */
export interface RouteOptimizationAPIApiAsyncVRPRequest {
    /**
     * Request object that contains the problem to be solved
     * @type {Request}
     * @memberof RouteOptimizationAPIApiAsyncVRP
     */
    readonly request: Request
}

/**
 * Request parameters for getSolution operation in RouteOptimizationAPIApi.
 * @export
 * @interface RouteOptimizationAPIApiGetSolutionRequest
 */
export interface RouteOptimizationAPIApiGetSolutionRequest {
    /**
     * Request solution with jobId
     * @type {string}
     * @memberof RouteOptimizationAPIApiGetSolution
     */
    readonly jobId: string
}

/**
 * Request parameters for solveVRP operation in RouteOptimizationAPIApi.
 * @export
 * @interface RouteOptimizationAPIApiSolveVRPRequest
 */
export interface RouteOptimizationAPIApiSolveVRPRequest {
    /**
     * Request object that contains the problem to be solved
     * @type {Request}
     * @memberof RouteOptimizationAPIApiSolveVRP
     */
    readonly request: Request
}

/**
 * RouteOptimizationAPIApi - object-oriented interface
 * @export
 * @class RouteOptimizationAPIApi
 * @extends {BaseAPI}
 */
export class RouteOptimizationAPIApi extends BaseAPI {
    /**
     *  Prefer the [synchronous endpoint](#operation/solveVRP) and use this Batch Route Optimization endpoint for long running problems only. The work flow is asynchronous:  - send a POST request towards `https://graphhopper.com/api/1/vrp/optimize?key=<your_key>` and fetch the job_id. - poll the solution every 500ms until it gives `status=finished`. Do this with a GET request    towards `https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>`.         
     * @summary Batch Route Optimization Endpoint
     * @param {RouteOptimizationAPIApiAsyncVRPRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RouteOptimizationAPIApi
     */
    public asyncVRP(requestParameters: RouteOptimizationAPIApiAsyncVRPRequest, options?: any) {
        return RouteOptimizationAPIApiFp(this.configuration).asyncVRP(requestParameters.request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint returns the solution of a vehicle routing problems submitted to the [Batch Route Optimization endpoint](#operation/asyncVRP). You can fetch it with the job_id, you have been sent. 
     * @summary GET Batch Solution Endpoint
     * @param {RouteOptimizationAPIApiGetSolutionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RouteOptimizationAPIApi
     */
    public getSolution(requestParameters: RouteOptimizationAPIApiGetSolutionRequest, options?: any) {
        return RouteOptimizationAPIApiFp(this.configuration).getSolution(requestParameters.jobId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *  To get started with the Route Optimization API see the [introduction](#tag/Route-Optimization-API).  The Route Optimization endpoint is used with a POST request towards `https://graphhopper.com/api/1/vrp?key=<your_key>`. Then you\'ll find the solution in the JSON response. Please note that for problems that take longer than 10 seconds a bad request error is returned. In this case please use the asynchronous [Batch Route Optimization Endpoint](#operation/asyncVRP) instead. 
     * @summary POST Route Optimization Endpoint
     * @param {RouteOptimizationAPIApiSolveVRPRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RouteOptimizationAPIApi
     */
    public solveVRP(requestParameters: RouteOptimizationAPIApiSolveVRPRequest, options?: any) {
        return RouteOptimizationAPIApiFp(this.configuration).solveVRP(requestParameters.request, options).then((request) => request(this.axios, this.basePath));
    }
}
