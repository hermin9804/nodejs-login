"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL로 전달되는 한글, 공백 인코딩 처리
app.use(bodyParser.urlencoded({ extended: true }));

//use -> 미들웨어 등록해주는 메서드
app.use("/", home); 

module.exports = app;
