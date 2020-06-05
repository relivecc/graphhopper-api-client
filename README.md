# graphhopper-api-client

A wrapper around the Graphhopper API.

The code is generated from the [GraphHopper OpenAPI spec](https://docs.graphhopper.com/openapi.json) with `npm run generate`.

Besides this we also support a couple of APIs not in the OpenAPI spec: [src/experimentalAPI.ts](src/experimentalAPI.ts).

## Usage

    npm install @relive/graphhopper-api-client

### Code:

    import * as graphhopper from "@relive/graphhopper-api-client";
    import { VehicleProfileId } from '@relive/graphhopper-api-client/build/generated/graphhopper-api/model';

    // Endpoint of graphhopper-web
    const GRAPHHOPPER_BASE_URI = "http://localhost:8989";

    // Execute a routing request
    const routingAPI = new graphhopper.RoutingAPIApi(undefined, GRAPHHOPPER_BASE_URI);

    const routes = await routingAPI.getRoute({
        point: [
            [52.379189, 4.899431],  // Amsterdam
            [51.9225, 4.47917]      // Rotterdam
        ].map(c => c.join()),
        vehicle: VehicleProfileId.Bike,
        elevation: false
    });
