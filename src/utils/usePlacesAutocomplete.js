import { useEffect, useRef } from "react";
import { loadGooglePlaces } from "./googleMaps";

/**
 * Attaches Google's classic Places Autocomplete widget to a plain text
 * input, biased to Sri Lanka. Purely additive: the input keeps working as
 * an ordinary controlled text field the entire time — if Google Maps isn't
 * configured, fails to load, or the user just types instead of picking a
 * suggestion, nothing here ever runs and the field behaves exactly as it
 * did before Phase 3.
 *
 * `onPlaceSelected` only fires when the visitor actually picks a real
 * suggestion from the dropdown, with `{ address, placeId, lat, lng }`.
 */
export function usePlacesAutocomplete(inputRef, onPlaceSelected) {
  const onPlaceSelectedRef = useRef(onPlaceSelected);
  onPlaceSelectedRef.current = onPlaceSelected;

  useEffect(() => {
    let autocomplete;
    let listener;
    let cancelled = false;

    loadGooglePlaces().then((places) => {
      if (cancelled || !places || !inputRef.current) return;

      autocomplete = new places.Autocomplete(inputRef.current, {
        fields: ["formatted_address", "place_id", "geometry"],
        componentRestrictions: { country: "lk" },
      });

      listener = autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const location = place.geometry?.location;
        if (!location || !place.place_id) return;

        onPlaceSelectedRef.current({
          address: place.formatted_address ?? inputRef.current.value,
          placeId: place.place_id,
          lat: location.lat(),
          lng: location.lng(),
        });
      });
    });

    return () => {
      cancelled = true;
      if (listener) listener.remove();
      if (autocomplete) window.google?.maps?.event?.clearInstanceListeners(autocomplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputRef]);
}
