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
import { Action } from "./action";
import { FlexComponent } from "./flexComponent";

import { FlexComponentBase } from "./models";
export type FlexButton = FlexComponentBase & {
  type: "button";
  /**
   */
  flex?: number /**/;
  /**
   */
  color?: string /**/;
  /**
   */
  style?: FlexButton.StyleEnum /**/;
  /**
   */
  action?: Action /**/;
  /**
   */
  gravity?: FlexButton.GravityEnum /**/;
  /**
   */
  margin?: string /**/;
  /**
   */
  position?: FlexButton.PositionEnum /**/;
  /**
   */
  offsetTop?: string /**/;
  /**
   */
  offsetBottom?: string /**/;
  /**
   */
  offsetStart?: string /**/;
  /**
   */
  offsetEnd?: string /**/;
  /**
   */
  height?: FlexButton.HeightEnum /**/;
  /**
   */
  adjustMode?: FlexButton.AdjustModeEnum /**/;
  /**
   */
  scaling?: boolean /**/;
};

export namespace FlexButton {
  export type StyleEnum = "primary" | "secondary" | "link";
  export type GravityEnum = "top" | "bottom" | "center";
  export type PositionEnum = "relative" | "absolute";
  export type HeightEnum = "md" | "sm";
  export type AdjustModeEnum = "shrink-to-fit";
}
