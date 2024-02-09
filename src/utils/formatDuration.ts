// Format seconds to hh:mm:ss
export const formatDuration = (duration: number) =>
  new Date(duration * 1000).toISOString().slice(11, 19);
