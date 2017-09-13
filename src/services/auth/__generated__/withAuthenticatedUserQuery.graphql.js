/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule withAuthenticatedUserQuery.graphql
 * @generated SignedSource<<c87aafa000e1d5897515ff1c2b94558a>>
 * @relayHash de96d3ef32018a900fc8edc102c54011
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/


/*
query withAuthenticatedUserQuery(
  $token: String!
) {
  authenticatedUser(token: $token) {
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "token",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "withAuthenticatedUserQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "token",
            "variableName": "token",
            "type": "String!"
          }
        ],
        "concreteType": "User",
        "name": "authenticatedUser",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "withAuthenticatedUserQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "token",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "withAuthenticatedUserQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "token",
            "variableName": "token",
            "type": "String!"
          }
        ],
        "concreteType": "User",
        "name": "authenticatedUser",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query withAuthenticatedUserQuery(\n  $token: String!\n) {\n  authenticatedUser(token: $token) {\n    id\n  }\n}\n"
};

module.exports = batch;