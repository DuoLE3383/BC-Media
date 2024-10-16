import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Brightness4, Brightness7 } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "fixed",
    bottom: theme.spacing(6),
    right: theme.spacing(6),
    height: "2.5rem",
    width: "2.5rem",
  },
  icon: {
    fontSize: "1.25rem",
  },
  timeWrapper: {
    position: "fixed",
    bottom: theme.spacing(12),
    right: theme.spacing(6),
    textAlign: "center",
  },
}));

// Component ThemeToggle với hiển thị ngày và giờ
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const classes = useStyles();
  const [currentTime, setCurrentTime] = useState({
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    day: new Date().getDay(),
  });

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Cập nhật thời gian mỗi phút
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime({
        hour: now.getHours(),
        minute: now.getMinutes(),
        day: now.getDay(),
      });
    }, 1000 * 60); // Cập nhật mỗi phút

    return () => clearInterval(interval); // Dọn dẹp bộ đếm thời gian
  }, []);

  // Thiết lập câu chào dựa trên thời gian
  const hour = currentTime.hour;
  const minute = currentTime.minute < 10 ? `0${currentTime.minute}` : currentTime.minute;
  const day = days[currentTime.day];

  const greeting =
    (hour < 4 && "Good night") ||
    (hour < 12 && "Good morning") ||
    (hour < 18 && "Good afternoon") ||
    (hour < 22 && "Good evening") ||
    "Good night";

  return (
    <div>
      {/* Hiển thị ngày, giờ và câu chào */}
      <div className={classes.timeWrapper}>
        <Typography variant="h6">
       {day}, {hour}:{minute} BC Media {greeting} 
          
        </Typography>
      </div>

      {/* Nút chuyển đổi theme */}
      <Tooltip title={"Change Theme"} placement="right" TransitionComponent={Zoom}>
        <IconButton
          color="inherit"
          onClick={toggleTheme}
          aria-label={"Change Theme"}
          className={classes.iconButton}
        >
          {theme === "light" ? (
            <Brightness4 className={classes.icon} />
          ) : (
            <Brightness7 className={classes.icon} />
          )}
        </IconButton>
      </Tooltip>
    </div>
  );
};
