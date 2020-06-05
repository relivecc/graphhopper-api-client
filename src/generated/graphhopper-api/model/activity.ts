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


import { ResponseAddress } from './response-address';

/**
 * 
 * @export
 * @interface Activity
 */
export interface Activity {
    /**
     * type of activity
     * @type {string}
     * @memberof Activity
     */
    type?: ActivityTypeEnum;
    /**
     * Id referring to the underlying service or shipment, i.e. the shipment or service this activity belongs to
     * @type {string}
     * @memberof Activity
     */
    id?: string;
    /**
     * Id that refers to address
     * @type {string}
     * @memberof Activity
     */
    location_id?: string;
    /**
     * 
     * @type {ResponseAddress}
     * @memberof Activity
     */
    address?: ResponseAddress;
    /**
     * Arrival time at this activity in seconds. If type is `start`, this is not available (since it makes no sense to have `arr_time` at start). However, `end_time` is available and actually means \\\"departure time\\\" at start location. It is important to note that `arr_time` does not necessarily mean \\\"start of underlying activity\\\", it solely means arrival time at activity location. If this activity has no time windows and if there are no further preparation times, `arr_time` is equal to activity start time.
     * @type {number}
     * @memberof Activity
     */
    arr_time?: number;
    /**
     * End time of and thus departure time at this activity. If type is `end`, this is not available (since it makes no sense to have an `end_time` at end) `end_time` at each activity is equal to the departure time at the activity location.
     * @type {number}
     * @memberof Activity
     */
    end_time?: number;
    /**
     * End date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`.
     * @type {string}
     * @memberof Activity
     */
    end_date_time?: string;
    /**
     * Arrival date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`.
     * @type {string}
     * @memberof Activity
     */
    arr_date_time?: string;
    /**
     * Waiting time at this activity in seconds. A waiting time can occur if the activity has at least one time window. If `arr_time` < `time_window.earliest` a waiting time of `time_window_earliest` - `arr_time` occurs.
     * @type {number}
     * @memberof Activity
     */
    waiting_time?: number;
    /**
     * preparation time at this activity in seconds
     * @type {number}
     * @memberof Activity
     */
    preparation_time?: number;
    /**
     * cumulated distance from start to this activity in m
     * @type {number}
     * @memberof Activity
     */
    distance?: number;
    /**
     * driving time of driver in seconds
     * @type {number}
     * @memberof Activity
     */
    driving_time?: number;
    /**
     * Array with size/capacity dimensions before this activity
     * @type {Array<number>}
     * @memberof Activity
     */
    load_before?: Array<number>;
    /**
     * Array with size/capacity dimensions after this activity
     * @type {Array<number>}
     * @memberof Activity
     */
    load_after?: Array<number>;
}

/**
    * @export
    * @enum {string}
    */
export enum ActivityTypeEnum {
    Start = 'start',
    End = 'end',
    Service = 'service',
    PickupShipment = 'pickupShipment',
    DeliverShipment = 'deliverShipment',
    Pickup = 'pickup',
    Delivery = 'delivery',
    Break = 'break'
}



