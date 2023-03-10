import React, { useState } from "react";
import {
  AppBar,
  Container,
  IconButton,
  Drawer,
  Typography
} from "@mui/material";
import {
  colors,
  NavToolbar,
} from "./Tools";
import {Link} from 'gatsby';
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PropTypes from "prop-types"


export default function Header({ siteTitle }) {
  const [openMenu, setOpenMenu] = React.useState(false)

  return (
    <div>
      <AppBar sx={{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E20 90%)',
      border: 0,
      color: 'white',
      padding: '0 10px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      flexGrow: 1,
      display: 'block',
    }}>
      <Container maxWidth="xl">
        <NavToolbar disableGutters>
        
        <Typography variant="h6" >
            <Link className="Link2" to="/">
              Home
            </Link>
          </Typography>
          <Typography variant="h6" >
          <Link className="Link2" to="/">
              {siteTitle}
            </Link>
          </Typography>
            <IconButton onClick={() => setOpenMenu(!openMenu)}>
              <MenuOpenIcon
                sx={{ fontSize: "30px", color: colors.textColor }}
              />
            </IconButton>
            <Drawer
              PaperProps={{
                sx: {
                  backgroundColor: "lightblue",
                  width: 
                  {xs: 220
                  }
                }
              }}
              sx={{
                flexGrow: 1,
              }}
              anchor="left"
              open={openMenu}
              onClose={() => setOpenMenu(!openMenu)}
            >
              <ul>
          <li>
            <Link className="Link" to="/">
              Home
            </Link>
          </li>
          <br/>
          <li>
            <Link className="Link" to="/about">
              About
            </Link>
          </li>
          <br/>
          <li>
              <Link className="Link" to="/user/authorized/user-dashboard">
                <b>User Dashboard</b>
              </Link>
            </li>
            <hr />
            <li>
              <Link className="Link" to="/othersites/">
                <b>Other projects</b>
              </Link>
            </li>
            <li className="Link4">
              <Link className="Link4" to="/user/lists-reviews">
                Lists/Reviews
              </Link>
            </li>
        </ul>
            </Drawer>
          
        </NavToolbar>
      </Container>
    </AppBar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

