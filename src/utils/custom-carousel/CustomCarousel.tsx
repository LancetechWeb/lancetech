import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CarouselProps {
  items: React.ReactNode[];
  scrollInterval?: number; // Interval in milliseconds for auto-scroll
}

const Carousel: React.FC<CarouselProps> = ({ items, scrollInterval = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to the next item
  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("right");
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [currentIndex, scrollInterval]);

  const handleScroll = (direction: "left" | "right") => {
    const nextIndex =
      direction === "right"
        ? (currentIndex + 1) % items.length
        : (currentIndex - 1 + items.length) % items.length;

    setCurrentIndex(nextIndex);

    // Scroll the container
    if (containerRef.current) {
      const itemWidth = containerRef.current.scrollWidth / items.length;
      containerRef.current.scrollTo({
        left: itemWidth * nextIndex,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Carousel Items */}
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          width: "100%",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              minWidth: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px", // Customize the height
              backgroundColor: "#f5f5f5",
              flexShrink: 0,
            }}
          >
            {item}
          </Box>
        ))}
      </Box>

      {/* Navigation Buttons */}
      <IconButton
        onClick={() => handleScroll("left")}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={() => handleScroll("right")}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Carousel;
