import React from 'react'
import DashNavbar from '../Components/DashBoardComponent.jsx/DashNavbar'
import TaskAdd from '../Components/DashBoardComponent.jsx/TaskAdd';

function Dashboard() {

    const user = JSON.parse(localStorage.getItem("user_login"));

  return (
    <>
    <DashNavbar></DashNavbar>
    <TaskAdd/>
    </>
  )
}

export default Dashboard
