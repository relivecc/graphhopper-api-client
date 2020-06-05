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


import { VehicleProfileId } from './vehicle-profile-id';

/**
 * 
 * @export
 * @interface RouteRequest
 */
export interface RouteRequest {
    /**
     * The points for the route in an array of `[longitude,latitude]`. For instance, if you want to calculate a route from point A to B to C then you specify `points: [ [A_longitude, A_latitude], [B_longitude, B_latitude], [C_longitude, C_latitude]] 
     * @type {Array<Array<number>>}
     * @memberof RouteRequest
     */
    points?: Array<Array<number>>;
    /**
     * Optional parameter. Specifies a hint for each point in the `points` array to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.
     * @type {Array<string>}
     * @memberof RouteRequest
     */
    point_hints?: Array<string>;
    /**
     * Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`
     * @type {Array<string>}
     * @memberof RouteRequest
     */
    snap_preventions?: Array<string>;
    /**
     * 
     * @type {VehicleProfileId}
     * @memberof RouteRequest
     */
    vehicle?: VehicleProfileId;
    /**
     * The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German. 
     * @type {string}
     * @memberof RouteRequest
     */
    locale?: string;
    /**
     * If `true`, a third coordinate, the altitude, is included with all positions in the response. This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their encodings. Unless you switch off the `points_encoded` parameter, you need special code on the client side that can handle three-dimensional coordinates. A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile. 
     * @type {boolean}
     * @memberof RouteRequest
     */
    elevation?: boolean;
    /**
     * Optional parameter to retrieve path details. You can request additional details for the route: `street_name`, `time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539). 
     * @type {Array<string>}
     * @memberof RouteRequest
     */
    details?: Array<string>;
    /**
     * Normally, the calculated route will visit the points in the order you specified them. If you have more than two points, you can set this parameter to `true` and the points may be re-ordered to minimize the total travel time. Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request is more expensive. 
     * @type {boolean}
     * @memberof RouteRequest
     */
    optimize?: boolean;
    /**
     * If instructions should be calculated and returned 
     * @type {boolean}
     * @memberof RouteRequest
     */
    instructions?: boolean;
    /**
     * If the points for the route should be calculated at all. 
     * @type {boolean}
     * @memberof RouteRequest
     */
    calc_points?: boolean;
    /**
     * If `true`, the output will be formatted. 
     * @type {boolean}
     * @memberof RouteRequest
     */
    debug?: boolean;
    /**
     * Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact but requires special client code to unpack. (We provide it in our JavaScript client library!) Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`. See the description of the response format for more information. 
     * @type {boolean}
     * @memberof RouteRequest
     */
    points_encoded?: boolean;
    /**
     * Use this parameter in combination with one or more parameters from below. 
     * @type {boolean}
     * @memberof RouteRequest
     */
    ch_disable?: boolean;
    /**
     * Determines the way the \'\'best\'\' route is calculated. Default is `fastest`. Other options are `shortest` (e.g. for `vehicle=foot` or `bike`) and `short_fastest` which finds a reasonable balance between `shortest` and `fastest`. Requires `ch.disable=true`. 
     * @type {string}
     * @memberof RouteRequest
     */
    weighting?: string;
    /**
     * Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points. In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree. This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`. 
     * @type {Array<number>}
     * @memberof RouteRequest
     */
    heading?: Array<number>;
    /**
     * Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`. 
     * @type {number}
     * @memberof RouteRequest
     */
    heading_penalty?: number;
    /**
     * If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`. 
     * @type {boolean}
     * @memberof RouteRequest
     */
    pass_through?: boolean;
    /**
     * Block road access via a point with the format `latitude,longitude` or an area defined by a circle `lat,lon,radius` or a rectangle `lat1,lon1,lat2,lon2`. Separate several values with `;`. Requires `ch.disable=true`. 
     * @type {string}
     * @memberof RouteRequest
     */
    block_area?: string;
    /**
     * Specify which road classes and environments you would like to avoid. Possible values are `motorway`, `primary`, `secondary`, `tertiary`, `trunk`, `residential`, `steps`, `living_street`, `track`, `toll`, `ferry`, `tunnel`, `bridge` and `ford`. Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`. 
     * @type {string}
     * @memberof RouteRequest
     */
    avoid?: string;
    /**
     * Rather than looking for the shortest or fastest path, this lets you solve two different problems related to routing: With `round_trip`, the route will get you back to where you started. This is meant for fun (think of a bike trip), so we will add some randomness. This requires `ch.disable=true`. With `alternative_route`, we give you not one but several routes that are close to optimal, but not too similar to each other. You can control both of these features with additional parameters, see below. 
     * @type {string}
     * @memberof RouteRequest
     */
    algorithm?: RouteRequestAlgorithmEnum;
    /**
     * If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`. 
     * @type {number}
     * @memberof RouteRequest
     */
    round_trip_distance?: number;
    /**
     * If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value. 
     * @type {number}
     * @memberof RouteRequest
     */
    round_trip_seed?: number;
    /**
     * If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives. 
     * @type {number}
     * @memberof RouteRequest
     */
    alternative_route_max_paths?: number;
    /**
     * If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives. 
     * @type {number}
     * @memberof RouteRequest
     */
    alternative_route_max_weight_factor?: number;
    /**
     * If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives. 
     * @type {number}
     * @memberof RouteRequest
     */
    alternative_route_max_share_factor?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum RouteRequestAlgorithmEnum {
    RoundTrip = 'round_trip',
    AlternativeRoute = 'alternative_route'
}



