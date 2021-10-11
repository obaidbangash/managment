import React from 'react'

function Dashboard() {
    let token = localStorage.getItem("token");
    console.log(token, "token")
    return (
        <>
            <section className="main-section">

                <div className="container">
                    <button>Create User </button>

                </div>

            </section>
        </>
    )
}

export default Dashboard
