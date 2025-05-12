export const formatDistance = (totalDistance: number) => {
  const distance: number = Math.trunc(totalDistance);
  return distance < 1000 ? (
    <span>{distance} m</span>
  ) : (
    <span>{distance / 1000} km</span>
  );
};
