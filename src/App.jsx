import React from 'react';
import axios from 'axios';

const App = () => {

    React.useEffect(() => {
        axios.get('/candidats')
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
    }, []);

    return (
        <div>
            app
        </div>
    );
}

export default App;
