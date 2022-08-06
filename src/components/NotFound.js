import React from 'react';
import Layout from'./shared/Layout';

const NotFound = () => {
    const style = {
        fontWeight: 'bold',
        textAlign: 'center'
    }
    return (
        <Layout>
            <p style={style}>Cannot find that page!</p>
        </Layout>
    )
}

export default NotFound;