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

import { AttachedModuleContent } from "./models.js";
import { DetachedModuleContent } from "./models.js";

export type ModuleContent =
  | AttachedModuleContent // attached
  | DetachedModuleContent // detached
  | UnknownModuleContent;

export type UnknownModuleContent = ModuleContentBase & {
  [key: string]: unknown;
};

export type ModuleContentBase = {
  /**
   * Type
   */
  type: string /**/;
};
