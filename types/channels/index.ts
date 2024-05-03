export interface ChannelResource {
  /** A Boolean value to indicate whether payload is wanted. Optional. */
  payload: boolean;
  /** A UUID or similar unique string that identifies this channel. */
  id: string;
  /** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
  resourceId: string;
  /** A version-specific identifier for the watched resource. */
  resourceUri: string;
  /** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
  token: string;
  /** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
  expiration: string;
  /** The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook". */
  type: string;
  /** The address where notifications are delivered for this channel. */
  address: string;
  /**
   *  Additional parameters controlling delivery channel behavior. Optional.
   *
   *  An object containing a list of "key": value pairs.
   *
   *  @example { "name": "wrench", "mass": "1.3kg", "count": "3" }
   */
  params: Record<string, string>;
  /** Identifies this as a notification channel used to watch for changes to a resource, which is api#channel. */
  kind: string;
}
