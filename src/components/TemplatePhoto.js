// import { Modal } from "bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { Carousel, Modal } from "antd";
import { ZoomInOutlined } from "@ant-design/icons";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const TemplatePhoto = () => {
  const history = useNavigate()
    console.log('working from templetasde')
    //type npm start  ddfcz
  const [templates, setTemplates] = useState([]);
  const [visible, setVisible] = useState(false);
  const auth = useContext(AuthContext);
  console.log(auth);
  useEffect(() => {
    //Check if user is logged in
    !auth.isLoggedIn && history('/Display')
    fetch("https://ismaila-server.herokuapp.com/api/templates")
      .then((res) => res.json())
      .then((resData) => {
        setTemplates(resData);
      });
  }, []);
  const handleOnTemplateClick = (item) => {
    console.log("click", item);
  };

  // modal open function
  const onOpen = () => {
    setVisible(true);
  };
  // modal close function
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container">
      {/* <Modal visible={false} >
        <div>
         
        </div>
      </Modal> */}
      {auth.isLoggedIn && (
        <div>
          <b>Cover Letter Template Photo's</b>
        </div>
      )}
      <div className="row templates-resume-container ">
        {auth.isLoggedIn &&
          templates.map((template, index) => {
            return (
              <div
                // className="templates-details"
                className="form col-md-4 col-sm-6 col-12"
                key={template.id}
                onClick={onOpen}
              >
                <img
                  src={template.resumeUrl}
                  className="w-100"
                  style={{ height: "100%", position: "relative" }}
                />
                <div
                  onClick={onOpen}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    cursor: "pointer",
                  }}
                >
                  <ZoomInOutlined
                    style={{ color: "darkgreen", fontSize: "30px" }}
                  />
                </div>
                <div className="templates-info">
                  <p className="template-name">{template.name}</p>
                  <p>{template.details}</p>
                </div>
              </div>
            );
          })}
      </div>
      {/* this is antd modal, its visibilty depend on zoom icon */}
      <Modal
        visible={visible}
        onCancel={onClose}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        {/* this is antd carousel, we render all data from template */}
        <Carousel autoplay={true}>
          {templates.map((template, index) => (
            <div
              // className="templates-details"
              // className="col-12"
              key={template.id}
              onClick={() => handleOnTemplateClick(template)}
            >
              <img
                src={template.resumeUrl}
                className="w-100"
                style={{ height: "100%", position: "relative" }}
              />
              <div className="templates-info">
                <p className="template-name">{template.name}</p>
                <p>{template.details}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};

export default TemplatePhoto;
