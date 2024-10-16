import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

export const Today = () => {
  const [isVisible, setIsVisible] = useState(true); // Trạng thái hiển thị Typography
  
  useEffect(() => {
    // Thiết lập bộ đếm thời gian 5 giây để ẩn phần tử
    const timer = setTimeout(() => {
      setIsVisible(false); // Ẩn phần tử sau 5 giây
    }, 10000);

    // Dọn dẹp bộ đếm thời gian khi component bị unmount
    return () => clearTimeout(timer);
  }, []);

  // Lấy thông tin thời gian hiện tại
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var time = `${
    (hour < 4 && "night") ||
    (hour < 12 && "morning") ||
    (hour < 18 && "afternoon") ||
    (hour < 22 && "evening") ||
    "night"
  }`;
  var days = [
    "weekend",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "weekend",
  ];
  var day = days[date.getDay()];

  return (
    <div>
      {/* Hiển thị phần tử Typography nếu isVisible === true */}
      {isVisible && (
        <Typography variant="h5" component="h4" gutterBottom>
          {day} {hour}:{minute < 10 ? `0${minute}` : minute} Have a great{" "}
          {day === "weekend" ? day : time}.
        </Typography>
      )}
    </div>
  );
};
