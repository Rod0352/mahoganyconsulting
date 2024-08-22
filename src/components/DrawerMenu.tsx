import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

export default function DrawerMenu() {
  const about = window.innerHeight;
  // const features = window.innerHeight * 2;
  const features = window.innerWidth < 600 ? window.innerHeight * 3 : window.innerHeight * 2;
  const services = window.innerWidth < 600 ? window.innerHeight * 5.9 : window.innerHeight * 2.7;
  const contact = document.body.scrollHeight;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (ref: any) => {
    window.scrollTo({ top: ref, behavior: "smooth" });
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "#438e5d",
        }}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose(about)}>About Me</MenuItem>
        <MenuItem onClick={() => handleClose(features)}>Featured In</MenuItem>
        <MenuItem onClick={() => handleClose(services)}>Services</MenuItem>
        <MenuItem onClick={() => handleClose(contact)}>Contact</MenuItem>
      </Menu>
    </div>
  );
}
