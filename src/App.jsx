import axios from "axios";
import React, { Component } from "react";

class App extends Component {
  getStudentData = () => {
    axios.get("http://localhost:3000/api1/students").then(
      (response) => {
        console.log("成功了", response.data);
      },
      (error) => {
        console.log("失败了", error);
      }
    );
  };
  getCarData = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      (response) => {
        console.log("成功了", response.data);
      },
      (error) => {
        console.log("失败了", error);
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点击获取数据</button>
        <button onClick={this.getCarData}>获取数据</button>
      </div>
    );
  }
}

export default App;
