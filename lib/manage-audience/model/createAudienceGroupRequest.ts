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
import { Audience } from "./audience";

/**
 * Create audience for uploading user IDs (by JSON)
 */
export type CreateAudienceGroupRequest = {
  /**
   * The audience\'s name. This is case-insensitive, meaning AUDIENCE and audience are considered identical. Max character limit: 120
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group">description Documentation</a>
   */
  description?: string /**/;
  /**
   * To specify recipients by IFAs: set true. To specify recipients by user IDs: set false or omit isIfaAudience property.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group">isIfaAudience Documentation</a>
   */
  isIfaAudience?: boolean /**/;
  /**
   * The description to register for the job (in jobs[].description).
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group">uploadDescription Documentation</a>
   */
  uploadDescription?: string /**/;
  /**
   * An array of user IDs or IFAs. Max number: 10,000
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group">audiences Documentation</a>
   */
  audiences?: Array<Audience> /**/;
};
