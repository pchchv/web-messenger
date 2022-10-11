import CreateForm from './CreateForm'
import React from "react"

const Home = () => {
    return (
    <div className="App">
        <h1 className=" main_title">
            <span className="mr_robot">Hello friend</span>
        </h1>
        <CreateForm />
    </div>
    )
}

export default Home