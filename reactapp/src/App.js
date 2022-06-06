import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./components/pages/auth/LoginReg";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";

import Topic from "./components/pages/Topic";
import CreateTopic from "./components/pages/CreateTopic";
import ViewAllTopics from "./components/pages/ViewAllTopics";
import ViewTopicDescription from "./components/pages/ViewTopicDescription";
import Messages from "./components/pages/Messages";
import AllMessages from "./components/pages/AllMessages";
import DeadLetterQueue from "./components/pages/DeadLetterQueue";
import Logoutuser from "./components/pages/auth/Logoutuser";
import ChangePassword from "./components/pages/auth/ChangePassword";





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="Logoutuser" element={<Logoutuser />} />
            <Route path="ChangePassword" element={<ChangePassword />} />
          
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} /> </Route>
            <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/Topic" element={<Topic />} />
          <Route path="/Topic/CreateTopic" element={<CreateTopic />} />
          <Route path="/Topic/ViewAllTopics" element={<ViewAllTopics />} />
          <Route path="/Topic/ViewTopicDescription" element={<ViewTopicDescription />} />

          <Route path="/Messages" element={<Messages />} />
          <Route path="/Messages/AllMessages" element={<AllMessages />} />
          <Route path="/Messages/DeadLetterQueue" element={<DeadLetterQueue/>} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
