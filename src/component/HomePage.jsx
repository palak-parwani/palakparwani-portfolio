import React from "react";
import { Row, Col } from "react-bootstrap";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function HomePage() {
  return (
    <>
      <div className="common-padding">
        <Row>
          <Col xxl={3} lg={12} md={12} sm={12}>
            <LeftSide />
          </Col>
          <Col xxl={9} lg={12} md={12} sm={12}>
            <RightSide />
          </Col>
        </Row>
      </div>
    </>
  );
}
