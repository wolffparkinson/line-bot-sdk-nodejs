/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { QuotaType } from "./quotaType";

export type MessageQuotaResponse = {
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-quota">type Documentation</a>
   */
  type: QuotaType /**/;
  /**
   * The target limit for sending messages in the current month. This property is returned when the `type` property has a value of `limited`.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-quota">value Documentation</a>
   */
  value?: number /**/;
};

export namespace MessageQuotaResponse {}
