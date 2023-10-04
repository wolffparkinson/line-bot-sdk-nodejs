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

import { ContentProvider } from "./contentProvider";
import { ImageSet } from "./imageSet";
import { MessageContent } from "./messageContent";

import { MessageContentBase } from "./models";

export type ImageMessageContent = MessageContentBase & {
  type: "image";
  /**
   * Message ID
   */
  id: string /**/;
  /**
   */
  contentProvider: ContentProvider /**/;
  /**
   */
  imageSet?: ImageSet /**/;
  /**
   * Quote token to quote this message.
   */
  quoteToken: string /**/;
};