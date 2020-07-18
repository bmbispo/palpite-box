import React from 'react'
import '../css/styles.css' 
import Layout from '../components/Layout'




const MyApp = ({Component, pagesProps}) => {
    return(
           <Layout>
            <Component {...pagesProps}/>
         </Layout> 
    )
}
export default MyApp