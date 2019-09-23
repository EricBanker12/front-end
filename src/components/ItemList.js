import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import axios from 'axios'

//import Item from './Item'

function ItemList(props) {
    const [items, setItems] = useState([])

    // useEffect(()=>{
    //     axios.get('backend-url')
    //         .then(resp=>{
    //             console.log(resp)
    //         })
    //         .catch(err=>{
    //             console.error(err)
    //         })
    // }, [])

    return (
        <Table>
            <thead>
                <h3>My Top Nine <span className="text-muted">{props.category}</span></h3>
            </thead>
            <tbody>
                {/* {items.map(item => <Item {...item} />)} */}
            </tbody>
        </Table>
    )
}