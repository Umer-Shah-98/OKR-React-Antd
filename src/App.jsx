// import React, { useState } from "react";
// import { createRoot } from "react-dom/client";
// import { DatePicker, message, Alert, Button } from "antd";
// import "./index.css";

// const App = () => {
//   const [date, setDate] = useState(null);
//   const [messageApi, contextHolder] = message.useMessage();
//   const handleChange = (value) => {
//     messageApi.info(
//       `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
//     );
//     setDate(value);
//   };
//   return (
//     <div style={{ width: 400, margin: "100px auto" }}>
//       <DatePicker
//         onChange={handleChange}
//         style={{ backgroundColor: "yellow" }}
//       />
//       <div style={{ marginTop: 16 }}>
//         {/* Selected Date: {date ? date.format("YYYY-MM-DD") : "None"} */}
//         <Alert
//           style={{ backgroundColor: "green" }}
//           message="Selected Date"
//           description={date ? date.format("YYYY-MM-DD") : "None"}
//         />
//       </div>
//       <Button onClick={() => message.info("Hello Ant Design")} type="primary">
//         Button
//       </Button>

//       {contextHolder}
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import { Checkbox, Col, ConfigProvider, Flex, Radio, Row, Switch } from 'antd';

// const App = () => {
//   const [checked, setChecked] = React.useState(false);
//   const timerRef = React.useRef();
//   React.useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setChecked((prev) => !prev);
//     }, 500);
//     return () => {
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//     };
//   }, []);

//   const nodes = (
//     <Flex gap="small">
//       <Checkbox checked={checked}>Checkbox</Checkbox>
//       <Radio checked={checked}>Radio</Radio>
//       <Switch checked={checked} />
//     </Flex>
//   );

//   return (
//     <Row gutter={[24, 24]}>
//       <Col span={24}>{nodes}</Col>
//       <Col span={24}>
//         <ConfigProvider theme={{ token: { motion: false } }}>{nodes}</ConfigProvider>
//       </Col>
//     </Row>
//   );
// };

// export default App;

import {
  Button,
  ConfigProvider,
  Space,
  Input,
  ColorPicker,
  Divider,
} from "antd";
import React, { useState } from "react";
import { Typography } from "antd";
import { Layout } from "./layout/Layout";
const { Text, Paragraph } = Typography;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("This is my initial Text");
  return (
    <>
      <Layout></Layout>
    </>
  );
};

export default App;
