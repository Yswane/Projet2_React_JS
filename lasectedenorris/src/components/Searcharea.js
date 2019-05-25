import React from 'react'


const Searcharea = (props) => {
    return(
        <div className="container">
            <div className="row">
                <section className="col s4 offeset-s3">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Rechercher Film" type="text" onChange={props.handleChange}/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}


export default Searcharea
