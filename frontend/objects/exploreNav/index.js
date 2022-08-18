import Nav from "react-bootstrap/Nav";
import styles from "./exploreNav.module.css";
import { useState } from "react";

export const ExploreNav = (props) => {
  const [active, setActive] = useState("default");

  return (
    <div className={styles.navContainer}>
      <Nav
        className={styles.nav}
        activeKey={active}
        onSelect={(selectedKey) => setActive(selectedKey)}
      >
        <Nav.Link
          eventKey="default"
          className={styles.navItems}
          onClick={() => {
            props.handleCloseBubbles();
            props.handleCloseStreams();
            props.handleShowCategories();
          }}
        >
          Categories
        </Nav.Link>
        <Nav.Link
          eventKey="link-1"
          className={styles.navItems}
          onClick={() => {
            props.handleCloseCategories();
            props.handleCloseStreams();
            props.handleShowBubbles();
          }}
        >
          Bubbles
        </Nav.Link>
        <Nav.Link
          eventKey="link-2"
          className={styles.navItems}
          onClick={() => {
            props.handleCloseCategories();
            props.handleCloseBubbles();
            props.handleShowStreams();
          }}
        >
          Streams
        </Nav.Link>
      </Nav>
    </div>
  );
};
