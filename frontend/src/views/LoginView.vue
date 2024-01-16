<template>
    <div class="new-container">
      <label for="name">Name</label>
      <input type="text" id="name">
  
      <label for="password">Password</label>
      <input type="password" id="password">
  
      <input type="submit" value="Submit">
    </div>
  </template>
  
  <script>
  export default {
    name: "login"
  };
  </script>
  
  <style>
  .new-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh; /* Adjust as needed to center vertically */
  }
  
  label {
    margin-bottom: 8px;
  }
  
  input {
    margin-bottom: 16px;
    padding: 8px;
    width: 200px; /* Adjust as needed */
  }
  
  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
  }
  
  input[type="submit"]:hover {
    background-color: #45a049;
  }
  </style>
  