import { useSwipeable } from "react-swipeable";

function useImageSwiper(setCurrentIndex, length) {
  const handler = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % length),
    onSwipedRight: () => setCurrentIndex((prev) => (prev - 1) % length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return [handler];
}

export default useImageSwiper;
