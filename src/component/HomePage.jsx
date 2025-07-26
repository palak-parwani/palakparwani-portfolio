import React from "react";
import { Row, Col } from "react-bootstrap";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function HomePage() {
  return (
    <>
      <div className="common-padding">
        <Row>
          <Col md={3}>
            <LeftSide />
          </Col>
          <Col md={9}>
            <RightSide />
          </Col>
        </Row>
      </div>
    </>
  );
}
