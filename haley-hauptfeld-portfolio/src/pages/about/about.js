import React, { Component } from 'react'
import './about.css'
import Description from '../../components/description/description.js'
import headshot from '../../assets/WP0147.png'
import { GiMusicalNotes } from "react-icons/gi"

export default class About extends Component {
    render() {
        return (
            <>
                <Description
                    title={"Hi! My name is Haley Hauptfeld."}
                    text={"I am a technical product manager with a passion for developing user-centric, impactful solution."}
                    image={headshot}
                />
                <Description
                    title={"What do I do?"}
                    text={"I am responsible for managing the success of a product through it's lifecycle. From ideating to implementation to a release, I do whatever is needed to make the product as successful as it can be. With my background in full stack software engineering, I have a deep understanding of the technical components that lie underneath a product, and bridge the gap between business partners, engineering teams, and users."}
                />
             <Description
                    title={"... but what do I actually do?"}
                    text={"Creating a successful product means different things for different solutions. A large part of product is taking high level ideas and turning them into tangile outcomes. This is an area I'm particularly passionate about, but it can still mean different thigns depending on the context of the product! But if I had to come up with a list of tasks I complete to make a product successful, here is a list (that is inclusive, but not limited to): developing solution intent documents, outlining product roadmaps, building user journeys, breaking down capabilities into features and features into user stories, refining user stories with developers... etc. "}
                />
                <GiMusicalNotes />
                <Description
                    title={"These are a few of my favorite things that keep me learning more about how to be a successful product manager..."}
                    
                    text={"Product HQ, Nielsen Norman, GeeksforGeeks, anything written by Gayle McDowell"}
                />
            </>
        )
    }
}