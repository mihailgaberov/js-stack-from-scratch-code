/**
 * Created by Mihail on 4/16/2017.
 */
// @flow

// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`
