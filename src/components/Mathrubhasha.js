const SingleEventDetails = (props) => {
    console.log(props);
    if (props && props.page === '1') {
        return (
            <div className="container">
                <h2>MatruBhasha Diwas</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis corporis minima excepturi animi voluptatibus, rem cupiditate sapiente accusantium quae voluptatum. Placeat nesciunt natus aliquid minus at dolor magnam ipsum eaque.
                </p>
            </div>

        );
    }
    if (props && props.page === '2') {
        return (
            <div className="container">
                <h2>FIT INDIA VIRTUAL RUN 2.0</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis corporis minima excepturi animi voluptatibus, rem cupiditate sapiente accusantium quae voluptatum. Placeat nesciunt natus aliquid minus at dolor magnam ipsum eaque.
                </p>
            </div>

        );
    }
    if (props && props.page === '3') {
        return (
            <div className="container">
                <h2>AZADI KA AMRIT MAHOTSAV</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis corporis minima excepturi animi voluptatibus, rem cupiditate sapiente accusantium quae voluptatum. Placeat nesciunt natus aliquid minus at dolor magnam ipsum eaque.
                </p>
            </div>

        );
    }

}

export default SingleEventDetails;