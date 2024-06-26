/**
 * Webhook Type Definition
 * Webhook event definition of the LINE Messaging API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DeliveryContext } from "./deliveryContext.js";
import { Event } from "./event.js";
import { EventMode } from "./eventMode.js";
import { ModuleContent } from "./moduleContent.js";
import { Source } from "./source.js";

/**
 * This event indicates that the module channel has been attached to the LINE Official Account. Sent to the webhook URL server of the module channel.
 */
import { EventBase } from "./models.js";

export type ModuleEvent = EventBase & {
  type: "module";
  /**
   */
  module: ModuleContent /**/;
};

export namespace ModuleEvent {}
