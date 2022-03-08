import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";
import Title from './Title'

export default class Services extends Component {
state={
    services:[
        {
            icon:<FaCocktail/>,
            title:"Free Cocktails",
            info:'Cocktails TBA'
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:'Enjoy our hiking program....'
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle",
            info:'Shuttle TBA'
        },
        {
            icon:<FaBeer/>,
            title:"Free Beers",
            info:'Free beers in our happy hours TBA'
        }
    ]
}

  render() {
    return (
      <section className='services'>
          <Title title="services" />
          <div className='services-center'>
            {this.state.services.map((item, index) => {
                return (
                    <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                );
            })}
          </div>
      </section>
    );
  }
}
